import { FC, Dispatch, SetStateAction } from 'react';

import { isCategory } from '@/helpers';
import { InstaUser, categories, Category } from '@/types';
import { Input } from '@/components/common';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { CategoryValueForm } from '@/pages/first_enter';

interface CategoryFormProps {
  instagramUser: InstaUser | null,
  category: CategoryValueForm,
  setCategory: Dispatch<SetStateAction<CategoryValueForm>>,
}

export const CategoryForm: FC<CategoryFormProps> = ({ instagramUser, category, setCategory }) => {
  return (
    <div className={`tab-pane fade ${instagramUser && !category.passed && 'active show'}`} id="Category" role="tabpanel">
      <div className="row hero-caption pt-4">
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
        <p>To continue, pick category from existing one</p>
        <button 
          className={`btn btn-link mt-2 mb-3 mb-md-0 d-flex justify-content-end ${!isCategory(category.value) && 'disabled'}`}
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
