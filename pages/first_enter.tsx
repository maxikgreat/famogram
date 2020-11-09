import { useState } from 'react';

import { Category } from '@/types'
import { BaseLayout } from '@/components/layouts'
import { CategoryForm, InstagramForm, PriceForm } from '@pagesComponents/firstEnter';
import { useCheckAccount } from '@/hooks/useInstagram';

export interface InstagramValueForm {
  value: string,
  error: string | null,
}

export interface CategoryValueForm {
  value: Category | null,
  error: string | null,
}

export interface PriceValueForm {
  value: {
    story: string,
    post: string,
  },
  error: string | null,
}

export default function FirstEnter() {
  const [activeTab, setActiveTab] = useState(0);

  const [instagramAccount, setInstagramAccount] = useState<InstagramValueForm>({
    value: '',
    error: null,
  });
  const [category, setCategory] = useState<CategoryValueForm>({
    value: null,
    error: null,
  });
  const [price, setPrice] = useState<PriceValueForm>({
    value: {
      story: '',
      post: '',
    },
    error: null,
  });

  const [checkAccount, checkAccountState] = useCheckAccount();
  
  return (
    <BaseLayout className="first-enter">
      <section className="fabrx-section bg-white mt-5">
        <div className="container py-0 py-md-5">
          <div className="pr-0 pt-0 pt-lg-3 pb-4 pb-md-5">
            <ul className="nav nav-tabs nav-tabs-md bg-transparent nav-tabs-line nav-justified">
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#Instagram">1. Instagram</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" data-toggle="tab" href="#Category">2. Category</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" data-toggle="tab" href="#Price">3. Price</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <InstagramForm
                instagramAccount={instagramAccount}
                setInstagramAccount={setInstagramAccount}
                checkAccount={checkAccount}
                checkAccountState={checkAccountState}
              />
              <CategoryForm />
              <PriceForm />
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}