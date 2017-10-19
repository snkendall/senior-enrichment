// see a list of all campuses on the Campuses view

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createNewCampus, updateExistingCampus, deleteExistingCampus} from '../../reducers/campuses';
import {NavLink} from 'react-router-dom'
//import CampusLink from './CampusLink';
//import {fetchCampuses} from '../../reducers/campuses'

class AllCampuses extends Component {

    render() {
        return (
            <div className="container">
                    {this.props.campuses.map(campus => {
                       return (
                        <div key={campus.id}>
                            <h3 className="campus-name" >{campus.name}</h3>
                                <NavLink to={`/campuses/${campus.id}`}>
                                    <img className="campus-image" src={campus.image} />
                                </NavLink>
                        </div>
                       )
                        })
                    }
            </div>
        )
    }
}

const mapStateToProps = ({campuses}) => ({campuses});
const mapDispatchToProps = {createNewCampus, updateExistingCampus, deleteExistingCampus}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

