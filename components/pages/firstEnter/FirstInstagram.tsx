import React, { VFC, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { animated, useTransition } from 'react-spring';
import { FieldError } from 'react-hook-form';

import { InstaUser } from "@/types";
import { UsernameForm, CategoryPriceForm } from './'
import {InstaUserIsCreating} from '@/pages/instagram_profile';

interface FirstInstagramProps {
  prefix?: string,
  register: any,
  errors: {
    instagramAccount: FieldError | undefined,
    category: FieldError | undefined,
    pricePerPost: FieldError | undefined,
    pricePerStory: FieldError | undefined,
    desc: FieldError | undefined,
  },
  instagramUser: InstaUserIsCreating | null,
  setInstagramUser: Dispatch<SetStateAction<InstaUserIsCreating | null>>
  instagramInput: string,
  clearErrors: (names?: string | string[]) => void,
  checkAccount: (data: string) => Promise<InstaUser>,
  checkAccountLoading: boolean,
  updateMetadataLoading: boolean,
}

export const FirstInstagram: VFC<FirstInstagramProps> = ({
  prefix,
  register,
  errors,
  instagramUser,
  setInstagramUser,
  clearErrors,
  instagramInput,
  checkAccount,
  checkAccountLoading,
  updateMetadataLoading
}) => {
  const navTabs = useRef<NodeListOf<HTMLElement> | null>(null);
  useEffect(() => {
    setTimeout(() => {
      clearErrors();
    }, 100);
    navTabs.current = document.querySelectorAll('.first-enter-tabs > .nav-item > .nav-link');
  }, []);
  
  const transitions = useTransition(1, item => item, {
    from: {
      opacity: 0,
      transform: 'translateX(-100%)'
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    leave: {
      opacity: 0,
      transform: 'translateX(100%)'
    }
  })

  return (
    <>
      {
        transitions.map(({ item, props }) => (
          <animated.div key={item} className="py-md-5" style={props}>
            <div className="pr-0 pt-0 pt-lg-3 pb-4 pb-md-5">
              <ul className="nav nav-tabs nav-tabs-md bg-transparent nav-tabs-line nav-justified first-enter-tabs">
                <li className="nav-item" style={{zIndex: 10}}>
                  <a className={`nav-link ${!instagramUser && 'active'} text-left px-0`} data-toggle="tab" href="#Instagram">1. Username</a>
                </li>
                <li className="nav-item" style={{zIndex: 10}}>
                  <a className={`nav-link ${!instagramUser && 'disabled'} text-left px-0`} data-toggle="tab" href="#CategoryAndPrice">2. Category & Price</a>
                </li>
              </ul>
              <div className="tab-content position-relative" id="myTabContent">
                <img
                  className="position-absolute"
                  style={{top: 0, left: '0%', transform: 'translate(50%, -50%)', opacity: 0.15}}
                  src="./assets/images/vectors/vector-15.svg"
                />
                <UsernameForm
                  prefix={prefix}
                  register={register}
                  instagramAccountError={errors.instagramAccount}
                  clearErrors={clearErrors}
                  instagramInput={instagramInput}
                  instagramAccount={instagramUser}
                  setInstagramAccount={setInstagramUser}
                  checkAccount={checkAccount}
                  checkAccountLoading={checkAccountLoading}
                  navTo={() => navTabs.current?.item(1).click()}
                />
                <CategoryPriceForm
                  prefix={prefix}
                  register={register}
                  categoryPriceErrors={{
                    category: errors.category,
                    pricePerPost: errors.pricePerPost,
                    pricePerStory: errors.pricePerStory,
                    desc: errors.desc,
                  }}
                  updateMetadataLoading={updateMetadataLoading}
                />
              </div>
            </div>
          </animated.div>
        ))
      }
    </>
  )
}
