// see details about a campus on the Single Campus view, including that campus's students
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import EditCampus from './EditCampus';

const SingleCampus = () => {
    const {campus, students} = this.props;
    if (!campus) return <div />

    return (
        <div>
            <h2>{campus.name}</h2>
                <img className="single-campus-image" src={campus.image} />
                    <h3 className="student-introduction">Meet our brilliant students!</h3>
                    {students.map(student => {
                        return (
                            <div key={student.id}>
                                <img className="student-image" src={student.image} />
                                <NavLink to={`/students/${student.id}`}>{student.name}</NavLink>
                            </div>
                )
            })}
            <EditCampus campus={campus} />
        </div>
    )
}

const mapStateToProps = ({campuses, students}, ownProps)  => {
    const paramId = Number(ownProps.match.params.campusId);
    return {
      campus: _.find(campuses, campus => campus.id === paramId),
      students: students.filter(student => student.campusId === paramId)
    };
  };

const mapDispatchToProps =  null;

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
