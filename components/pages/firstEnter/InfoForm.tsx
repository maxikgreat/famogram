import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { isNumber } from '@/helpers';
import { InfoValueForm } from '@/pages/first_enter';
import { Input } from '@/components/common';

interface PriceFormProps {
  isCategoryPassed: boolean,
  info: InfoValueForm,
  setInfo: Dispatch<SetStateAction<InfoValueForm>>,
  finishHandler: () => void,
  updateMetadataState: {
    data: any,
    loading: boolean,
    error: string,
  }
}

export const InfoForm: FC<PriceFormProps> = ({ 
  isCategoryPassed, 
  info,
  setInfo,
  finishHandler, 
  updateMetadataState 
}) => {

  const onChange = (value: string, name: string) => {
    setInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const checkFormFill = () => {
    let flag = true;
    let key: keyof InfoValueForm;
    for (key in info) {
      if (!info[key]) flag = false;
    }
    return flag;
  }

  return (
    <div className={`tab-pane fade ${isCategoryPassed && 'active show'}`} id="Price" role="tabpanel">
      <div className="row hero-caption pt-4">
        <div className="col-12">
          <Input
            multiple={true}
            icon={faInfoCircle}
            name="desc"
            placeholder="Short description"
            value={info.desc}
            onChange={({ target: { value, name }}) => onChange(value, name)}
          />
          <p>Tell about yourself with a couple sentences for... bla bla bla</p>
        </div>
        <div className="col-12">
          <Input
            icon={faEnvelope}
            name="contactEmail"
            placeholder="Contact email"
            value={info.contactEmail}
            onChange={({ target: { value, name }}) => onChange(value, name)}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            icon={faWhatsapp}
            name="whatsApp"
            placeholder="WhatsApp"
            value={info.whatsApp}
            onChange={({ target: { value, name }}) => onChange(value, name)}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            icon={faFacebook}
            name="facebook"
            placeholder="Facebook"
            value={info.facebook}
            onChange={({ target: { value, name }}) => onChange(value, name)}
          />
        </div>
        <div className="col-12">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sed!</p>
        </div>
        <button 
          className={`btn btn-link mt-2 mb-3 mb-md-0 d-flex justify-content-end ${!checkFormFill() && 'disabled'}`}
          onClick={finishHandler}
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
