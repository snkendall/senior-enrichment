// see a list of all campuses on the Campuses view

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CampusLink from './CampusLink';

class AllCampuses extends Component {
    render() {
        return (
            <div className="container">
                    {this.props.campuses.map(campus => {
                       return (
                        <div>
                            <h3 className="campus-name" key={campus.id}>{campus.name}</h3>
                            <CampusLink campus={campus} />
                        </div>
                       )
                        })
                    }
            </div>
        )
    }
}

const mapStateToProps = ({campuses}) => ({campuses});

