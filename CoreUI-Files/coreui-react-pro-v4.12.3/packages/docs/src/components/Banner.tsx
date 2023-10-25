import React, { FC } from 'react'

interface BannerProps {
  experimental?: boolean
  pro?: boolean
}

const Banner: FC<BannerProps> = ({ experimental, pro }) => {
  return (
    <>
      {pro && (
        <div className="bg-danger d-none d-lg-block bg-opacity-10 border-start border-start-5 border-start-danger p-4 pb-3 mb-5">
          <h3 className="mb-4">CoreUI PRO Component</h3>
          <p>
            To use this component you must have a CoreUI PRO license. Buy the{' '}
            <a href="https://coreui.io/pricing/?framework=react&docs=coreui-banner-pro">
              CoreUI PRO
            </a>{' '}
            and get access to all PRO components, features, templates, and dedicated support.
          </p>
        </div>
      )}
      {experimental && (
        <div className="bg-warning d-none d-lg-block bg-opacity-10 border-start border-start-5 border-start-warning p-4 pb-3 mb-5">
          <h3 className="mb-4">Experimental release</h3>
          <p>
            This component is part of the future release and has an experimental API. If you want to
            use the Virtual Scroller component you have to note that API can change in the final
            version.
          </p>
        </div>
      )}
    </>
  )
}

Banner.displayName = 'Banner'

export default Banner
