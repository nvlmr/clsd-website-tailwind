import React, { useState, useEffect } from "react";
import { API_URL } from "../../config/index";
import Typography from '@mui/material/Typography';


import {
    Container,Card,Col,Row
} from "react-bootstrap";
import ReactPaginate from "react-paginate";


import TutorialService from "../../services/researcher.service";
import ResearcherPost from "./ResearchHeadPost";


const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");


  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;


  useEffect(() => {
    retrieveEvents();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveEvents = () => {
    TutorialService.getAllPublicResearchHead()
      .then(response => {
        setEvents(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveEvents();
    setCurrentEvent(null);
    setCurrentIndex(-1);
  };

  const setActiveEvent = (event, index) => {
    setCurrentEvent(event);
    setCurrentIndex(index);
  };

  const pageCount = Math.ceil(events.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };




  return (
    <>

    <Row className='mt-4 mb-4' >
    <div className="col-md-6 " >
      <Col lg={12} >
      <Row >
        {events
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .reverse()
          .map((event) => (
              <Col lg={6}    onClick={() => setActiveEvent(event)}  >
              <ResearcherPost
                id={event.id}
                firstName={event.firstName}
                middleName={event.middleName}
                lastName={event.lastName}

                suffix={event.suffix}
                designation={event.designation}
                fileName={event.fileName}
              />
              </Col>
          ))}
       </Row>
       </Col>

       <ReactPaginate
       pageCount={pageCount}
       onPageChange={changePage}
       breakClassName={'page-item'}
       breakLinkClassName={'page-link'}
       containerClassName={'pagination'}
       pageClassName={'page-item'}
       pageLinkClassName={'page-link'}
       previousClassName={'page-item'}
       previousLinkClassName={'page-link'}
       nextClassName={'page-item'}
       nextLinkClassName={'page-link'}
       activeClassName={'active'}
       />




      </div>
      <div className="col-md-6">

        {currentEvent ? (

                <Card className='mt-4'>
                      <Card.Img  
                            class="rounded-circle" 
                            variant="top" 
                            src={`${API_URL}researcher-content/${currentEvent.fileName}`} 
                            height="300" 
                            width="250"
                       />
                      <Card.Title>
                      
                      </Card.Title>
                      <Card.Body >
                        
                                 <Typography  sx={{ color: '#353839 ' }}  style={{ fontFamily: "klavika", fontSize: "36px" }} >
                                  <p style={{ fontFamily: "klavika", fontSize: "22px" }}  >  
                                  {currentEvent.firstName} {currentEvent.middleName}.  {currentEvent.lastName}, {currentEvent.suffix} 
                                 </p>  
                                 </Typography>


                         <Row className='mt-4' >                                                   
                         <Col >
                                <Typography  sx={{ color: '#353839 ' }}  style={{ fontFamily: "klavika", fontSize: "18px" }} >
                                  <p style={{ fontFamily: "klavika", fontSize: "22px" }}  >Research Interest
                                 </p>  
                                  {currentEvent.researchinterest.split(",").map((researchinterest, index) => (
                                 <li key={index}>{researchinterest.trim()}</li>
           
                                       ))}
                                 </Typography>


          
                                 <Typography className="mt-4" sx={{ color: '#353839 ' }}  style={{ fontFamily: "klavika", fontSize: "18px"  }} >
                                  <p style={{ fontFamily: "klavika", fontSize: "22px" }}  >  
                                  Email                                
                                 </p>  
                                 {currentEvent.email}   
                                 </Typography>


                              
                                </Col>

                                </Row>
                        </Card.Body>
                        </Card>

        ) : (
          <>

          </>
        )}

  </div>
  </Row>


    </>
  );
};

export default EventsList;
