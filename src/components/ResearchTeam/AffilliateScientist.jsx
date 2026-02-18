// import React, { useState, useEffect } from "react";

// import { API_URL, research_team_content } from "../../config/index";
// import Typography from '@mui/material/Typography';
// import {
//     Container,Card,Col,Row
// } from "react-bootstrap";
// import ReactPaginate from "react-paginate";

// import TutorialService from "../../services/researcher.service";
// import ResearcherPost from "./AffilliateScientistPost";


// const EventsList = () => {
//   const [events, setEvents] = useState([]);
//   const [currentEvent, setCurrentEvent] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(-1);
//   const [searchTitle, setSearchTitle] = useState("");


//   const [pageNumber, setPageNumber] = useState(0);
//   const usersPerPage = 4;
//   const pagesVisited = pageNumber * usersPerPage;


//   useEffect(() => {
//     retrieveEvents();
//   }, []);

//   const onChangeSearchTitle = e => {
//     const searchTitle = e.target.value;
//     setSearchTitle(searchTitle);
//   };

//   const retrieveEvents = () => {
//     TutorialService.getAllAffilliateScientist()
//       .then(response => {
//         setEvents(response.data);
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const refreshList = () => {
//     retrieveEvents();
//     setCurrentEvent(null);
//     setCurrentIndex(-1);
//   };

//   const setActiveEvent = (event, index) => {
//     setCurrentEvent(event);
//     setCurrentIndex(index);
//   };

//   const pageCount = Math.ceil(events.length / usersPerPage);
//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };




//   return (
//     <>

//     <Row className='mt-4 mb-4' >
//     <div className="col-md-6 " >
//       <Col lg={12} >
//       <Row >
//         {events
//           .slice(pagesVisited, pagesVisited + usersPerPage)
//           .reverse()
//           .map((event) => (
//               <Col lg={6}    onClick={() => setActiveEvent(event)}  >
//               <ResearcherPost
//                 id={event.id}
//                 first_name={event.first_name}
//                 middle_name={event.middle_name}
//                 last_name={event.last_name}

//                 suffix={event.suffix}
//                 designation={event.designation}
//                 fileName={event.fileName}
//               />
//               </Col>
//           ))}
//        </Row>
//        </Col>

//        <ReactPaginate

//        pageCount={pageCount}
//        onPageChange={changePage}
//        breakClassName={'page-item'}
//        breakLinkClassName={'page-link'}
//        containerClassName={'pagination'}
//        pageClassName={'page-item'}
//        pageLinkClassName={'page-link'}
//        previousClassName={'page-item'}
//        previousLinkClassName={'page-link'}
//        nextClassName={'page-item'}
//        nextLinkClassName={'page-link'}
//        activeClassName={'active'}
//        />




//       </div>
//       <div className="col-md-6">

//         {currentEvent ? (

// <Card className='mt-4'>
// <Card.Img  
//       class="rounded-circle" 
//       variant="top" 
//       src={`${API_URL}${research_team_content}${currentEvent.id}`} 
//       height="300" 
//       width="250"
//  />
// <Card.Title>

// </Card.Title>
// <Card.Body >
  
//            <Typography  sx={{ color: '#353839 ' }}  style={{ fontFamily: "klavika", fontSize: "36px" }} >
//            <p style={{ fontFamily: "klavika", fontSize: "22px" }}>
//            {currentEvent.first_name} {currentEvent.middle_name}. {currentEvent.last_name}
//             {currentEvent.suffix && `, ${currentEvent.suffix}`}
//           </p>

//            <p style={{ fontFamily: "klavika", fontSize: "18px" }}  >  
//             {currentEvent.position}, {currentEvent.department}
//            </p>  
//            </Typography>


//    <Row className='mt-4' >                                                   
//    <Col >
//           <Typography  sx={{ color: '#353839 ' }}  style={{ fontFamily: "klavika", fontSize: "18px" }} >
//             <p style={{ fontFamily: "klavika", fontSize: "22px" }}  >Research Interest
//            </p>  
//             {currentEvent.research_interest.split(",").map((research_interest, index) => (
//            <li key={index}>{research_interest.trim()}</li>

//                  ))}
//            </Typography>



//            <Typography className="mt-4" sx={{ color: '#353839 ' }}  style={{ fontFamily: "klavika", fontSize: "18px"  }} >
//             <p style={{ fontFamily: "klavika", fontSize: "22px" }}  >  
//             {currentEvent.email}                                 
//            </p>  
          
//            </Typography>


        
//           </Col>

//           </Row>
//   </Card.Body>
//   </Card>

//         ) : (
//           <>

//           </>
//         )}

//   </div>
//   </Row>


//     </>
//   );
// };

// export default EventsList;




import React, { useState, useEffect } from "react";
import { API_URL, research_team_content } from "../../config/index";
import Typography from '@mui/material/Typography';
import { Col, Container, Row, Card } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import TutorialService from "../../services/researcher.service";
import ResearcherPost from "./AffilliateScientistPost";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;

  useEffect(() => {
    retrieveEvents();
  }, []);

  const retrieveEvents = () => {
    TutorialService.getAllPublic()
      .then(response => {
        const lspuResearchers = response.data.filter(researcher => researcher.project_designation === "Affilliated Scientist");
        setEvents(lspuResearchers);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const paginateEvents = events.slice(pageNumber * usersPerPage, (pageNumber + 1) * usersPerPage);

  const showEventDetails = (event) => {
    setCurrentEvent(event);
  };

  return (
    <Container>
      <Row className='mt-4 mb-4'>
        <Col lg={6}>
          <Row>
            {paginateEvents.map((event) => (
              <Col lg={6} key={event.id} onClick={() => showEventDetails(event)}>
                <ResearcherPost
                  id={event.id}
                  first_name={event.first_name}
                  middle_name={event.middle_name}
                  last_name={event.last_name}
                  suffix={event.suffix}
                  designation={event.designation}
                  fileName={event.fileName}
                />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            pageCount={Math.ceil(events.length / usersPerPage)}
            onPageChange={handlePageChange}
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
        </Col>
        <Col lg={6}>
          {currentEvent && (
            <Card className='mt-4'>
              <Card.Img
                class="rounded-circle"
                variant="top"
                src={`${API_URL}${research_team_content}${currentEvent.id}`}
                height="300"
                width="250"
              />
              <Card.Title></Card.Title>
              <Card.Body>
                <Typography sx={{ color: '#353839 ' }} style={{ fontFamily: "klavika", fontSize: "36px" }}>
                  <p style={{ fontFamily: "klavika", fontSize: "22px" }}>
                    {currentEvent.first_name} {currentEvent.middle_name}. {currentEvent.last_name}
                    {currentEvent.suffix && `, ${currentEvent.suffix}`}
                  </p>
                  <p style={{ fontFamily: "klavika", fontSize: "18px" }}>
                    {currentEvent.position}, {currentEvent.department}
                  </p>
                </Typography>
                <Row className='mt-4'>
                  <Col>
                    <Typography sx={{ color: '#353839 ' }} style={{ fontFamily: "klavika", fontSize: "18px" }}>
                      <p style={{ fontFamily: "klavika", fontSize: "22px" }}>Research Interest</p>
                      {currentEvent.research_interest.split(",").map((research_interest, index) => (
                        <li key={index}>{research_interest.trim()}</li>
                      ))}
                    </Typography>
                    <Typography className="mt-4" sx={{ color: '#353839 ' }} style={{ fontFamily: "klavika", fontSize: "18px" }}>
                      <p style={{ fontFamily: "klavika", fontSize: "22px" }}>{currentEvent.email}</p>
                    </Typography>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EventsList;
