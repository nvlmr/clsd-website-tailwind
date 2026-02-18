// import React, { useState, useEffect } from "react";
// import { API_URL, research_team_content } from "../../config/index";
// import Typography from '@mui/material/Typography';
// import { Card, Style } from "react-bootstrap";
// import TutorialService from "../../services/researcher.service";

// const EventsList = () => {
//   const [director, setDirector] = useState({});

//   useEffect(() => {
//     retrieveDirector();
//   }, []);

//   const retrieveDirector = () => {
//     TutorialService.getClsdDirector()
//       .then(response => {
//         setDirector(response.data[0]); // Assuming it returns an array with one director
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   const { first_name, middle_name, last_name, suffix, tags ,email} = director;

//   return (
//     <>
//       <Card className="mt-4 mb-4" bg="light" align='center'>
    
//           <Card.Body>
//             <div style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'column',
//             }}>
//               <div style={{
//                 width: '300', // Adjust the width and height as needed
//                 height: '300',
//                 borderRadius: '50%',
//                 overflow: 'hidden',
//                 border: '2px solid #ccc', // Border style and color
//               }}>
//                 <img
//                   className="rounded-circle"
//                   variant="top"
//                   width="300"
//                   height="300"
//                   src={`${API_URL}${research_team_content}/1`} // Update this URL as needed
//                   alt="Profile"
//                 />
//               </div>
//               <br />
//               <Typography variant="body2" component="div" sx={{ fontWeight: 'bold' }}>
//                 {first_name} {middle_name}. {last_name}, {suffix}
//               </Typography>
//               <Typography variant="body2" component="div" sx={{ fontWeight: 'bold' }}>
//                  {tags}
//               </Typography>
//               <Typography variant="body2" component="div" sx={{ fontWeight: 'bold' }}>
//                  {email}
//               </Typography>
//             </div>
//           </Card.Body>
     
//       </Card>
//     </>
//   );
// };

// export default EventsList;


import React, { useState, useEffect } from "react";
import { API_URL, research_team_content } from "../../config/index";
import Typography from '@mui/material/Typography';
import { Card, Style } from "react-bootstrap";
import TutorialService from "../../services/researcher.service";

const EventsList = () => {
  const [director, setDirector] = useState({});

  useEffect(() => {
    retrieveDirector();
  }, []);

  const retrieveDirector = () => {
    TutorialService.getAllPublic()
      .then(response => {
        // Assuming it returns an array of researchers
        const clsdDirector = response.data.find(researcher => researcher.tags === "CLSD Director");
        if (clsdDirector) {
          setDirector(clsdDirector);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  const { id, first_name, middle_name, last_name, suffix, tags, email } = director;

  return (
    <>
      <Card className="mt-4 mb-4" bg="light" align='center'>
    
          <Card.Body>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
              <div style={{
                width: '300', // Adjust the width and height as needed
                height: '300',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #ccc', // Border style and color
              }}>
                <img
                  className="rounded-circle"
                  variant="top"
                  width="300"
                  height="300"
                  src={`${API_URL}${research_team_content}${id}`} // Update this URL as needed
                  alt="Profile"
                />
              </div>
              <br />
              <Typography variant="body2" component="div" sx={{ fontWeight: 'bold' }}>
                {first_name} {middle_name}. {last_name}, {suffix}
              </Typography>
              <Typography variant="body2" component="div" sx={{ fontWeight: 'bold' }}>
                 {tags}
              </Typography>
              <Typography variant="body2" component="div" sx={{ fontWeight: 'bold' }}>
                 {email}
              </Typography>
            </div>
          </Card.Body>
     
      </Card>
    </>
  );
};

export default EventsList;
