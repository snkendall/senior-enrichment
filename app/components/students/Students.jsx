
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createNewStudent, updateExistingStudent, deleteExistingStudent} from '../../reducers/students';
import {NavLink} from 'react-router-dom'

class AllStudents extends Component {

    render() {
        return (
            <div className="container">
                    {this.props.students.map(student => {
                       return (
                        <div key={student.id}>
                            <h3 className="student-name" >{student.name}</h3>
                                <NavLink to={`/students/${student.id}`}>
                                    <img className="student-image" src={student.image} />
                                </NavLink>
                        </div>
                       )
                        })
                    }
            </div>
        )
    }
}

const mapStateToProps = ({students}) => ({students});
const mapDispatchToProps = {createNewStudent, updateExistingStudent, deleteExistingStudent}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);

