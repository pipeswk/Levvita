import React from 'react'

const HeroContainer = ( { section, children } ) => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-md-row align-items-center g-5 py-5 justify-content-center">
            <div className="col-12 col-sm-8 col-lg-6">
                {section}
            </div>
            <div className="col-lg-6">
                {children}
            </div>
        </div>
    </div>
  )
}

export default HeroContainer