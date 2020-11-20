import type { FC } from 'react';
import { faHandHoldingUsd, faList } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import equal from 'deep-equal';

import { User } from '@/types';
import { categories } from '@/types';
import { Input } from '@/components/common';
import { MainInfoStateForm } from '@/pages/profile';

// TODO SETTINGS CHANGE
interface MainInfoProps {
  user: User,
  updateInfo: (data: MainInfoStateForm) => void,
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
    .matches(/^[0-9]+$/g, 'Price must be a number')
});

export const MainInfo: FC<MainInfoProps> = ({updateInfo, user}) => {
  const { register, handleSubmit, errors, formState, watch } = useForm<MainInfoStateForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: user.user_metadata ? {
      instagramAccount: user.user_metadata.user.username,
      category: user.user_metadata.category,
      pricePerPost: user.user_metadata.price.post.toString(),
      pricePerStory: user.user_metadata.price.story.toString(),
    } : undefined,
  });

  const isPrevStateForm = () => {
    if (!user.user_metadata) return undefined;
    let prevStateFormUser: MainInfoStateForm = {
      instagramAccount: user.user_metadata.user.username,
      category: user.user_metadata.category,
      pricePerPost: user.user_metadata.price.post.toString(),
      pricePerStory: user.user_metadata.price.story.toString(),
    };

    const currentStateFormUser: MainInfoStateForm = {
      instagramAccount: watch('instagramAccount'),
      category: watch('category'),
      pricePerPost: watch('pricePerPost'),
      pricePerStory: watch('pricePerStory'),
    }

    return equal(prevStateFormUser, currentStateFormUser);
  }

  return (
    <>
      <hr className="d-block d-lg-none bg-primary my-5 my-lg-0" style={{ height: '5px'}} />
      <div className="col-lg-6 col-md-12">
        <form onSubmit={handleSubmit(updateInfo)}>
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
              list="categories"
              register={register}
              name="category"
              placeholder="Category"
              icon={faList}
              error={errors.category}
            />
            <datalist id="categories">
              {categories.map(category => <option value={category} />)}
            </datalist>
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
          <button 
            type="submit" 
            className="btn btn-xl btn-primary btn-block"
            disabled={isPrevStateForm() || formState.isDirty}
          >Update</button>
        </form>
      </div>
    </>
  )
}
