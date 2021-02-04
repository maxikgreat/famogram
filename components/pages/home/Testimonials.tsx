import {VFC} from 'react';
import useTranslation from 'next-translate/useTranslation';

export const Testimonials: VFC = () => {
  const {t} = useTranslation('home');
  
  const feedbacks = ['fadeInLeft', 'fadeInDown', 'fadeInRight'].map((anim, index) => ({
    anim,
    name: t(`testimonials.feedback${index + 1}.name`),
    city: t(`testimonials.feedback${index + 1}.city`),
    body: t(`testimonials.feedback${index + 1}.body`),
  }));
  
  return (
    <section className="fabrx-section bg-white mt-5">
      <div className="container">
        <div className="row justify-content-center">
          {feedbacks.map(({anim, name, city, body}, index) => (
            <div className={`col-lg-4 col-md-6 my-3 wow ${anim}`} key={`testimonial-${index}`}>
              <div className="card rounded-6 shadow-40">
                <div className="card-body text-center pt-0">
                  <div className="testimonial-author stack">
                    <a className="fabrx-avatar xl mb-2"><img src={`/assets/images/avatars/avatar-${index + 1}.png`} alt={`${name}'s avatar`} /></a>
                    <div className="px-3">
                      <strong className="d-block">{name}</strong>
                      <small className="d-block text-secondary">{city}</small>
                    </div>
                  </div>
                  <p className="font-size-14 p-1">{body}</p>
                  <div className="text-right mt-2 mt-md-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
                      <g transform="translate(0 0)">
                        <path data-name="Icon Color" d="M23.042,22H14.893a.965.965,0,0,1-.958-.969V12.69a21.7,21.7,0,0,1,.547-5.06,12.285,12.285,0,0,1,1.7-4.005A8.341,8.341,0,0,1,19.075.951,8.136,8.136,0,0,1,23.042,0,.965.965,0,0,1,24,.97V4.92a.965.965,0,0,1-.958.969c-1.859,0-2.873,1.962-3.012,5.83h3.012a.965.965,0,0,1,.958.97v8.34A.965.965,0,0,1,23.042,22ZM9.107,22H.958A.965.965,0,0,1,0,21.03V12.69A21.64,21.64,0,0,1,.548,7.63a12.264,12.264,0,0,1,1.7-4.005A8.335,8.335,0,0,1,5.139.951,8.138,8.138,0,0,1,9.107,0a.965.965,0,0,1,.958.97V4.92a.965.965,0,0,1-.958.969c-1.886,0-2.914,1.962-3.056,5.83H9.107a.965.965,0,0,1,.958.97v8.34A.965.965,0,0,1,9.107,22Z" transform="translate(24 22) rotate(-180)" fill="#ca2c4c" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
