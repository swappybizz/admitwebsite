import React from "react"
import {Link} from "gatsby"
// import Strat from "../assets/strat.png";
// import System from "../assets/system.png";
// import hms from "../assets/hms.png";
// import digi from "../assets/digi.png";
// import oko from "../assets/oko.png";
// import mar from "../assets/mar.png";
// import { Cursor } from "react-creative-cursor";
// import "react-creative-cursor/dist/styles.css";

const Circular = () => {
  return (
    <>
      <div

      // data-cursor-size="10px"

      // data-cursor-color="#61dbfb"
      >
        <section className="text-gray-600 body-font">
          <div className="flex px-5 py-24 justify-center">
            <div className="flex flex-wrap -m-4">
              <div
              // data-cursor-background-image={Strat} data-cursor-size="250px"
              >
                <Link to="/strategy" className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto">
                  <p className="m-auto p-auto">Strategiarbeid</p>
                </Link>
              </div>
              <div

              // data-cursor-background-image={System} data-cursor-size="250px"
              >
                <Link to="/systems" className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto">
                  <p className="m-auto p-auto">Systemtenkning</p>
                </Link>
              </div>
              <div>
                <Link to="/hr"
                  // data-cursor-background-image={hms}
                  // data-cursor-size="250px"
                  className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto"
                >
                  <p className="m-auto p-auto">HR/HMS</p>
                </Link>
              </div>
              <div
              //  data-cursor-background-image={digi} data-cursor-size="250px"
              >
                <Link to="/digital" className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto">
                  <p className="m-auto p-auto">Digitalisering</p>
                </Link>
              </div>
              <div
              // data-cursor-background-image={oko} data-cursor-size="250px"
              >
                <Link to="/economy" className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto">
                  <p className="m-auto p-auto">??konomi</p>
                </Link>
              </div>
              <div
              // data-cursor-background-image={mar} data-cursor-size="250px"
              >
                <Link to="/marketing" className=" flex mx-5 w-36 h-36 border-admit-blue border-2 rounded-full justify-center text-center items-center my-auto py-auto">
                  <p className="m-auto p-auto">Markedsf??ring</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div
        //   data-cursor-size="10px" data-cursor-color="#61dbfb"
        >
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex justify-center -mx-4 -mb-10 text-center">
                <div className="sm:w-1/2 mb-10 px-4">
                  <h2 className="title-font text-xl text-gray-900 mt-6 mb-3">
                    Om du er klar for endring, men usikker p?? hvor du b??r starte
                    for ?? n?? dine m??l; Bestill tid her for en utforpliktende
                    kartleggings-prat,
                  </h2>

                  <button
                    //   data-cursor-magnetic
                    className="flex mx-auto mt-6 text-white bg-admit-blue border-0 py-2 px-12 focus:outline-none hover:bg-admit-blue-pressed rounded-full"
                  >
                    Kontact Oss
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Circular
