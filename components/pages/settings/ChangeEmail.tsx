import { VFC } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { isMobile } from 'react-device-detect';

import { Input } from '@/components/common';
import { User } from '@/types';

interface ChangeEmailProps {
  user: User,
  updateEmail: (data: {newEmail: string}) => void,
  loading: boolean,
}

const validationSchema = yup.object<{newEmail: string}>().shape({
  newEmail: yup.string().email('Email isn\'t valid').required('Email is required')
});

export const ChangeEmail: VFC<ChangeEmailProps> = ({ user, updateEmail, loading }) => {
  const { register, errors, handleSubmit, watch } = useForm<{newEmail: string}>({
    resolver: yupResolver(validationSchema)
  });

  return (
    <form onSubmit={handleSubmit(updateEmail)} className="mb-5">
      <h3>New email</h3>
      <div className="form-group">
        <Input
          register={register}
          name="newEmail"
          placeholder="some@example.com"
          icon={faEnvelope}
          error={errors.newEmail}
          label={() => <small><span className="text-primary">Note!</span> You need to re-log in with updated email</small>}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className={`btn btn-${isMobile ? 'md' : 'xl'} btn-primary btn-block center`}
          disabled={user.email === watch('newEmail') || loading}
          style={{zIndex: 10, width: isMobile ? '80%' : '100%'}}
        >
          {
            loading
              ? <div className="spinner-border spinner-border-sm spinner-fill" />
              : 'Update'
          }
        </button>
      </div>
    </form>
  )
}
