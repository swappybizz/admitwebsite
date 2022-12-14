import React from "react"

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-b from-white to-admit-red via-slate-400 ">
        <div className="container sm:p-48 mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <div >
              <h1 className="title-font sm:text-8xl text-3xl mb-4 font-medium text-gray-900">
                <span className="font-thin">#</span>
                <span className="font-semibold">weadmit</span>
              </h1>
              <div className="">
                <p className="mb-8 leading-relaxed sm:text-lg text-lg sm:font-normal font-medium text-gray-900 sm:p-12 p-6">
                  #we admit pil vi innrømmer, vi forplikter oss til; å dele
                  kompetanse gjennom vårt støtte- og utviklingsmiljø og skape
                  bærekraftig vekst gjennom innovasjon og bruk av fremtidsrettet
                  verktøy.
                </p>
                <div className="flex justify-center">
                  <button
                    id="stick-title"
                    className="inline-flex text-white bg-admit-blue border-0 py-2 px-12 focus:outline-none hover:bg-admit-blue-pressed rounded-full text-lg"
                  >
                    Se Hvordan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
