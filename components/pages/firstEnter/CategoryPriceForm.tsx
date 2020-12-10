import { FC, useState } from 'react';
import { faHandHoldingUsd, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { isCategory, isNumber } from '@/helpers';
import { categories, Category, InstagramMetadata, InstaUser } from '@/types';
import { Input } from '@/components/common';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {DeepMap, FieldError} from 'react-hook-form';
import {FirstEnterForm} from '@/pages/first_enter';
export interface PriceValueForm {
  story: string,
  post: string,
}
interface CategoryFormProps {
  register: any,
  errors: DeepMap<FirstEnterForm, FieldError>,
  instaUser: InstaUser,
  updateMetadataLoading: boolean,
}

export const CategoryPriceForm: FC<CategoryFormProps> = ({
  register,
  errors,
  instaUser,
  updateMetadataLoading
}) => {
  return (
    <div className={`tab-pane fade`} id="CategoryAndPrice" role="tabpanel">
      <div className="row pt-4">
        <div className="col-12">
          <Input
            register={register}
            textarea={true}
            name="profile.desc"
            placeholder="Short description"
            icon={faInfoCircle}
            label="Tell us a short story about your bla bla bla... (min 30. characters)"
            error={errors.profile?.desc}
          />
        </div>
        
        <div className="col-12">
          <datalist id="categories">
            {categories.map(category => <option key={category} value={category} />)}
          </datalist>
          <Input
            register={register}
            list="categories"
            name="profile.category"
            placeholder="Category"
            icon={faList}
            label={() => <small>To continue, pick category from <span className="text-primary">existing one</span></small>}
            error={errors.profile?.category}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            register={register}
            icon={faHandHoldingUsd}
            name="profile.pricePerStory"
            placeholder="Price per story"
            error={errors.profile?.pricePerStory}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            register={register}
            icon={faHandHoldingUsd}
            name="profile.pricePerPost"
            placeholder="Price per post"
            error={errors.profile?.pricePerPost}
          />
        </div>
        <small style={{transform: 'translateY(-5px)'}}>Fill price fields <span className="text-primary">with digits.</span> All prices will be in dollars</small>
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-link mt-2 mb-3 mb-md-0"
            style={{zIndex: 10}}
          >
            {
              updateMetadataLoading
                ? <div className="spinner-border spinner-border-sm spinner-fill" />
                : <>
                    <span className="btn-text">Finish</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <path data-name="Icon Color" d="M10.909,5.818H0V2.909H10.909V0L16,4.243,10.909,8.485Z" transform="translate(0 4)" fill="#006eff"></path>
                    </svg>
                  </>
            }
          </button>
        </div>
      </div>
    </div>
  )
};
