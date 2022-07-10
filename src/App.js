import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import { PropTypes } from 'prop-types';

function App({name}) {
   return (
      <div>
         <BrowserRouter>
            <BaseLayout name={name}/>
         </BrowserRouter>
      </div>
   );
}

App.prototype = {
   name: PropTypes.string,
   back: PropTypes.string,
}
export default App;

