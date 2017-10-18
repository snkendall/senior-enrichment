import React from './react';
import {NavLink} from 'react-router-dom';

const image = '../../images/cuteCampusesLogo.jpeg';

export default function Home(){
    return (
        <div>
            <NavLink to={'/campuses'}>
                <img className='campusesLogo' src={image} />
            </NavLink>
        </div>    
    )
}