import React from 'react';
import Navbar from './Navbar';
import {withRouter} from 'react-router-dom';

const Root = ({children}) => (
    <div className="container-fluid">
    <Navbar />
    { children }
  </div>
)

export default withRouter(Root);
