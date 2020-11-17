import { InstaUser } from '@/types';
import { FC } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

interface InstagramProps {
  instaUser: InstaUser,
  // nickname: string,
}

export const Instagram: FC<InstagramProps> = ({ instaUser }) => {
  const shortLink = (): string => {
    return `${instaUser.externalUrl.slice(0, 22)}...`;
  };

  return (
    <div className="col-lg-6 col-md-12">
      <div className="border rounded d-flex flex-sm-row">
        <img src={instaUser.photoUrl} alt={instaUser.fullName} className="w-50" style={{ objectFit: 'cover' }} />
        <div className="w-50 p-3 d-flex flex-column justify-content-evenly">
          <h6 className="text-primary">@{instaUser.username}</h6>
          <span>{instaUser.biography}</span>
          <a 
            href={instaUser.externalUrl} 
            rel="noreferrer noopener" 
            target="_blank" 
            style={{ textDecoration: 'underline', overflow: 'hidden' }}
          >{instaUser.externalUrl}</a>
          <hr />
          <div>
            <div className="d-block">
              <h5 className="d-inline-block mb-0">{instaUser.follow}</h5>
              <span className="text-secondary">follow</span>
            </div>
            <div className="d-block">
              <h5 className="d-inline-block mb-0">{instaUser.followedBy}</h5>
              <span className="text-secondary">followers</span>
            </div>
          </div>
          <hr />
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
      </div>
    </div>
  )
}