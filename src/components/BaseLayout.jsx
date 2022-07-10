import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import { PropTypes } from 'prop-types';

export default function BaseLayout({name}) {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid  component={'containerB'} container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-around'}>
            
            <Grid item  >
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}  >
               <Routes>
                  <Route exact path={'/'} element={<Home name={name}/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'2rem'} sx={{opacity: 0.4}} width={'100%'}>
                  <p>template created with &hearts; by <a href={'https://paytonpierce.dev'}>react js</a></p>
                  <p>&copy; 2022</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}
