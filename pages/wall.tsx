import { BaseLayout } from '@/components/layouts';
import { Picker } from '@/components/pages/wall';

export default function Home() {
  return (
    <BaseLayout className="wall">
      <section className="fabrx-section bg-white mt-5">
        <div className="container">
          <div className="card rounded-12 shadow-40 p-3 p-md-5">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img src="../assets/images/vectors/vector-49.png" alt="Vector" />
              </div>
              <div className="col-lg-7">
                <div className="hero-caption px-0 px-xl-5 pt-4 pt-lg-0">
                  <h1 className="font-weight-bold mb-2">Make it super awesome</h1>
                  <p className="font-size-14">Billions upon billions bits of moving fluff invent the universe science rogue Rig Veda, orion's sword rich in heavy atoms</p>
                  <hr />
                  <div className="mt-4">
                    <a href="#0" className="btn btn-primary btn-lg">Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Picker />
    </BaseLayout>
  )
}
