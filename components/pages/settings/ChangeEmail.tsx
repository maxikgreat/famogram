import { useState, VFC } from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
      <h2>New email</h2>
      <div className="form-group">
        <Input
          register={register}
          name="newEmail"
          placeholder="some@example.com"
          icon={faEnvelope}
          error={errors.newEmail}
          label="You need to re-log in with updated email"
        />
      </div>
      <button 
        type="submit" 
        className="btn btn-xl btn-primary btn-block"
        disabled={user.email === watch('newEmail')}
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