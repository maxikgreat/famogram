import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Input } from '@/components/common';


export const ChangeEmail = () => {
  return (
    <form className="mb-5">
      <h2>New email</h2>
      <div className="form-group">
        <Input
          // register={register}
          name="newEmail"
          placeholder="some@example.com"
          icon={faEnvelope}
          // error={errors.contactEmail}
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