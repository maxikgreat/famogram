import { useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation'

export const Stepper = () => {
  const tabs = useRef<NodeListOf<Element>>(null!);
  const tabsContent = useRef<NodeListOf<Element>>(null!);
  
  const {t} = useTranslation('home');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    tabs.current = document.querySelectorAll('a[data-toggle="tab"]');
    tabsContent.current = document.querySelectorAll('div[role="tabpanel"]');

    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        timer = setInterval(() => {
          for (let i = 0; i < tabs.current.length; i++) {
            if (i === tabs.current.length - 1) {
              tabs.current.item(i).classList.remove('active');
              tabs.current.item(0).classList.add('active');
    
              tabsContent.current.item(i).classList.remove('active', 'show');
              tabsContent.current.item(0).classList.add('active');
              setTimeout(() => tabsContent.current.item(0).classList.add('show'), 100);
              break;
            }
            if (tabs.current.item(i).classList.contains('active')) {
              tabs.current.item(i).classList.remove('active');
              tabs.current.item(i + 1).classList.add('active');
    
              tabsContent.current.item(i).classList.remove('active','show');
              tabsContent.current.item(i + 1).classList.add('active');
              setTimeout(() => tabsContent.current.item(i + 1).classList.add('show'), 100);
              break;
            }
          }
        }, 3000);
        observer.unobserve(tabsContent.current[0]);
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.99,
    });

    observer.observe(tabsContent.current[0]);
    return () =>
    {
      observer.unobserve(tabsContent.current[0]);
      clearInterval(timer)
    };
  }, []);

  return (
    <section className="fabrx-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 wow fadeInLeft">
            <ul className="nav nav-tabs bg-transparent nav-tabs-line nav-tags-stack nav-justified fabrx-justified">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#Step1">
                  <span className="fabrx-icon">
                    <svg data-name="Icon/Arrows/Chevron/Forward" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path data-name="Icon Color" d="M2.182,24,0,21.818,9.818,12,0,2.182,2.182,0l12,12Z" transform="translate(5)" fill="#3f3b3b"/>
                    </svg>
                  </span>
                  <div>
                    <strong className="h6 d-block mb-2">{t('stepper.step', {number: '1'})}</strong>
                    <p className="font-weight-regular">{t('stepper.easyRegistration')}</p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#Step2">
                  <span className="fabrx-icon">
                    <svg data-name="Icon/Arrows/Chevron/Forward" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path data-name="Icon Color" d="M2.182,24,0,21.818,9.818,12,0,2.182,2.182,0l12,12Z" transform="translate(5)" fill="#3f3b3b"/>
                    </svg>
                  </span>
                  <div>
                    <strong className="h6 d-block mb-2">{t('stepper.step', {number: '2'})}</strong>
                    <p className="font-weight-regular">{t('stepper.startLooking')}</p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#Step3">
                  <span className="fabrx-icon">
                    <svg data-name="Icon/Arrows/Chevron/Forward" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path data-name="Icon Color" d="M2.182,24,0,21.818,9.818,12,0,2.182,2.182,0l12,12Z" transform="translate(5)" fill="#3f3b3b" />
                    </svg>
                  </span>
                  <div>
                    <strong className="h6 d-block mb-2">{t('stepper.step', {number: '3'})}</strong>
                    <p className="font-weight-regular">{t('stepper.finishLine')}</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4 mb-0 mb-md-4">
          <div className="col-md-12 mt-2 wow fadeInRight">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="Step1" role="tabpanel">
                <div className="card shadow-40">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <img src="/assets/images/vectors/vector-57.svg" className="w-100 py-5" alt="Register" style={{ maxHeight: 500 }} />
                    </div>
                    <div className="col-lg-5">
                      <div className="hero-caption p-4 p-xl-5">
                        <h4 className="mb-3">Awesome Feature</h4>
                        <p className="h6 text-secondary">Realm of the galaxies across the centuries the carbon in our apple pies vanquish the impossible another world venture. Dream of the mind's eye muse about the only home we've ever known the only home we've ever known.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="Step2" role="tabpanel">
                <div className="card shadow-40">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <img src="/assets/images/vectors/vector-20.svg" className="w-100 py-5" alt="Find" style={{ maxHeight: 500 }} />
                    </div>
                    <div className="col-lg-5">
                      <div className="hero-caption p-4 p-xl-5">
                        <h4 className="mb-3">Awesome Feature</h4>
                        <p className="h6 text-secondary">Realm of the galaxies across the centuries the carbon in our apple pies vanquish the impossible another world venture. Dream of the mind's eye muse about the only home we've ever known the only home we've ever known.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="Step3" role="tabpanel">
                <div className="card shadow-40">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <img src="/assets/images/vectors/vector-18.svg" className="w-100 py-5" alt="Connect" style={{ maxHeight: 500 }} />
                    </div>
                    <div className="col-lg-5">
                      <div className="hero-caption p-4 p-xl-5">
                        <h4 className="mb-3">Awesome Feature</h4>
                        <p className="h6 text-secondary">Realm of the galaxies across the centuries the carbon in our apple pies vanquish the impossible another world venture. Dream of the mind's eye muse about the only home we've ever known the only home we've ever known.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
