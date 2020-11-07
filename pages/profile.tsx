import { faHandHoldingUsd, faList } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { BaseLayout } from "@/components/layouts";
import { Input } from '@/components/common';
import { Category } from '@/types';
import { withAuth } from '@/services/auth0';

const positiveNumberStr = 'Price must be positive and not empty';

interface FormState {
  instagramAccount: string,
  category: Category | null,
  pricePerStory: string,
  pricePerPost: string,
}

const validationSchema = yup.object<FormState>().shape({
  instagramAccount: yup.string()
    .required('Account is required'),
  category: yup.string()
    .required('Category is required'),
  pricePerStory: yup.string()
    .required('Price is required')
    .matches(/^[0-9]+$/g, 'Price must be a number'),
  pricePerPost: yup.string()
    .required('Price is required')
    .matches(/^[0-9]+$/g, 'Price must be a number')
});

export const getServerSideProps = withAuth();

export default function Profile() {
  const { register, handleSubmit, errors } = useForm<FormState>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormState) => {
    console.log(data);
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
              <form className="mt-4 py-2" onSubmit={handleSubmit(onSubmit)}>
                <small className="text-muted mb-3 d-block">Multiple users? we offer custom tailored packages including premium support and detailed analytics.</small>
                <div className="form-group">
                  <Input
                    register={register}
                    name="instagramAccount"
                    placeholder="Instagram account"
                    icon={faInstagram}
                    error={errors.instagramAccount}
                  />
                </div>
                <div className="form-group">
                  <Input
                    register={register}
                    name="category"
                    placeholder="Category"
                    icon={faList}
                    error={errors.category}
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6 pr-sm-2">
                    <div className="form-group">
                      <Input
                        register={register}
                        name="pricePerStory"
                        placeholder="Price per story"
                        icon={faHandHoldingUsd}
                        error={errors.pricePerStory}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 pl-sm-2">
                    <div className="form-group">
                      <Input
                        register={register}
                        name="pricePerPost"
                        placeholder="Price per post"
                        icon={faHandHoldingUsd}
                        error={errors.pricePerPost}
                      />  
                    </div>
                  </div>
                  <small className="text-muted mb-3 d-block">Multiple users? we offer custom tailored packages including premium support and detailed analytics.</small>
                </div>
                <button type="submit" className="btn btn-xl btn-primary btn-block">Create</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
};
