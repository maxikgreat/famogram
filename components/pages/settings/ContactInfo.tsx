import { VFC } from "react";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import equal from 'deep-equal';

import { Input } from '@/components/common';
import { InfoValueForm } from "@/pages/first_enter";
import { ContactInfoMetadata, User } from "@/types";

interface ContactInfoProps {
  user: User,
  contactInfo: ContactInfoMetadata,
  updateContactInfo: (data: InfoValueForm) => void,
  loading: boolean,
}

const validationSchema = yup.object<InfoValueForm>().shape({
  contactEmail: yup.string()
    .email('Email isn\'t valid')
    .required('Contact email is required'),
  whatsApp: yup.string(),
  facebook: yup.string(),
});

export const ContactInfo: VFC<ContactInfoProps> = ({ user, contactInfo, updateContactInfo, loading }) => {
  const { register, errors, handleSubmit, watch } = useForm<InfoValueForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: contactInfo ? {
      contactEmail: contactInfo.contactEmail,
      whatsApp: contactInfo.messengers.whatsApp,
      facebook: contactInfo.messengers.facebook,
    } : undefined
  });

  const isPrevStateForm = () => {
    if (!user.user_metadata?.contactInfo) return undefined;
    const { contactEmail, messengers: { whatsApp, facebook }} = user.user_metadata.contactInfo;
    const prevStateInfo: InfoValueForm = {
      contactEmail, whatsApp, facebook,
    };

    const currentStateInfo: InfoValueForm = {
      contactEmail: watch('contactEmail'),
      whatsApp: watch('whatsApp'),
      facebook: watch('facebook')
    };

    return equal(prevStateInfo, currentStateInfo);
  }

  return (
    <form onSubmit={handleSubmit(updateContactInfo)} className="mb-5">
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
        disabled={isPrevStateForm() || loading}
      >
        {
          loading
            ? <div className="spinner-border spinner-border-sm spinner-fill" />
            : 'Update'
        }
      </button>
    </form>
  )
}