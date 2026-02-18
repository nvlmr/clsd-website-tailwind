

import React, { useState, useEffect } from "react";
import TutorialService from "../../services/event.service";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import NewsEventPost from "./NewsEventPost";

const NewsEventHome = () => {
  const [programs, setPrograms] = useState([]);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 1;
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const retrieveTutorials = () => {
    TutorialService.getAllPublic()
      .then(response => {
        const sortedPrograms = response.data.sort((a, b) => {
          // Sort by createdAt in descending order
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setPrograms(sortedPrograms);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const byCategory = (program, category) => {
    if (category) {
      return program.category === category;
    }
    return program;
  };

  const bySearch = (program, search) => {
    if (search) {
      return program.title.toLowerCase().includes(search.toLowerCase());
    }
    return program;
  };

  const filteredList = (programs, category, search) => {
    return programs
      .sort((a, b) => {
        // Sort by createdAt in descending order
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
      .filter(program => byCategory(program, category))
      .filter(program => bySearch(program, search));
  };

  const pageCount = Math.ceil(programs.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Container md="4">
        <Row>
          <Col lg={12}>
            <Row>
              {filteredList(programs, category, search)
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map(program => (
                  <Col lg={12} md="4" key={program.id}>
                    <NewsEventPost
                      id={program.id}
                      fileName={program.fileName}
                      title={program.title}
                      description={program.description}
                      createdAt={program.createdAt}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewsEventHome;
