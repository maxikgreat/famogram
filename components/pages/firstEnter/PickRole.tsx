import React, { Dispatch, SetStateAction, VFC } from "react";

import { Role } from "@/types";
import { InfoForm } from './';
import { InfoValueForm } from "@/pages/first_enter";
import { isEmail } from "@/helpers";

interface PickRoleProps {
  setRole: Dispatch<SetStateAction<Role | null>>,
  info: InfoValueForm,
  setInfo: Dispatch<SetStateAction<InfoValueForm>>,
  customEmailLabel: () => JSX.Element,
}

export const PickRole: VFC<PickRoleProps> = ({ setRole, info, setInfo, customEmailLabel }) => {
  return (
    <div className="container">
      <h4>Tell another's how they can contact with you...</h4>
      <InfoForm
        info={info}
        setInfo={setInfo}
        customEmailLabel={customEmailLabel}
      />
      <h4>...and pick your role</h4>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card rounded-12 shadow-40 h-100">
            <div className="card-body p-5 text-center">
              <h3 className="mb-4">Influencer</h3>
              <p>The carbon in our apple pies with pretty stories for which there's little good evidence </p>
              <div className="pt-1">
                <button className={`btn btn-xl btn-block btn-primary ${!isEmail(info.contactEmail) && 'disabled'}`}>Discover blogers</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card rounded-12 shadow-40 h-100">
            <div className="card-body p-5 text-center">
              <h3 className="mb-4">Bloger</h3>
              <p>The carbon in our apple pies with pretty stories for which there's little good evidence </p>
              <div className="pt-1 row">
                <div className="col-6">
                  <button 
                    className={`btn btn-block btn-primary ${!isEmail(info.contactEmail) && 'disabled'}`}
                    onClick={() => setRole('instagram')}
                  >Set Instagram profile</button>
                </div>
                <div className="col-6">
                  <button 
                    className="btn btn-block btn-primary disabled"
                    onClick={() => setRole('tiktok')}
                  >Set TikTok profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}