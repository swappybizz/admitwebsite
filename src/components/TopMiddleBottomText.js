import React from "react";


const Intro = (props) => {
    
  return (
    <>
    <div data-cursor-color="#61dbfb" data-cursor-size="10px">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {props.props.top}
              </p>
              <h1 className="sm:text-8xl text-4xl font-medium title-font mb-6 mt-6 text-gray-900">
                {props.props.middle}
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {props.props.bottom}
              </p>
            </div>
          
        </div>
      </section>
      </div>
    </>
  );
};

export default Intro;