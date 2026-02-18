import React from "react";
import { Link  } from "react-router-dom";
import ReactPlayer from 'react-player';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import clsd from "./../components/image/LSD.png";


import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import DateTime from "./Datetime";
import Typography from '@mui/material/Typography';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'




import lspulogo from "./../components/image/LSPU.png";
import dostlogo from "./../components/image/DOST.png";
import pcieerdlogo from "./../components/image/PCIEERD.png";
import pcaarrdlogo from "./../components/image/PCAARRD.png";
import nrcplogo from "./../components/image/NRCP.png";
import dabfarlogo from "./../components/image/DA-BFAR.png";
import denrlogo from "./../components/image/DENR.png";
import uplblogo from "./../components/image/UPLB.png";
import lagunalogo from "./../components/image/LAGUNA.png";
import s4cplogo from "./../components/image/S4CP.png";
import clsdlogo from "./../components/image/LSD.png";






export default function Footer() {
  return (
<>
<MDBFooter className='text-center text-white mb-4' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4 '>
        <section className='mb-4'>


                <a
                  rippleColor="dark"
                  link
                  floating
                  size="lg"
                  className='text-dark m-1'
                  href='https://lspu.edu.ph/'
                  role='button'
                >
                    <img alt="lspulogo" className="footerlogo"  src={lspulogo}  />
                </a>



                    <a
                      rippleColor="dark"
                      link
                      floating
                      size="lg"
                      className='text-dark m-1'
                      href='https://www.dost.gov.ph/'
                      role='button'
                    >
                      <img alt="dostlogo" className="footerlogo"  src={dostlogo}  />
                    </a>



        <a
          rippleColor="dark"
          link
          floating
          size="lg"
          className='text-dark m-1'
              href='https://pcieerd.dost.gov.ph/'
          role='button'
        >
            <img alt="pcieerdlogo" className="footerlogo"  src={pcieerdlogo}  />
        </a>


          <a
            rippleColor="dark"
            link
            floating
            size="lg"
            className='text-dark m-1'
            href='http://www.pcaarrd.dost.gov.ph/home/portal/'
            role='button'
          >
            <img alt="pcaarrdlogo" className="footerlogo"  src={pcaarrdlogo}  />
          </a>

          <a
            rippleColor="dark"
            link
            floating
            size="lg"
            className='text-dark m-1'
            href='https://nrcp.dost.gov.ph/'
            role='button'
          >

          <img alt="nrcplogo" className="footerlogo"  src={nrcplogo}  />
          </a>

          <a
            rippleColor="dark"
            link
            floating
            size="lg"
            className='text-dark m-1'
              href='https://www.bfar.da.gov.ph/'
            role='button'
          >

            <img alt="dabfarlogo" className="footerlogo"  src={dabfarlogo}  />
          </a>

          <a
            rippleColor="dark"
            link
            floating
            size="lg"
            className='text-dark m-1'
            href='https://uplb.edu.ph/main/'
            role='button'
          >
          <img alt="uplblogo" className="footerlogo"  src={uplblogo}  />
          </a>

          <a
            rippleColor="dark"
            link
            floating
            size="lg"
            className='text-dark m-1'
            href='http://laguna.gov.ph/'
            role='button'
          >
            <img alt="lagunalogo" className="footerlogo"  src={lagunalogo}  />
          </a>


        </section>
      </MDBContainer>
    </MDBFooter>










    <MDBFooter className='bg-light text-black text-center text-md-start  mt-4'>
      <div className='container p-4'>
        <MDBRow>
          <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
            <h6 className='text-uppercase'>
              
              

          <a
            rippleColor="dark"
            link
            floating
            size="lg"
            className='text-dark m-1'
            href='/login'
            role='button'
          >
            <small>
             Center for Lakes Sutainable Development
            </small>
          </a>
            
            </h6>
            
            <small>

            <p>
                  Under the “Accelerated R&D Program for Capacity Building of Research and Development Institutions and Industrial Competitiveness
                    Niche Centers in the Regions for R&D (NICER) of Science for Change Programs
            </p></small>

            <a
              className='btn btn-link btn-floating btn-lg text-dark m-1'
              href='/home'
              role='button'
              data-mdb-ripple-color='dark'
            >
            {/*}
                <img alt="clsdlogo" className="subfooterlogo"  src={clsdlogo}  />
                */}
            </a>
          </div>

          <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <h6 className='text-uppercase text-black'><small>
            ABOUT GOVPH</small>
            </h6>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://www.gov.ph/about-the-government.html' className='text-black'><small>
                Learn more about the Philippine government, its structure, how government works and the people behind it.</small>
                </a>
              </li>
            </ul>
            <h6 className='text-uppercase text-black'><small>
            GOV.PH</small>
            </h6>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-black'><small>
              Open Data Portal</small>
                </a>
              </li>
              <li>
                <a href='https://www.officialgazette.gov.ph/' className='text-black'><small>
              Official Gazette</small>
                </a>
              </li>
            </ul>



          </div>



          <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <h6 className='text-uppercase mb-0'><small>
            GOVERNMENT LINKS</small>
            </h6>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-black'><small>
                  Office of the President</small>
                </a>
              </li>
              <li>
                <a href='https://ovp.gov.ph/' className='text-black'><small>
                  Office of the Vice President</small>
                </a>
              </li>
              <li>
                <a href='http://legacy.senate.gov.ph/' className='text-black'><small>
                  Senate of the Philippines</small>
                </a>
              </li>
              <li>
                <a href='https://www.congress.gov.ph/' className='text-black'><small>
                  House of Representatives</small>
                </a>
              </li>
              <li>
                <a href='https://sc.judiciary.gov.ph/' className='text-black'><small>
                    Supreme Court</small>
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'><small>

                  Court of Appeals</small>
                </a>
              </li>
              <li>
                <a href='https://sb.judiciary.gov.ph/' className='text-black'><small>
                Sandiganbayan</small>

                </a>
              </li>
            </ul>
          </div>

        </MDBRow>
      </div>

      {/*}
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <small>© 2021 Copyright:</small>
        <p className='text-black' ><small>
        Center for Lakes Sustainable Development</small>
        </p>
      </div>
      */}

      <section className="overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container mb-2" >
          <div className="row">
        <div className="col-12 col-md-2  order-md-1   section mt-4 mb-2" >
        <img alt="clsdlogo" className="clsdlogo"  src={clsd}  />
            </div>
            <div className="col-12 col-md-10 col-xl-7 order-md-2 section">
              <Typography component="div">
                <Box sx={{  fontWeight: '500',  fontSize: 15 , fontStyle: 'Bebas Neue' , color:"black" , mb:1,mt:5, lineHeight: 3 }}>© 2021 Copyright</Box>
                <Box sx={{ fontWeight: '500',  fontSize: 15 , fontStyle: 'Bebas Neue' , color:"black"  }} >Center for Lakes Sustainable Development</Box>
              </Typography>
            </div>
         <div className="col-12 col-md-1 offset-xl-1 order-md-3   text-black col-xl-2 section pt-md-0 pb-0 mt-1 mb-4" >
                  <Typography component="div" sx={{  fontWeight: '1000',  fontSize: 12 , fontStyle: 'Bebas Neue' , color:"black" , mb:-5,mt:5, lineHeight: 3 }}>
                      <DateTime />
                  </Typography>
                </div>
          </div>
        </div>
      </section>


    </MDBFooter>
    </>
  );
}
