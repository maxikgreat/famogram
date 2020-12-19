import { Dispatch, FC, SetStateAction } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
import { FieldError } from 'react-hook-form';

import { Input } from '@/components/common';
import { InstaUser } from '@/types';

interface UsernameFormProps {
  prefix?: string,
  register: any,
  instagramAccountError: FieldError | undefined,
  instagramInput: string,
  clearErrors: (names?: string | string[]) => void,
  instagramAccount: InstaUser | null,
  setInstagramAccount: Dispatch<SetStateAction<InstaUser | null>>,
  checkAccount: (data: string) => Promise<InstaUser>,
  checkAccountLoading: boolean,
  navTo: () => void
}

export const UsernameForm: FC<UsernameFormProps> = ({
  prefix,
  register,
  instagramAccountError,
  instagramInput,
  instagramAccount,
  clearErrors,
  setInstagramAccount,
  checkAccount,
  checkAccountLoading,
  navTo
}) => {
  const checkAccountHandler = () => {
    if (instagramAccountError) return;
    if (instagramInput.trim() === '') return;
    checkAccount(instagramInput)
      .then(user => {
        setInstagramAccount(user);
        clearErrors();
        navTo();
      })
      .catch(error => toast(error, { type: 'error' }));
  };

  return (
    <div className={`tab-pane fade ${!instagramAccount && 'active show'}`} id="Instagram" role="tabpanel">
      <div className="row pt-4 d-flex justify-content-end">
        <div className="col-12">
          <Input
            register={register}
            icon={faInstagram}
            name={prefix ? `${prefix}.instagramAccount` : 'instagramAccount'}
            placeholder="Instagram account"
            label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, repudiandae"
            error={instagramAccountError}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-link mt-2 mb-3 mb-md-0"
            onClick={checkAccountHandler}
            style={{zIndex: 10}}
          >
            {
              checkAccountLoading
                ? <div className="spinner-border spinner-border-sm spinner-fill" />
                : <>
                    <span className="btn-text">Next</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <path data-name="Icon Color" d="M10.909,5.818H0V2.909H10.909V0L16,4.243,10.909,8.485Z" transform="translate(0 4)" fill="#006eff" />
                    </svg>
                  </>
            }
          </button>
        </div>
      </div>
    </div>
  )
};
