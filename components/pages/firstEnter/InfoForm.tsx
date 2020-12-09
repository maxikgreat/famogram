import { VFC } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { DeepMap, FieldError } from 'react-hook-form';

import { FirstEnterForm } from '@/pages/first_enter';
import { Input } from '@/components/common';

interface PriceFormProps {
  register: any,
  errors: DeepMap<FirstEnterForm, FieldError>,
  customEmailLabel: () => JSX.Element,
}

export const InfoForm: VFC<PriceFormProps> = ({ register, errors, customEmailLabel }) => (
  <div className="row py-4">
    <div className="col-12">
      <Input
        register={register}
        icon={faEnvelope}
        name="contactEmail"
        placeholder="Contact email"
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
        label="Optional"
        error={errors.whatsApp}
      />
    </div>
    <div className="col-12 col-md-6">
      <Input
        register={register}
        icon={faFacebook}
        name="facebook"
        placeholder="Facebook"
        label="Optional"
        error={errors.facebook}
      />
    </div>
  </div>
);
