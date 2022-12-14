import React from "react"

const Features = () => {
  return (
    <div
      id="about"
      className="container flex flex-col px-4 mx-auto mt-24 space-y-12 overscroll-auto md:space-y-0 md:flex-row lg:py-28"
    >
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          What's different about MGSAMG?
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          We would like to take the chance to introducing our company MGSAMG
          Trading & Manufacturing PLC.  Our company is located in the heart of
          the city around St.Urael church on SHEGER Building which has conducive
          parking place and accessible for transportation.
        </p>
      </div>
      <div className="flex flex-col space-y-8 md:w-1/2">
        {/* <!-- List Item 1 --> */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* <!-- Heading --> */}
          <div className="rounded-l-full bg-quaternary md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primary">
                01
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Track company-wide progress
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Real estate’s in commissioning, brokerage and consultancy
            </h3>
            <p className="text-darkGrayishBlue">
              Most of our staffs, especially work related with real estate’s in
              commissioning, brokerage and consultancy.
            </p>
          </div>
        </div>

        {/* <!-- List Item 2 --> */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* <!-- Heading --> */}
          <div className="rounded-l-full bg-quaternary md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-primary">
                02
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Import & Export, coordination in Event planning,  
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Coordination in Event planning
            </h3>
            <p className="text-darkGrayishBlue">
              Our company is also a pro-active event organizing company
              specializing in the management and coordination of business,
              corporate, promotions and special events.
            </p>
          </div>
        </div>

        {/* <!-- List Item 3 --> */}
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* <!-- Heading --> */}
          <div class="rounded-l-full bg-quaternary md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div class="px-4 py-2 text-white rounded-full md:py-1 bg-primary">
                03
              </div>
              <h3 class="text-base font-bold md:mb-4 md:hidden">
                Import & Export, Graphic art design and Printing
              </h3>
            </div>
          </div>

          <div>
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              Import & Export, Graphic art design and Printing
            </h3>
            <p class="text-darkGrayishBlue">
              We pride ourselves on our attention to detail, with dedicated,
              professional, enthusiastic event team and friendly service we give
              to our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
