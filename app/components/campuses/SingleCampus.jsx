// see details about a campus on the Single Campus view, including that campus's students
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import _ from 'lodash';

class SingleCampus extends Component {
     
    render() {
        console.log(this.props)
        const paramId = Number(this.props.match.params.campusId);
        const campusArray = this.props.campuses.filter(campus => {
            return campus.id === paramId
        });
        const campus = campusArray[0];
        const students = this.props.students.filter(student => {
            return student.campusId === paramId
        });
        console.log('campus', campus)
        //const campus = this.props.campus;
        //const students = this.props.students;
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
            </div>
        )

    }
}

const mapStateToProps = ({campuses, students})  => ({campuses, students})
    //{
//     const paramId = Number(ownProps.match.params.campusId);
//     return {
//       campus: _.find(campuses, campus => campus.id === paramId),
//       students: _.find(students, student => student.campusId === paramId)
//     };
//   };

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
