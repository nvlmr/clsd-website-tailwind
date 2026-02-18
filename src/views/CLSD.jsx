import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/index";
import Typography from '@mui/material/Typography';
import { collection_content } from "./../config/index";
import Button from '@mui/material/Button';

import 'react-html5video/dist/styles.css';

export default function Main() {
  return (
    <div>
      <section>
        <div className="container mb-4 mt-4 bg-color-white">
          <div className="row">
            <div className="col-12 col-md-6 offset-xl-1 order-md-2 section pt-md-0 pb-0 mt-4 mb-4">
              <img
                className="singlePostImg"
                src={`${API_URL}${collection_content}3`} //clsd projects.jpg
                alt=""
              />
            </div>
            <div className="col-12 col-md-6 col-xl-5 order-md-1 section">
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: "Bebas Neue" }}>
                RESEARCH AT CLSD
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: "Bebas Neue" }}>
                Lakes Sustainable Development Projects
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Bebas Neue", fontSize: "18px", mt: 2, textAlign: "justify" }}>
                As one of the Program for Research and Development Institutions for Niche Centers in the Regions for R&D (NICER) of Science for Change Programs,
                the Laguna State Polytechnic University Los Baos Campus, College of Fisheries, acted as the project's implementing organization for the Lake NICER Project 2.
              </Typography>
              <Link to="/all-clsd-project">
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                  More Info <i className="fas fa-arrow-right ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
