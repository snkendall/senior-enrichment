import {NavLink} from 'react-router-dom'
import React from 'react';

export default function CampusLink(campus) {
    return (
        <NavLink to={`/campuses/${campus.id}`}>
            <img className="campus-image" src={campus.image} />
        </NavLink>
    )
}
