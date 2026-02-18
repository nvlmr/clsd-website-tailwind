
import React, { useState, useEffect } from "react";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Card,Col,Row,
      Form,
      FormControl,
} from "react-bootstrap";
import ReactPaginate from "react-paginate";

import TutorialService from "../../services/literature.service";
import ResearcherPost from "./LiteraturePost";


const EventsList = () => {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState(null);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");


  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;


  useEffect(() => {
    retrieveEvents();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveEvents = () => {
    TutorialService.getAllPublic()
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



// const bySearch = (event, search) => {
//   if (search) {
//     return event.title.toLowerCase().includes(search.toLowerCase());
//   } else return event;
// };


const bySearch = (event, search) => {
  if (search) {
    const lowerCaseSearch = search.toLowerCase();
    return (
      event.title.toLowerCase().includes(lowerCaseSearch) ||
      event.author.toLowerCase().includes(lowerCaseSearch)
    );
  } else {
    return event;
  }
};


const filteredList = (events, search) => {
  return events

    .filter((event) => bySearch(event, search));
};




  const pageCount = Math.ceil(events.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  return (
    <>
    <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
        {/* <FormControl
            placeholder="search..."
            type="search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
        />
        </Form> */}

      <FormControl
        placeholder="Search by title or author..."
        type="search"
        aria-label="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      </Form>

    <Row className='mt-4' >
    <div className="col-md-6 " >
      <Col lg={12} >
      <Row >
        {
          filteredList(events,  search)

          .slice(pagesVisited, pagesVisited + usersPerPage)
          .reverse()
          .map((event) => (
              <Col lg={12}    onClick={() => setActiveEvent(event)}  >
              <ResearcherPost
                id={event.id}
                title={event.title}
                />
              </Col>
          ))}
       </Row>
       </Col>
<br></br>
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

                <Card style={{ backgroundColor: "#ecfafe" }}>
                <Card.Body >
                             
                                
                                 <Typography  style={{ fontFamily: "klavika", fontSize: "21px", fontWeight:"bold" ,color: '#353839 ' }} >
                                    <p align="center">
                                     {currentEvent.title}  
                                        </p> 
                                 </Typography>
                                  
                                <Row className='mt-4' >
                                  <Col >
                               
                                 
                                  <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "24px" }}   >
                                  Article Link
                                  </Box>

                                  <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 '}}  style={{ fontFamily: " klavika", fontSize: "18px" }}   >
                                    Author     <p align="center">
                                     {currentEvent.author}  
                                        </p> 
                                  </Box>

                                  <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "18px" }}   >
                                  DOI : <a href={currentEvent.doi} target="_blank" rel="noreferrer noopener">DOI Link</a> 
                                    </Box>
                      
                                  <Box sx={{ borderBottom: 2, borderColor: 'divider' ,  color: '#353839 ', fontWeight: 'bold'}}  style={{ fontFamily: " klavika", fontSize: "18px" }}   >
                                   Link :  <a href={currentEvent.link} target="_blank" rel="noreferrer noopener">Article Link </a>
                                   </Box>



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


