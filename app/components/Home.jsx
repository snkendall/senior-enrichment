import React from 'react';
import { NavLink } from 'react-router-dom';

import campusImage from '../../images/cuteCampusesLogo.jpeg';
import studentImage from '../../images/studentsLogo.jpg'
const Home = () =>  (
            <div>
                <NavLink to={'/campuses'}>
                    <img className='campusesLogo' src={campusImage} />
                </NavLink>
                <NavLink to={'/students'}>
                    <img className='studentsLogo' src={studentImage} />
                </NavLink>
            </div>
) 


export default Home;
