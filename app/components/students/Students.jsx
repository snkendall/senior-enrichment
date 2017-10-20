
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createNewStudent, updateExistingStudent, deleteExistingStudent} from '../../reducers/students';
import {NavLink} from 'react-router-dom';
import AddStudent from './AddStudent';

class AllStudents extends Component {

    render() {
        const { deleteExistingStudent } = this.props;
        return (
            <div className="container">
                    {this.props.students.map(student => {
                       return (
                        <div key={student.id}>
                            <h3 className="student-name" >{student.name}</h3>
                                <NavLink to={`/students/${student.id}`}>
                                    <img className="student-image" src={student.image} />
                                </NavLink>
                                <button
                                    className="remove-button"
                                    onClick={ () => deleteExistingStudent(student) }>
                                    <span>X</span>
                                </button>
                        </div>
                       )
                        })
                    }
                <AddStudent />
            </div>
        )
    }
}

const mapStateToProps = ({students}) => ({students});
const mapDispatchToProps = {createNewStudent, updateExistingStudent, deleteExistingStudent}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);

