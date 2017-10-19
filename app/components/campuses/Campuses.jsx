// see a list of all campuses on the Campuses view

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createNewCampus, updateExistingCampus, deleteExistingCampus} from '../../reducers/campuses';
import {NavLink} from 'react-router-dom'

//import {fetchCampuses} from '../../reducers/campuses'

class AllCampuses extends Component {

    // constructor(props) {
    //     super(props);
    //     this.removeCampus = this.removeCampus.bind(this);
    // }

    // removeCampus (event) {
    //     const {deleteExistingCampus} = this.props;
    //     console.log(event.target.value)
    //     // event.stopPropagation();
    //     // deleteExistingCampus(event.target.value)
    // }

    render() {
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
            </div>
        )
    }
}

const mapStateToProps = ({campuses}) => ({campuses});
const mapDispatchToProps = {createNewCampus, updateExistingCampus, deleteExistingCampus}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

