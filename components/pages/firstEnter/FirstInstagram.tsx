import React, { VFC, useState, useEffect, useRef } from "react";

import { InstagramMetadata, InstaUser } from "@/types";
import { UsernameForm, CategoryPriceForm } from './'

export interface InstagramValueForm {
  value: string,
  user: InstaUser | null,
}

interface FirstInstagramProps {
  checkAccount: (data: string) => Promise<InstaUser>,
  checkAccountLoading: boolean,
  finishHandler: (data: InstagramMetadata) => void,
  updateMetadataLoading: boolean,
}

export const FirstInstagram: VFC<FirstInstagramProps> = ({ 
  checkAccount, 
  checkAccountLoading, 
  finishHandler,
  updateMetadataLoading
}) => {
  const navTabs =  useRef<NodeListOf<HTMLElement> | null>(null);
  useEffect(() => {
    navTabs.current = document.querySelectorAll('.first-enter-tabs > .nav-item > .nav-link');
  }, []);

  const [instagramAccount, setInstagramAccount] = useState<InstagramValueForm>({
    value: '',
    user: null
  });

  return (
    <div className="container py-0 py-md-5">
      <div className="pr-0 pt-0 pt-lg-3 pb-4 pb-md-5">
        <ul className="nav nav-tabs nav-tabs-md bg-transparent nav-tabs-line nav-justified first-enter-tabs">
          <li className="nav-item" style={{zIndex: 10}}>
            <a className={`nav-link ${!instagramAccount.user && 'active'}`} data-toggle="tab" href="#Instagram">1. Instagram</a>
          </li>
          <li className="nav-item" style={{zIndex: 10}}>
            <a className={`nav-link ${!instagramAccount.user && 'disabled'}`} data-toggle="tab" href="#CategoryAndPrice">2. Category&Price</a>
          </li>
        </ul>
        <div className="tab-content position-relative" id="myTabContent">
          <img 
            className="position-absolute" 
            style={{top: 0, left: '0%', transform: 'translate(50%, -50%)', opacity: 0.15}} 
            src="./assets/images/vectors/vector-15.svg" 
          />
          <UsernameForm
            instagramAccount={instagramAccount}
            setInstagramAccount={setInstagramAccount}
            checkAccount={checkAccount}
            checkAccountLoading={checkAccountLoading}
            navTo={() => navTabs.current?.item(1).click()}
          />
          <CategoryPriceForm 
            instaUser={instagramAccount.user as InstaUser}
            finishHandler={finishHandler}
            updateMetadataLoading={updateMetadataLoading}
          />
        </div>
      </div>
    </div>
  )
}