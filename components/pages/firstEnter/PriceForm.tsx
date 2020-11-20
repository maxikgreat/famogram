import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

import { isNumber } from '@/helpers';
import { PriceValueForm } from '@/pages/first_enter';
import { Input } from '@/components/common';

interface PriceFormProps {
  isCategoryPassed: boolean,
  setPrice: Dispatch<SetStateAction<PriceValueForm>>,
  finishHandler: () => void,
  updateMetadataState: {
    data: any,
    loading: boolean,
    error: string,
  }
}

export const PriceForm: FC<PriceFormProps> = ({ isCategoryPassed, finishHandler, updateMetadataState }) => {
  return (
    <div className={`tab-pane fade ${isCategoryPassed && 'active show'}`} id="Price" role="tabpanel">
      <div className="row hero-caption pt-4">
        <div className="col-12">
          <Input
            multiple={true}
            // icon={faHandHoldingUsd}
            name="desc"
            placeholder="Short description"
            // value={price.value.story}
            // onChange={({ target: { value }}) => onChange(value, 'story')}
          />
          <p>Tell about yourself with a couple sentences for... bla bla bla</p>
        </div>
        <div className="col-12">
          <Input
            // icon={faHandHoldingUsd}
            name="email"
            placeholder="Contact email"
            // value={price.value.story}
            // onChange={({ target: { value }}) => onChange(value, 'story')}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            // icon={faHandHoldingUsd}
            name="facebook"
            placeholder="Facebook"
            // value={price.value.story}
            // onChange={({ target: { value }}) => onChange(value, 'story')}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            // icon={faHandHoldingUsd}
            name="whatsapp"
            placeholder="WhatsApp"
            // value={price.value.story}
            // onChange={({ target: { value }}) => onChange(value, 'story')}
          />
        </div>
        <div className="col-12">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sed!</p>
        </div>
        <button 
          className={`btn btn-link mt-2 mb-3 mb-md-0 d-flex justify-content-end`}
          // onClick={finishHandler}
        >
          {
            updateMetadataState.loading 
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
  )
};
