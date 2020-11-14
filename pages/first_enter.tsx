import { useState } from 'react';

import { Category, InstaUser } from '@/types'
import { BaseLayout } from '@/components/layouts'
import { CategoryForm, InstagramForm, PriceForm } from '@pagesComponents/firstEnter';
import { useCheckAccount, useUpdateMetadata } from '@/hooks';
import { withAuth } from '@/services/auth0';
import { User } from '@/store/user/types';

export interface InstagramValueForm {
  value: string,
  user: InstaUser | null,
}

export interface CategoryValueForm {
  value: string,
  passed: boolean,
}

export interface PriceValueForm {
  value: {
    story: string,
    post: string,
  },
}

interface FirstEnterProps {
  user: User,
}

export const getServerSideProps = withAuth();

export default function FirstEnter({ user }: FirstEnterProps) {
  const [instagramAccount, setInstagramAccount] = useState<InstagramValueForm>({
    value: '',
    user: null
  });
  const [category, setCategory] = useState<CategoryValueForm>({
    value: '',
    passed: false,
  });
  const [price, setPrice] = useState<PriceValueForm>({
    value: {
      story: '',
      post: '',
    },
  });

  const [checkAccount, checkAccountState] = useCheckAccount();
  const [updateMetadata, updateMetadataState] = useUpdateMetadata();

  const finishHandler = () => {
    const metadata = {
      userId: user.sub,
      user: instagramAccount.user as InstaUser,
      category: category.value as Category,
      price: {
        story: Number(price.value.story),
        post: Number(price.value.post),
      }
    }

    updateMetadata(metadata);
  }
  
  return (
    <BaseLayout className="first-enter">
      <section className="fabrx-section bg-white mt-5">
        <div className="container py-0 py-md-5">
          <div className="pr-0 pt-0 pt-lg-3 pb-4 pb-md-5">
            <ul className="nav nav-tabs nav-tabs-md bg-transparent nav-tabs-line nav-justified">
              <li className="nav-item">
                <a className={`nav-link ${!instagramAccount.user && 'active'}`} data-toggle="tab" href="#Instagram">1. Instagram</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${(instagramAccount.user && !category.passed && 'active')} ${!instagramAccount.user && 'disabled'}`} data-toggle="tab" href="#Category">2. Category</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${category.passed ? 'active' : 'disabled'}`} data-toggle="tab" href="#Price">3. Price</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <InstagramForm
                instagramAccount={instagramAccount}
                setInstagramAccount={setInstagramAccount}
                checkAccount={checkAccount}
                checkAccountState={{ 
                  loading: checkAccountState.loading,
                  error: checkAccountState.error,
                }}
              />
              <CategoryForm 
                instagramUser={instagramAccount.user} 
                category={category}
                setCategory={setCategory}
              />
              <PriceForm
                isCategoryPassed={category.passed}
                price={price}
                setPrice={setPrice}
                finishHandler={finishHandler}
              />
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}