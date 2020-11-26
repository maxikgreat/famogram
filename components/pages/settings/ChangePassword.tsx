import { faLock } from '@fortawesome/free-solid-svg-icons';

import { Input } from '@/components/common';
import { VFC } from 'react';

interface ChangePasswordProps {
  loading: boolean,
  updatePass: () => void
}

export const ChangePassword: VFC<ChangePasswordProps> = ({ loading, updatePass }) => {
  return (
    <div className="d-flex align-items-end justify-content-between">
      <h3 className="d-inline mb-0">New password</h3>
      <button
          type="submit"
          className="btn btn-sm btn-primary mb-1"
          onClick={updatePass}
          disabled={loading}
          style={{zIndex: 10}}
      >
        {
          loading
            ? <div className="spinner-border spinner-border-sm spinner-fill" />
            : 'Generate link'
        }
      </button>
    </div>
  )
}
