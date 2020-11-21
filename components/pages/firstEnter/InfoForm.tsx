import { Dispatch, FC, SetStateAction } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { Input } from '@/components/common';

interface InfoValueForm {
  contactEmail: string,
  whatsApp: string,
  facebook: string,
}

interface PriceFormProps {
  info: InfoValueForm,
  setInfo: Dispatch<SetStateAction<InfoValueForm>>,
  customEmailLabel: () => JSX.Element,
}

export const InfoForm: FC<PriceFormProps> = ({ 
  info,
  setInfo, 
  customEmailLabel
}) => {

  const onChange = (value: string, name: string) => {
    setInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="row py-4">
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
    </div>
  )
};
