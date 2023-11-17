import React from 'react'

const Jumbotron = () => {
  return (
    <section className="relative bg-[#090909]">
      {/* <div className="bg-[url('/worldMap.png')] w-[calc(100%-30vw)] bg-contain  clip-map bg-white h-[400px]"></div> */}
      <img
        src="/worldMap.png"
        alt="map"
        className="w-[calc(100%-30vw)]  clip-map bg-white"
      />
      <img
        src="/MohamedNashidMifzalP.png"
        alt="MohamedNashidMifzalP"
        className="absolute bottom-0 md:right-24 right-[calc(100%-90vw)] w-[30vw] md:w-auto"
      />
    </section>
  )
}

export default Jumbotron