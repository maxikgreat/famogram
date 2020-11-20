import { FC, Dispatch, SetStateAction } from 'react';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

import { PriceValueForm } from '@/pages/first_enter';

import { isCategory, isNumber } from '@/helpers';
import { InstaUser, categories } from '@/types';
import { Input } from '@/components/common';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { CategoryValueForm } from '@/pages/first_enter';
import { isNum } from 'react-toastify/dist/utils';

interface CategoryFormProps {
  instagramUser: InstaUser | null,
  category: CategoryValueForm,
  setCategory: Dispatch<SetStateAction<CategoryValueForm>>,
  isCategoryPassed: boolean,
  price: PriceValueForm,
  setPrice: Dispatch<SetStateAction<PriceValueForm>>,
}

export const CategoryPriceForm: FC<CategoryFormProps> = ({ 
  instagramUser, 
  category, 
  setCategory,
  isCategoryPassed,
  price,
  setPrice
}) => {

  const onChange = (value: string, name: 'post' | 'story') => {
    let str = value;
    if (str.includes(',')) str = str.replace(',', '.');
    setPrice(prevState => ({ 
      ...prevState,
      [name]: str,
    }));
  }

  const checkAllFieldsPassed = () => 
    isCategory(category.value) && (isNumber(price.story) && isNumber(price.post))

  return (
    <div className={`tab-pane fade ${instagramUser && !category.passed && 'active show'}`} id="Category" role="tabpanel">
      <div className="row hero-caption pt-4">
        <div className="col-12">
          <datalist id="categories">
            {categories.map(category => <option value={category} />)}
          </datalist>
          <Input
            list="categories"
            name="category"
            placeholder="Category"
            icon={faList}
            onChange={({ target: { value }}) => setCategory(prevState => ({ ...prevState, value }))}
          />
        </div>
        <p>To continue, pick category from existing one</p>
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
        <p>Fill price fields with digits. All prices will be in dollars</p>
        <button 
          className={`btn btn-link mt-2 mb-3 mb-md-0 d-flex justify-content-end ${!checkAllFieldsPassed() && 'disabled'}`}
          onClick={() => setCategory(prevState => ({ ...prevState, passed: true }))}
        >

          <span className="btn-text">Next</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path data-name="Icon Color" d="M10.909,5.818H0V2.909H10.909V0L16,4.243,10.909,8.485Z" transform="translate(0 4)" fill="#006eff"></path>
          </svg>
        </button>
      </div>
    </div>
  )
};
