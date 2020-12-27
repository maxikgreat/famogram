import useTranslation from 'next-translate/useTranslation'

import { Stars } from '../../common';

export const Hero = () => {
  const {t} = useTranslation('common');
  
  return (
    <section className="hero-section row g-0 align-items-center">
      <Stars />
      <div className="col-lg-6 bg-white">
        <div className="fabrx-min-height pb-5 pt-4 pt-lg-5 pl-lg-4 align-items-end">
          <div className="fabrx-caption pr-0">
            <h1 className="font-weight-bold mt-3 mt-lg-4 ddd-primary wow fadeInDown" data-wow-delay="0.75s">Super awesome headline</h1>
            <p className="h6 wow fadeInDown" data-wow-delay="1s">Realm of the galaxies across the centuries the carbon in our apple pies vanquish the impossible another world venture. Dream of the mind's eye muse about home.</p>
            <button className="btn btn-primary btn-lg mt-4 wow fadeInDown" data-wow-delay="1.25s">Learn more</button>
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeInRight" data-wow-delay="1.25s">
        <div className="text-right py-5 mt-0 mt-lg-5 pl-5 overflow-hidden">
          <img src="/assets/images/vectors/vector-36.svg" style={{marginRight: "-75px"}} alt="Vector" />
        </div>
      </div>
    </section>
  );
}
