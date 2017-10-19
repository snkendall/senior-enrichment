// see details about a student on the Single Student view, including that student's campus
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

class SingleStudent extends Component {

    render() {
        const {student, campuses} = this.props;
        console.log('student', student)
        if (!student) return <div />;
        const [campus] = campuses.filter(campus => student.campusId === campus.id);
        console.log('campus', campus)
        return (
            <div>
                <h2>{student.name}</h2>
                    <img className="single-campus-image" src={student.image} />
                        <h3 className="student-campus">
                            {student.name} is a proud student of {campus.name}
                            </h3>
                                <NavLink to={`/campus/${campus.id}`}>
                                <img className="campus-logo" src={campus.image} />
                                </NavLink>
                        <h4>Contact {student.name} at <a href="#">{student.email}</a></h4>
            </div>
        )

    }
}

const mapStateToProps = ({campuses, students}, ownProps)  => {
    const paramId = Number(ownProps.match.params.studentId);
    return {
      student: _.find(students, student => student.id === paramId),
      campuses: campuses
    };
  };

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
