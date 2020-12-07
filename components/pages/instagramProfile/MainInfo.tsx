import type { FC } from 'react';
import { faHandHoldingUsd, faList, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import equal from 'deep-equal';
import { isMobile } from 'react-device-detect';

import { User } from '@/types';
import { categories } from '@/types';
import { Input } from '@/components/common';
import { MainInfoStateForm } from '@/pages/instagram_profile';

interface MainInfoProps {
  user: User,
  updateInfo: (data: MainInfoStateForm) => void,
  loading: boolean,
}

const validationSchema = yup.object<MainInfoStateForm>().shape({
  instagramAccount: yup.string()
    .required('Account is required'),
  category: yup.string()
    .required('Category is required')
    .oneOf(categories, 'Pick category from list'),
  pricePerStory: yup.string()
    .required('Price is required')
    .matches(/^[0-9]+$/g, 'Price must be a number'),
  pricePerPost: yup.string()
    .required('Price is required')
    .matches(/^[0-9]+$/g, 'Price must be a number'),
  desc: yup.string()
    .min(30, 'Min. 30 characters required')
    .required('Short information is required'),
});

export const MainInfo: FC<MainInfoProps> = ({updateInfo, user, loading}) => {
  const { register, handleSubmit, errors, watch } = useForm<MainInfoStateForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: user.user_metadata?.instagram ? {
      instagramAccount: user.user_metadata.instagram.user.username,
      category: user.user_metadata.instagram.category,
      pricePerPost: user.user_metadata.instagram.price.post.toString(),
      pricePerStory: user.user_metadata.instagram.price.story.toString(),
      desc: user.user_metadata.instagram.desc,
    } : undefined,
  });

  const isPrevStateForm = () => {
    if (!user.user_metadata?.instagram) return undefined;
    const {category, price, desc, user: instagramUser} = user.user_metadata.instagram;
    const prevStateFormUser: MainInfoStateForm = {
      instagramAccount: instagramUser.username,
      category,
      pricePerPost: price.post.toString(),
      pricePerStory: price.story.toString(),
      desc,
    };

    const currentStateFormUser: MainInfoStateForm = {
      instagramAccount: watch('instagramAccount'),
      category: watch('category'),
      pricePerPost: watch('pricePerPost'),
      pricePerStory: watch('pricePerStory'),
      desc: watch('desc'),
    }

    return equal(prevStateFormUser, currentStateFormUser);
  }

  return (
    <>
      <hr className="d-block d-lg-none bg-primary my-5 my-lg-0" style={{ height: '5px'}} />
      <div className="col-lg-6 col-md-12" style={{ zIndex: 1 }}>
        <form onSubmit={handleSubmit(updateInfo)}>
          <h3>Main</h3>
          <div className="form-group">
            <Input
              register={register}
              name="instagramAccount"
              placeholder="Instagram account"
              icon={faInstagram}
              error={errors.instagramAccount}
              label="Username"
            />
          </div>
          <div className="form-group">
            <Input
              list="categories"
              register={register}
              name="category"
              placeholder="Category"
              icon={faList}
              error={errors.category}
              label="Category"
            />
            <datalist id="categories">
              {categories.map(category => <option key={category} value={category} />)}
            </datalist>
          </div>
          <div className="row">
            <div className="col-sm-6 pr-sm-2">
              <Input
                register={register}
                name="pricePerStory"
                placeholder="Price per story"
                icon={faHandHoldingUsd}
                error={errors.pricePerStory}
                label="Price per story"
              />
            </div>
            <div className="col-sm-6 pl-sm-2">
              <Input
                register={register}
                name="pricePerPost"
                placeholder="Price per post"
                icon={faHandHoldingUsd}
                error={errors.pricePerPost}
                label="Price per post"
              />
            </div>
          </div>
          <h3>Bio</h3>
          <div className="form-group">
            <Input
              textarea={true}
              register={register}
              name="desc"
              placeholder="Short description"
              icon={faInfoCircle}
              error={errors.desc}
              label="Short information about you"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className={`btn btn-${isMobile ? 'md' : 'xl'} btn-primary btn-block`}
              disabled={isPrevStateForm() || loading}
              style={{zIndex: 10, width: isMobile ? '80%' : '100%'}}
            >
              {
                loading
                  ? <div className="spinner-border spinner-border-sm spinner-fill" />
                  : 'Update'
              }
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
