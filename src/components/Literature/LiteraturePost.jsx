

import React from "react";
import Typography from '@mui/material/Typography';

import {
    Card
} from "react-bootstrap";

import styled from 'styled-components';
const cardWidth = 620 ;
const borderRadius = 10;
const transition = 'all 0.45s ease';

const Screenshot = styled.figure`
  z-index: 100;
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

const Content = styled.div`
  z-index: 100;
  position: relative;
  padding: 10px 10px 10px;
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

// const Style = styled.button`
//   position: relative;
//   flex-shrink: 0;
//   width: ${cardWidth}px;
//   text-align: left;
//   background: #ffffff;
//   border-radius: ${borderRadius}px;
//   cursor: pointer;
//   box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 20px 20px -10px rgba(0, 0, 0, 0.125);
//   transition: ${transition};

//   &:hover {
//     transform: scale(1.04);

//     ${Title},
//     ${Description},
//     ${BottomBar} {
//       transform: scale(0.92);
//     }

//     ${Title} {
//       transform: translateY(-10px);
//     }

//     ${Description} {
//       transform: translateY(-12px);
//     }

//     ${BottomBar} {
//       border-radius: ${borderRadius - 2}px;
//       transform: translateY(-14px) scale(0.9);
//     }

//     ${Screenshot} {
//       transform: translateY(4px) scale(0.92);
//       border-radius: ${borderRadius - 2}px;

//       &::before {
//         background: rgba(0, 0, 0, 0.1);
//       }
//     }
//   }
// `;



const Style = styled.button`
  position: relative;
  flex-shrink: 0;
  width: ${cardWidth}px;
  text-align: left;
  background: #ecfafe;  /* Set the desired metallic green color */
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
export default function EventPost({id, title}) {
  return (
        <>
          <Card className="mt-2 "  >
            <Style>
              <Card.Body>
                         <Typography style={{ fontFamily: "klavika", fontSize: "18px", fontWeight:"bold" ,color: '#353839 ' }} >
                                    <p align="center">
                                      {title}  
                                   </p> 
                         </Typography>         
              </Card.Body>
              </Style>
          </Card>

        </>

  );
}
