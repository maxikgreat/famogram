import { Dispatch, FC, SetStateAction } from 'react';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

import { PriceValueForm } from '@/pages/first_enter';
import { Input } from '@/components/common';

interface PriceFormProps {
  isCategoryPassed: boolean,
  price: PriceValueForm,
  setPrice: Dispatch<SetStateAction<PriceValueForm>>,
}

export const PriceForm: FC<PriceFormProps> = ({ isCategoryPassed, price, setPrice }) => {
  return (
    <div className={`tab-pane fade ${isCategoryPassed && 'active show'}`} id="Price" role="tabpanel">
      <div className="row hero-caption pt-4">
        <div className="col-12 col-md-6">
          <Input
            icon={faHandHoldingUsd}
            name="pricePerStory"
            placeholder="Price per story"
            value={price.value.story}
            onChange={({ target: { value }}) => setPrice(prevState => ({ 
              ...prevState,
              value: {
                ...price.value,
                story: value,
              }
            }))}
            error={price.error.story}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            icon={faHandHoldingUsd}
            name="pricePerPost"
            placeholder="Price per post"
            value={price.value.post}
            onChange={({ target: { value }}) => setPrice(prevState => ({ 
              ...prevState,
              value: {
                ...price.value,
                post: value,
              }
            }))}
            error={price.error.post}
          />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, incidunt.</p>
        <button 
          className={`btn btn-link mt-2 mb-3 mb-md-0 d-flex justify-content-end ${(!price.value.story || !price.value.post) && 'disabled'}`}
          // onClick={checkAccountHandler}
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
