import { ChangeEvent, useState } from 'react';
import { faHandHoldingUsd, faList } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { BaseLayout } from "@/components/layouts";
import { Input } from '@/components/common';
import { Category } from '@/types';

interface FormState {
  instagramAccount: string,
  category: Category | null,
  pricePerStory: string,
  pricePerPost: string,
}

export default function Profile() {
  const [form, setForm] = useState<FormState>({
    instagramAccount: '',
    category: null,
    pricePerPost: '',
    pricePerStory: '',
  });

  const onChangeHandler = ({ target: { value, name }}: ChangeEvent<HTMLInputElement>) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <BaseLayout className="profile">
      <section className="fabrx-section bg-white mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="hero-caption pr-0 pr-md-5">
                <h2 className="font-weight-bold">A platform for collaboration.</h2>
                <p className="h6 pr-0 pr-md-5">If your company requires custom features and premuim support, we offer solutions to startups and big corporations.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <form className="mt-4 py-2">
                <small className="text-muted mb-3 d-block">Multiple users? we offer custom tailored packages including premium support and detailed analytics.</small>
                <div className="form-group">
                  <Input
                    name="instagramAccount"
                    placeholder="Instagram account"
                    value={form.instagramAccount}
                    onChange={onChangeHandler}
                    icon={faInstagram}
                  />
                </div>
                <div className="form-group">
                  <Input
                    name="category"
                    placeholder="Category"
                    value={form.category || ''}
                    onChange={onChangeHandler}
                    icon={faList}
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6 pr-sm-2">
                    <div className="form-group">
                      <Input
                        name="pricePerStory"
                        placeholder="Price per story"
                        value={form.pricePerStory}
                        onChange={onChangeHandler}
                        icon={faHandHoldingUsd}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 pl-sm-2">
                    <div className="form-group">
                      <Input
                        name="pricePerPost"
                        placeholder="Price per post"
                        value={form.pricePerPost}
                        onChange={onChangeHandler}
                        icon={faHandHoldingUsd}
                      />  
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-xl btn-primary btn-block">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
};
