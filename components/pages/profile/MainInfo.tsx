import type { FC } from 'react';
import { faHandHoldingUsd, faList, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
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
  contactEmail: yup.string()
    .email('Invalid format')
    .required('Email is required'),
  whatsApp: yup.string(),
  facebook: yup.string(),
});

export const MainInfo: FC<MainInfoProps> = ({updateInfo, user, loading}) => {
  const { register, handleSubmit, errors, watch, setValue } = useForm<MainInfoStateForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: user.user_metadata ? {
      instagramAccount: user.user_metadata.user.username,
      category: user.user_metadata.category,
      pricePerPost: user.user_metadata.price.post.toString(),
      pricePerStory: user.user_metadata.price.story.toString(),
      desc: user.user_metadata.desc,
      contactEmail: user.user_metadata.contactEmail,
      whatsApp: user.user_metadata.messengers.whatsApp,
      facebook: user.user_metadata.messengers.facebook
    } : undefined,
  });

  const isPrevStateForm = () => {
    if (!user.user_metadata) return undefined;
    const {category, contactEmail, price, messengers, desc, user: instagramUser} = user.user_metadata;
    let prevStateFormUser: MainInfoStateForm = {
      instagramAccount: instagramUser.username,
      category,
      pricePerPost: price.post.toString(),
      pricePerStory: price.story.toString(),
      desc,
      contactEmail,
      whatsApp: messengers.whatsApp,
      facebook: messengers.facebook,
    };

    const currentStateFormUser: MainInfoStateForm = {
      instagramAccount: watch('instagramAccount'),
      category: watch('category'),
      pricePerPost: watch('pricePerPost'),
      pricePerStory: watch('pricePerStory'),
      desc: watch('desc'),
      contactEmail: watch('contactEmail'),
      whatsApp: watch('whatsApp'),
      facebook: watch('facebook')
    }

    return equal(prevStateFormUser, currentStateFormUser);
  }

  const customEmailLabel = () => (
    <small>
      Contact email.&nbsp;
      <span 
        onClick={() => setValue('contactEmail', user.email)}
        style={{textDecoration: 'underline', cursor: 'pointer'}}
      >Set email from profile</span>
    </small>
  )

  return (
    <>
      <hr className="d-block d-lg-none bg-primary my-5 my-lg-0" style={{ height: '5px'}} />
      <div className="col-lg-6 col-md-12">
        <form onSubmit={handleSubmit(updateInfo)}>
          <h2>Main</h2>
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
          <h2>Bio</h2>
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
          <h2>Contacts</h2>
          <div className="form-group">
            <Input
              register={register}
              name="contactEmail"
              placeholder="Email"
              icon={faEnvelope}
              error={errors.contactEmail}
              label={customEmailLabel}
            />
          </div>
          <div className="row">
            <div className="col-sm-6 pr-sm-2">
              <div className="form-group">
                <Input
                  register={register}
                  name="whatsApp"
                  placeholder="WhatsApp"
                  icon={faWhatsapp}
                  error={errors.whatsApp}
                />
              </div>
            </div>
            <div className="col-sm-6 pl-sm-2">
              <div className="form-group">
                <Input
                  register={register}
                  name="facebook"
                  placeholder="Facebook"
                  icon={faFacebook}
                  error={errors.facebook}
                />  
              </div>
            </div>
          </div>
          <button 
            type="submit" 
            className="btn btn-xl btn-primary btn-block"
            disabled={isPrevStateForm() || loading}
          >
            {
              loading
                ? <div className="spinner-border spinner-border-sm spinner-fill" />
                : 'Update'
            }
          </button>
        </form>
      </div>
    </>
  )
}
