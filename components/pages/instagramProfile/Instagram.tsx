
import { InstaUser } from '@/types';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

interface InstagramProps {
  instaUser: InstaUser,
}

export const Instagram: FC<InstagramProps> = ({instaUser}) => {
  return (
    <div className="col-lg-6 col-md-12" style={{ zIndex: 1 }}>
      <h3>Instagram</h3>
      <div className="d-flex flex-sm-row pt-3">
        <div className="w-50">
          <img
            src={instaUser.photoUrl}
            alt={instaUser.fullName}
            className="w-100 rounded-circle"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="w-50 p-4 d-flex flex-column justify-content-evenly">
          <div className="d-block">
            <h2 className="h3 d-inline-block mb-0 text-primary">{instaUser.follow}</h2>
            <span className="text-secondary"> follow</span>
          </div>
          <div className="d-block">
            <h2 className="h3 d-inline-block mb-0 text-primary">{instaUser.followedBy}</h2>
            <span className="text-secondary"> followers</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mt-3 justify-content-evenly">
        <h3
          className="h4 text-primary"
          style={{ overflow: 'hidden' }}
        >
          @{instaUser.username}
        </h3>
        <div className="d-flex">
          {instaUser.isBusinessAccount && (
            <div className="fabrx-chip">
              <FontAwesomeIcon icon={faBusinessTime} />
              <span>Business</span>
            </div>
          )}
          {instaUser.isPrivate ? (
            <div className="fabrx-chip mt-1">
              <FontAwesomeIcon icon={faLock} />
              <span>Private</span>
            </div>
          ) : (
            <div className="fabrx-chip mt-1">
              <FontAwesomeIcon icon={faLockOpen} />
              <span>Public</span>
            </div>
          )}
        </div>
        <span className="h5 mt-3">{instaUser.biography}</span>
        <a
          href={instaUser.externalUrl}
          rel="noreferrer noopener"
          target="_blank"
          style={{ textDecoration: 'underline', overflow: 'hidden' }}
        >{instaUser.externalUrl}</a>
      </div>
    </div>
  )
}
