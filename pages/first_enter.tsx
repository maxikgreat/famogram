import { BaseLayout } from '@/components/layouts'

export default function FirstEnter() {
  return (
    <BaseLayout className="first-enter">
      <section className="fabrx-hero mt-5">
        <div className="container stepper-hld">
          <div className="d-flex justify-content-between pt-4 pb-2">
            <div className="d-flex align-items-center step-hld">
              <div className="circle-hld">
                <span className="h5 mb-0">1</span>
                <svg height="100" width="100">
                  <circle cx="50" cy="50" r="40" stroke="#f39933" stroke-width="3" fill="#212121" />
                </svg>
              </div>
              <h2 className="h6 mb-0">Step lorem ipsum</h2>
            </div>
            <div className="d-flex align-items-center step-hld">
              <div className="circle-hld">
                <span className="h5 mb-0">2</span>
                <svg height="100" width="100">
                  <circle cx="50" cy="50" r="40" stroke="#f39933" stroke-width="3" fill="#212121" />
                </svg>
              </div>
              <h2 className="h6 mb-0">Step lorem ipsum</h2>
            </div>
            <div className="d-flex align-items-center step-hld">
              <div className="circle-hld">
                <span className="h5 mb-0">3</span>
                <svg height="100" width="100">
                  <circle cx="50" cy="50" r="40" stroke="#f39933" stroke-width="3" fill="#212121" />
                </svg>
              </div>
              <h2 className="h6 mb-0">Step lorem ipsum</h2>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}