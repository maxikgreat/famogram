import { Dispatch, FC, SetStateAction } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

import {FirstEnterForm, InfoValueForm} from '@/pages/first_enter';
import { Input } from '@/components/common';
import {DeepMap, FieldError} from 'react-hook-form';

interface PriceFormProps {
  register: any,
  errors: DeepMap<FirstEnterForm, FieldError>,
  info: InfoValueForm,
  setInfo: Dispatch<SetStateAction<InfoValueForm>>,
  customEmailLabel: () => JSX.Element,
}

export const InfoForm: FC<PriceFormProps> = ({
  register,
  errors,
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
          register={register}
          icon={faEnvelope}
          name="contactEmail"
          placeholder="Contact email"
          // value={info.contactEmail}
          // onChange={({ target: { value, name }}) => onChange(value, name)}
          label={customEmailLabel}
          error={errors.contactEmail}
        />
      </div>
      <div className="col-12 col-md-6">
        <Input
          register={register}
          icon={faWhatsapp}
          name="whatsApp"
          placeholder="WhatsApp"
          // value={info.whatsApp}
          // onChange={({ target: { value, name }}) => onChange(value, name)}
          label={() => <p>Optional</p>}
          error={errors.whatsApp}
        />
      </div>
      <div className="col-12 col-md-6">
        <Input
          register={register}
          icon={faFacebook}
          name="facebook"
          placeholder="Facebook"
          // value={info.facebook}
          // onChange={({ target: { value, name }}) => onChange(value, name)}
          label={() => <p>Optional</p>}
          error={errors.facebook}
        />
      </div>
    </div>
  )
};
