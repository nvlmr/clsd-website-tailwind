
import React from "react";
import { API_URL } from "../../config/index";
import { collection_content } from "../../config/index";




import {useNavigate } from "react-router-dom";

import {
   Card,Row,Col
} from "react-bootstrap";

    import styled from 'styled-components';


    const cardWidth = 240;
    const borderRadius = 8;
    const transition = 'all 0.45s ease';

    const Screenshot = styled.figure`
      z-index: 200;
      position: relative;
      margin: 0;
      padding: 0;
      width: ${cardWidth}px;
      height: 200px;
      background: url(${(props) => props.image}) 0 0 no-repeat;
      background-size: cover;
      border-radius: ${borderRadius}px ${borderRadius}px 0 0;
      overflow: hidden;
      backface-visibility: hidden;
      transition: ${transition};

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0);
        transition: ${transition};
      }
    `;



    const Title = styled.span`
      display: block;
      margin-bottom: 4px;
      font-size: 1.25em;
      font-weight: 500;
      transition: ${transition};
    `;

    const Description = styled.span`
      display: block;
      font-size: 0.875em;
      color: #999999;
      transition: ${transition};
      transition-delay: 0.04s;
    `;

    const BottomBar = styled.span`
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 10px;
      background: ${(props) => props.background && props.background};
      border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
      transition: ${transition};
    `;

    const Style = styled.button`
      position: relative;
      flex-shrink: 0;
      width: ${cardWidth}px;
      text-align: left;
      background: #ffffff;
      border-radius: ${borderRadius}px;
      cursor: pointer;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 20px 20px -10px rgba(0, 0, 0, 0.125);
      transition: ${transition};

      &:hover {
        transform: scale(1.04);

        ${Title},
        ${Description},
        ${BottomBar} {
          transform: scale(0.92);
        }

        ${Title} {
          transform: translateY(-10px);
        }

        ${Description} {
          transform: translateY(-12px);
        }

        ${BottomBar} {
          border-radius: ${borderRadius - 2}px;
          transform: translateY(-14px) scale(0.9);
        }

        ${Screenshot} {
          transform: translateY(4px) scale(0.92);
          border-radius: ${borderRadius - 2}px;

          &::before {
            background: rgba(0, 0, 0, 0.1);
          }
        }
      }
    `;


export default function ResearchUnitList() {
  const navigate = useNavigate();

  function molbio() {
    navigate(`/molbio`);
  }
  function Analytical() {
    navigate(`/analytical`);
  }
  function foodinnovation() {
    navigate(`/food-innovation`);
  }
  function aquaculture() {
    navigate(`/aquaculture`);
  }
  function generalfacilities() {
    navigate(`/general-facilities`);
  }


  return (

    <div className="mt-4 mb-4">
      <Row className="mt-4 mb-4">
        <Col className="mt-4 mb-4">
    <Card  onClick={molbio}>
      <Style>
 
    <Card.Img height='150' with='150'    src={`${API_URL}${collection_content}5`}   />
    <Card.Body>
    <Card.Title  style={{ fontFamily: "klavika", fontSize: "18px", fontWeight:"bold" ,color:'#353839 '}} >Molecular Laboratory</Card.Title>


    </Card.Body>
      </Style>
    </Card>
</Col>
<Col className="mt-4 mb-4">
    <Card onClick={Analytical}>
        <Style>
        <Card.Img height='150' with='150'    src={`${API_URL}${collection_content}6`}   />
    <Card.Body>
    <Card.Title style={{ fontFamily: "klavika", fontSize: "18px", fontWeight:"bold" ,color:'#353839 '}} >Analytical Laboratory</Card.Title>


    </Card.Body>
        </Style>
    </Card>
</Col>
<Col className="mt-4 mb-4">
    <Card  onClick={foodinnovation} >
        <Style>
        <Card.Img height='150' with='150'    src={`${API_URL}${collection_content}8`}   />
    <Card.Body> 
    <Card.Title style={{ fontFamily: "klavika", fontSize: "18px", fontWeight:"bold" ,color:'#353839 '}} >Food Innovation Laboratory</Card.Title>


    </Card.Body>
        </Style>
    </Card>
</Col>

<Col className="mt-4 mb-4">
    <Card  onClick={aquaculture}  >
        <Style>
        <Card.Img height='150' with='150'    src={`${API_URL}${collection_content}7`}   />
    <Card.Body>
    <Card.Title style={{ fontFamily: "klavika", fontSize: "18px", fontWeight:"bold" ,color:'#353839 '}} >Aquaculture Station</Card.Title>


    </Card.Body>
        </Style>
    </Card>
</Col>

<Col className="mt-4 mb-4">
    <Card  onClick={generalfacilities}>
        <Style>
        <Card.Img height='150' with='150'    src={`${API_URL}${collection_content}9`}   />
    <Card.Body>
    <Card.Title style={{ fontFamily: "klavika", fontSize: "18px", fontWeight:"bold" ,color:'#353839 '}} >General Facility Station</Card.Title>


    </Card.Body>
        </Style>
    </Card>
</Col>
</Row>



</div>

  );
}
