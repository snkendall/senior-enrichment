// see a list of all campuses on the Campuses view

import React from 'react';
import { connect } from 'react-redux';
import {updateExistingCampus, deleteExistingCampus} from '../../reducers/campuses';
import {NavLink} from 'react-router-dom';
import AddCampus from './AddCampus';


const AllCampuses = () => {

    const { deleteExistingCampus } = this.props;
    return (
        <div className="container">

                {this.props.campuses.map(campus => {
                    return (
                    <div key={campus.id}>
                        <h3 className="campus-name" >{campus.name}</h3>
                            <NavLink to={`/campuses/${campus.id}`}>
                                <img className="campus-image" src={campus.image} />
                            </NavLink>
                            <button
                                className="remove-button"
                                onClick={ () => deleteExistingCampus(campus) }>
                                <span>X</span>
                            </button>
                    </div>
                    )
                    })
                }
            <AddCampus />
        </div>
    )
}

const mapStateToProps = ({campuses}) => ({campuses});
const mapDispatchToProps = {updateExistingCampus, deleteExistingCampus}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

