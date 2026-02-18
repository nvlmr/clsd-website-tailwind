import  React, { useState , useEffect } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
export const DateTime = () => {

    var [date,setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }

    });
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return(
    <div>
          <Typography component="div">
      {/*}    <Box sx={{  fontWeight: '1000',  fontSize: 15 , fontStyle: 'Bebas Neue' , color:"black" ,mt:5, lineHeight: 3 }}>  Philippine Standard Time</Box> */}
          <Box sx={{ fontWeight: '1000',  fontSize: 15 , fontStyle: 'Bebas Neue' , color:"black" , lineHeight: 1}}>   {new Date(date).toLocaleDateString("en-US",options)}</Box>
          <Box sx={{ fontWeight: '2000',  fontSize: 30 , fontStyle: 'Bebas Neue' , color:"black"  }} > {date.toLocaleTimeString()}</Box>
        </Typography>


        </div>
    )
}

export default DateTime
