import { BaseLayout } from '@/components/layouts'

export default function FirstEnter() {
  return (
    <BaseLayout className="fist-enter">
      <section className="fabrx-hero mt-5">
        <div className="container">
          <div class="stepper__row">
            <div class="stepper--horizontal">
              <div class="stepper--horizontal__circle">
                <span class="stepper--horizontal__circle__text">
                  1
                </span>
              </div>
              <div class="stepper--horizontal__details">
                <h3 class="heading__three">
                  Name of Step
                </h3>
                <p class="paragraph">
                  Example of a horizontal stepper
                </p>
              </div>
            </div>
            <div class="stepper--horizontal stepper--horizontal--disabled">
              <div class="stepper--horizontal__circle">
                <span class="stepper--horizontal__circle__text">
                  2
                </span>
              </div>
              <div class="stepper--horizontal__details">
                <h3 class="heading__three">
                  Name of Step
                </h3>
                <p class="paragraph">
                  Example of a horizontal stepper
                </p>
              </div>
            </div>
            <div class="stepper--horizontal stepper--horizontal--disabled">
              <div class="stepper--horizontal__circle">
                <span class="stepper--horizontal__circle__text">
                  3
                </span>
              </div>
              <div class="stepper--horizontal__details">
                <h3 class="heading__three">
                  Name of Step
                </h3>
                <p class="paragraph">
                  Example of a horizontal stepper
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}