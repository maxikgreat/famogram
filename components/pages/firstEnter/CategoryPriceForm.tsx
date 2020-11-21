import { FC, useState } from 'react';
import { faHandHoldingUsd, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { isCategory, isNumber } from '@/helpers';
import { categories, Category, InstagramMetadata, InstaUser } from '@/types';
import { Input } from '@/components/common';
import { faList } from '@fortawesome/free-solid-svg-icons';
export interface PriceValueForm {
  story: string,
  post: string,
}
interface CategoryFormProps {
  instaUser: InstaUser,
  finishHandler: (data: InstagramMetadata) => void,
  updateMetadataLoading: boolean,
}

export const CategoryPriceForm: FC<CategoryFormProps> = ({ 
  instaUser,
  finishHandler,
  updateMetadataLoading
}) => {
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState<PriceValueForm>({
    story: '',
    post: '',
  });

  const onChange = (value: string, name: 'post' | 'story') => {
    let str = value;
    if (str.includes(',')) str = str.replace(',', '.');
    setPrice(prevState => ({ 
      ...prevState,
      [name]: str,
    }));
  }

  const checkAllFieldsPassed = () => 
    isCategory(category) && (isNumber(price.story) && isNumber(price.post)) && desc.length > 30

  return (
    <div className={`tab-pane fade`} id="CategoryAndPrice" role="tabpanel">
      <div className="row hero-caption pt-4">
        <div className="col-12">
          <Input
            textarea={true}
            name="desc"
            placeholder="Short description"
            icon={faInfoCircle}
            onChange={({ target: { value }}) => setDesc(value)}
          />
        </div>
        <p>Tell us a short story about your bla bla bla...<span className="text-primary">min. 30 characters</span></p>
        <div className="col-12">
          <datalist id="categories">
            {categories.map(category => <option key={category} value={category} />)}
          </datalist>
          <Input
            list="categories"
            name="category"
            placeholder="Category"
            icon={faList}
            onChange={({ target: { value }}) => setCategory(value)}
          />
        </div>
        <p>To continue, pick category from <span className="text-primary">existing one</span></p>
        <div className="col-12 col-md-6">
          <Input
            icon={faHandHoldingUsd}
            name="pricePerStory"
            placeholder="Price per story"
            value={price.story}
            onChange={({ target: { value }}) => onChange(value, 'story')}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            icon={faHandHoldingUsd}
            name="pricePerPost"
            placeholder="Price per post"
            value={price.post}
            onChange={({ target: { value }}) => onChange(value, 'post')}
          />
        </div>
        <p>Fill price fields <span className="text-primary">with digits.</span> All prices will be in dollars</p>
        <div className="d-flex justify-content-end">
          <button 
            className={`btn btn-link mt-2 mb-3 mb-md-0 ${!checkAllFieldsPassed() && 'disabled'}`}
            onClick={() => finishHandler({
              user: instaUser,
              desc,
              category: category as Category,
              price: {
                story: Number(price.story),
                post: Number(price.post),
              },
            })}
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
