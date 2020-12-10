import React, { Dispatch, SetStateAction, VFC } from "react";
import { animated, useSpring, useTransition } from 'react-spring';
import { isMobile } from 'react-device-detect';
import {DeepMap, FieldError, FieldName} from 'react-hook-form';

import {InstagramMetadata, InstaUser, Role} from "@/types";
import { InfoForm } from './';
import { FirstEnterForm, InfoValueForm } from "@/pages/first_enter";
import { FirstInstagram } from '@pagesComponents/firstEnter/FirstInstagram';

interface PickRoleProps {
  register: any,
  errors: DeepMap<FirstEnterForm, FieldError>,
  toggler: boolean,
  role: Role | null,
  setToggler: Dispatch<SetStateAction<boolean>>,
  setRoleHandler: (role: Role) => void,
  customEmailLabel: () => JSX.Element,
  getValues: (names?: string | string[]) => any,
  clearErrors: (names?: string | string[]) => void,
  checkAccount: (data: string) => Promise<InstaUser>,
  checkAccountLoading: boolean,
  updateMetadataLoading: boolean,
}

export const PickRole: VFC<PickRoleProps> = ({
  register,
  errors,
  toggler,
  role,
  setToggler,
  setRoleHandler,
  customEmailLabel,
  getValues,
  clearErrors,
  checkAccount,
  checkAccountLoading,
  updateMetadataLoading,
}) => {
  const { transform, opacity } = useSpring({
    opacity: toggler ? 1 : 0,
    transform: `perspective(600px) rotateX(${toggler ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div className="container py-2 py-md-5">
      <h5>Tell other's how they can contact with you</h5>
      <InfoForm
        register={register}
        errors={errors}
        customEmailLabel={customEmailLabel}
      />
      <h5 className="mb-4">Pick your role</h5>
      <div className="d-flex justify-content-start align-items-center">
        <h6
          className={`mb-0 mr-2 text-${toggler ? 'secondary' : 'accent'}`}
          onClick={() => setToggler(false)}
        >Influencer</h6>
        <input
          type="checkbox"
          className="toggle"
          checked={toggler}
          onChange={() => setToggler(!toggler)}
        />
        <h6
          className={`mb-0 ml-2 text-${toggler ? 'primary' : 'secondary'}`}
          onClick={() => setToggler(true)}
        >Blogger</h6>
      </div>
      <div className="mt-3 position-relative" style={{ height: isMobile ? '175px' : '275px'}}>
        <animated.div
          className="role role--accent"
          style={{
            opacity: opacity.interpolate((o: any) => 1 - o),
            transform,
            maxHeight: isMobile ? '175px' : '275px',
            zIndex: toggler ? -10 : 10,
          }}
        >
          <div className={`card-body p-2 p-md-5 text-center`}>
            <h3 className="mb-2 mb-md-4">Influencer</h3>
            <p>The carbon in our apple pies with pretty stories for which there's little good evidence </p>
            <div className="pt-0 pt-md-1">
              <button
                onClick={() => setRoleHandler('influencer')}
                className={`btn btn-${isMobile ? 'md' : 'xl'} btn-block btn-accent`}
              >
                Discover bloggers
              </button>
            </div>
          </div>
        </animated.div>
        <animated.div
          className="role role--primary"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
            maxHeight: isMobile ? '175px' : '275px',
            zIndex: toggler ? 10 : -10,
          }}
        >
          <div className="card-body p-2 p-md-5 text-center" ref={register}>
            <h3 className="mb-2 mb-md-4">Blogger</h3>
            <p>The carbon in our apple pies with pretty stories for which there's little good evidence </p>
            <div className="pt-0 pt-md-1 d-flex justify-content-around">
              <button
                className={`btn btn-${isMobile ? 'md' : 'xl'} btn-primary`}
                onClick={() => setRoleHandler('instagram')}
              >Instagram</button>
              <button
                disabled
                className={`btn btn-${isMobile ? 'md' : 'xl'} btn-primary`}
              >TikTok</button>
            </div>
          </div>
        </animated.div>
      </div>
      {role === 'instagram' && (
        <FirstInstagram
          register={register}
          errors={errors}
          checkAccount={checkAccount}
          instagramInput={getValues('profile.instagramAccount')}
          clearErrors={clearErrors}
          checkAccountLoading={checkAccountLoading}
          updateMetadataLoading={updateMetadataLoading}
        />
      )}
      <input
        ref={register}
        className="d-none"
        name="role"
      />
    </div>
  )
}
