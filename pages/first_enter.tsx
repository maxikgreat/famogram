import { useState } from 'react';

import { Category, InstaUser } from '@/types'
import { BaseLayout } from '@/components/layouts'
import { CategoryForm, InstagramForm, PriceForm } from '@pagesComponents/firstEnter';
import { useCheckAccount } from '@/hooks/useInstagram';

export interface InstagramValueForm {
  value: string,
  user: InstaUser | null,
}

export interface CategoryValueForm {
  value: string,
  error: string | null,
  passed: boolean,
}

export interface PriceValueForm {
  value: {
    story: string,
    post: string,
  },
  error: {
    story: string | null,
    post: string | null,
  }
}

export default function FirstEnter() {
  const [instagramAccount, setInstagramAccount] = useState<InstagramValueForm>({
    value: '',
    user: null
  });
  const [category, setCategory] = useState<CategoryValueForm>({
    value: '',
    error: null,
    passed: false,
  });
  const [price, setPrice] = useState<PriceValueForm>({
    value: {
      story: '',
      post: '',
    },
    error: {
      story: null,
      post: null, 
    },
  });

  const [checkAccount, checkAccountState] = useCheckAccount();
  
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
              />
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}