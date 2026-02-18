import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';

import 'react-html5video/dist/styles.css';

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from "@mui/material/IconButton";
import { DefaultPlayer as Video } from 'react-html5video';

export default function Main() {
  return (
    <div>
      <section>
        <div className="container mb-4 mt-4 bg-color-white">
          <div className="row">
            <div className="col-12 col-md-6 offset-xl-1 order-md-2 section pt-md-0 pb-0 mt-4 mb-4">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=vErBTHQQM1Y&pp=ygUoY2VudGVyIGZvciBsYWtlcyBzdXN0YWluYWJsZSBkZXZlbG9wbWVudA%3D%3D"
                poster=""
                width="100%"
                height="100%"
                playing
                controls
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            </div>
            <div className="col-12 col-md-6 col-xl-5 order-md-1 section">
              <p sx={{ fontStyle: "Bebas Neue" }} className="mt-5 font-weight-medium text-xs text-uppercase text-primary">
                NICHE Center for the Regions
              </p>
              <h1 className="mb-4 text-black">
                Center for Lakes Sustainable Development
              </h1>
              <p className="mb-5 text-black" align="justify">
                “Accelerated R&D Program for Capacity Building of Research and Development Institutions and
                Industrial Competitiveness Niche Centers in the Regions for R&D (NICER) of Science for Change Programs"
              </p>
              <Link to="/about-CLSD">
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
