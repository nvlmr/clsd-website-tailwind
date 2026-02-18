import React from "react";

import { Link } from "react-router-dom";
export default function Main() {



  return (
    <div  className="mt-4 mb-4">

      <section className="section pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-5 offset-lg-1">
              <div className="img-effect img-effect-solid mb-5 mb-md-0">
                <img src="" className="img-fluid" alt="..." />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 offset-lg-1">
              <h2 className="mb-4">Research Unit</h2>
              <p className="text-muted" align="justify">
              The Science Research Laboratory (SRL) of the Laguna State Polytechnic University -
               Los Baños Campus (LSPU-LBC) was first established in early 2014 as the Science Laboratory Annex Building
               of the College of Fisheries (COF), originally designed for instruction purposes.
              </p>
                    <Link to="/about-research-units">
              <a


                className="btn btn-outline-primary animate"
                data-toggle="animation"
                data-animation="fadeUp"
                data-animation-order={3}
                data-animation-trigger="load"
              >
                More Info<i className="fas fa-arrow-right ml-2" />
              </a>
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
