import { BaseLayout } from '@/components/layouts'

export default function FirstEnter() {
  return (
    <BaseLayout classNameName="first-enter">
      <section className="fabrx-section bg-white mt-5">
        <div className="container py-0 py-md-5">
          <div className="pr-0 pt-0 pt-lg-3 pb-4 pb-md-5">
            <ul className="nav nav-tabs nav-tabs-md bg-transparent nav-tabs-line nav-justified">
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#Active">1. Active</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#Inactive1">2. Inactive</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#Inactive2">3. Inactive</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade" id="Active" role="tabpanel">
                <div className="row hero-caption pt-4 pr-0 pr-sm-2 pr-xl-5">
                  <p>Realm of the galaxies across the centuries the carbon in our apple pies vanquish the impossible another world venture. Dream of the mind's eye muse about the only home we've ever known the only home we've ever known concept of the number one gathered by gravity? Stirred by starlight the sky calls to us rich in mystery paroxysm of global death with pretty stories for which there's little good evidence the only home</p>
                  <a href="#0" className="btn btn-link mt-2 mb-3 mb-md-0 d-flex justify-content-end">
                    <span className="btn-text">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <path data-name="Icon Color" d="M10.909,5.818H0V2.909H10.909V0L16,4.243,10.909,8.485Z" transform="translate(0 4)" fill="#006eff"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="tab-pane fade" id="Inactive1" role="tabpanel">
                <div className="row hero-caption pt-4 pr-0 pr-sm-2 pr-xl-5">
                  <p>Realm of the galaxies across the centuries the carbon in our apple pies vanquish the impossible another world venture. Dream of the mind's eye muse about the only home we've ever known the only home we've ever known concept of the number one gathered by gravity? Stirred by starlight the sky calls to us rich in mystery paroxysm of global death with pretty stories for which there's little good evidence the only home</p>
                  <a href="#0" className="btn btn-link mt-2 mb-3 mb-md-0 d-flex justify-content-end">
                    <span className="btn-text">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <path data-name="Icon Color" d="M10.909,5.818H0V2.909H10.909V0L16,4.243,10.909,8.485Z" transform="translate(0 4)" fill="#006eff"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="tab-pane fade active show" id="Inactive2" role="tabpanel">
                <div className="row hero-caption pt-4 pr-0 pr-sm-2 pr-xl-5">
                  <p>Realm of the galaxies across the centuries the carbon in our apple pies vanquish the impossible another world venture. Dream of the mind's eye muse about the only home we've ever known the only home we've ever known concept of the number one gathered by gravity? Stirred by starlight the sky calls to us rich in mystery paroxysm of global death with pretty stories for which there's little good evidence the only home</p>
                  <a href="#0" className="btn btn-link mt-2 mb-3 mb-md-0 d-flex justify-content-end">
                    <span className="btn-text">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <path data-name="Icon Color" d="M10.909,5.818H0V2.909H10.909V0L16,4.243,10.909,8.485Z" transform="translate(0 4)" fill="#006eff"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}