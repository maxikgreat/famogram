import { Dispatch, FC, SetStateAction } from 'react';
import { faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { isEmail } from '@/helpers';
import { InfoValueForm } from '@/pages/first_enter';
import { Input } from '@/components/common';

interface PriceFormProps {
  info: InfoValueForm,
  setInfo: Dispatch<SetStateAction<InfoValueForm>>,
  finishHandler: () => void,
  updateMetadataState: {
    data: any,
    loading: boolean,
    error: string,
  }
  customEmailLabel: () => JSX.Element,
}

export const InfoForm: FC<PriceFormProps> = ({ 
  info,
  setInfo,
  finishHandler, 
  updateMetadataState,
  customEmailLabel
}) => {

  const onChange = (value: string, name: string) => {
    setInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const checkFormFill = () => (!isEmail(info.contactEmail) || info.desc.length < 30) ? false : true;

  return (
    <div className={`tab-pane fade`} id="Info" role="tabpanel">
      <div className="row hero-caption pt-4">
        <div className="col-12">
          <Input
            textarea={true}
            multiple={true}
            icon={faInfoCircle}
            name="desc"
            placeholder="Short description"
            value={info.desc}
            onChange={({ target: { value, name }}) => onChange(value, name)}
            label={() => <p>Tell about yourself with a couple sentences for... <span className="text-primary">min. 30 characters</span></p>}
          />
          
        </div>
        <div className="col-12">
          <Input
            icon={faEnvelope}
            name="contactEmail"
            placeholder="Contact email"
            value={info.contactEmail}
            onChange={({ target: { value, name }}) => onChange(value, name)}
            label={customEmailLabel}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            icon={faWhatsapp}
            name="whatsApp"
            placeholder="WhatsApp"
            value={info.whatsApp}
            onChange={({ target: { value, name }}) => onChange(value, name)}
            label={() => <p>Optional</p>}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            icon={faFacebook}
            name="facebook"
            placeholder="Facebook"
            value={info.facebook}
            onChange={({ target: { value, name }}) => onChange(value, name)}
            label={() => <p>Optional</p>}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button 
            className={`btn btn-link mt-2 mb-3 mb-md-0 ${!checkFormFill() && 'disabled'}`}
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
    </div>
  )
};
