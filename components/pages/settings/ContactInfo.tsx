import { VFC } from "react";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Input } from '@/components/common';
import { InfoValueForm } from "@/pages/first_enter";

const validationSchema = yup.object<InfoValueForm>().shape({
  contactEmail: yup.string()
    .required('Contact email is required'),
  whatsApp: yup.string(),
  facebook: yup.string(),
});


export const ContactInfo: VFC = () => {
  const { register, errors, handleSubmit } = useForm<InfoValueForm>({
    resolver: yupResolver(validationSchema)
  });

  const updateInfo = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(updateInfo)} className="mb-5">
      <h2>Contacts</h2>
      <div className="form-group">
        <Input
          register={register}
          name="contactEmail"
          placeholder="some@example.com"
          icon={faEnvelope}
          error={errors.contactEmail}
          label="Contact email"
        />
      </div>
      <div className="form-group">
        <Input
          register={register}
          name="whatsApp"
          placeholder="+380(54)5454353"
          icon={faWhatsapp}
          error={errors.whatsApp}
          label="WhatsApp"
        />
      </div>
      <div className="form-group">
        <Input
          register={register}
          name="facebook"
          placeholder="https://fb.com/nickname"
          icon={faFacebook}
          error={errors.facebook}
          label="Facebook"
        />
      </div>
      <button 
        type="submit" 
        className="btn btn-xl btn-primary btn-block"
        // disabled={isPrevStateForm() || loading}
      >
        Update
      </button>
    </form>
  )
}