import { BaseLayout } from '@/components/layouts';

export default function Home() {
  return (
    <BaseLayout className="home">
      <section className="row g-0 align-items-center">
        <div className="col-lg-6 bg-white">
          <div className="fabrx-min-height pb-5 pt-4 pt-lg-5">
            <div className="fabrx-caption pr-0 pr-lg-5">
              <h4 className="font-weight-regular">Short headline</h4>
              <h1 className="font-weight-bold mt-3 mt-lg-4 ddd-primary">Super awesome headline</h1>
              <p className="h6">Realm of the galaxies across the centuries the carbon in our apple pies vanquish the impossible another world venture. Dream of the mind's eye muse about home.</p>
              <button className="btn btn-primary btn-lg mt-4">Learn more</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-right py-5 mt-0 mt-lg-5 pl-5 overflow-hidden">
            <img src="/assets/images/vectors/vector-36.svg" style={{marginRight: "-75px"}} alt="Vector" />
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
