import { Dispatch, FC, SetStateAction } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { Input } from '@/components/common';
import { InstagramValueForm } from '@/pages/first_enter';

interface InstagramFormProps {
  instagramAccount: InstagramValueForm,
  setInstagramAccount: Dispatch<SetStateAction<InstagramValueForm>>,
  checkAccount: (data: string) => Promise<any>,
  checkAccountState: {
    loading: boolean,
    error: string | null,
  }
}

export const InstagramForm: FC<InstagramFormProps> = ({ 
  instagramAccount, 
  setInstagramAccount,
  checkAccount,
  checkAccountState,
}) => {

  const checkAccountHandler = () => {
    checkAccount(instagramAccount.value)
      .then(data => console.log(data))
  };

  return (
    <div className="tab-pane fade active show" id="Instagram" role="tabpanel">
      <div className="row hero-caption pt-4 d-flex justify-content-end">
        <Input
          icon={faInstagram}
          name="instagramAccount"
          placeholder="Instagram account"
          value={instagramAccount.value}
          onChange={({ target: { value }}) => setInstagramAccount(prevState => ({ ...prevState, value }))}
          error={checkAccountState.error}
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae.</p>
        <button 
          className={`btn btn-link mt-2 mb-3 mb-md-0 d-flex justify-content-end ${(!instagramAccount.value) && 'disabled'}`}
          onClick={checkAccountHandler}
        >
          {
            checkAccountState.loading 
              ? <div className="spinner-border spinner-border-sm spinner-fill" />
              : <>
                  <span className="btn-text">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path data-name="Icon Color" d="M10.909,5.818H0V2.909H10.909V0L16,4.243,10.909,8.485Z" transform="translate(0 4)" fill="#006eff"></path>
                  </svg>
                </>
          }
        </button>
      </div>
    </div>
  )
};
