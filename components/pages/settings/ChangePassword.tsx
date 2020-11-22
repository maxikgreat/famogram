import { faLock } from '@fortawesome/free-solid-svg-icons';

import { Input } from '@/components/common';

export const ChangePassword = () => {
  return (
    <form>
      <h2>New password</h2>
      <div className="form-group">
        <Input
          // register={register}
          name="oldPass"
          placeholder="Old password"
          icon={faLock}
          // error={errors.contactEmail}
          // label="Contact email"
        />
      </div>
      <div className="form-group">
        <Input
          // register={register}
          name="newPass"
          placeholder="New password"
          icon={faLock}
          // error={errors.whatsApp}
          // label="WhatsApp"
        />
      </div>
      <div className="form-group">
        <Input
          // register={register}
          name="repeatPass"
          placeholder="Repeat password"
          icon={faLock}
          // error={errors.facebook}
          // label="Facebook"
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