import axios from './axios';

// can create a student
// can edit a student's info, including the campus that student is assigned to
// can delete a student

//ACTION-TYPE
const CREATE_STUDENT = 'CREATE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const CHANGE_CAMPUS = 'CHANGE_CAMPUS';
const DELETE_STUDENT = 'DELETE_STUDENT';
//ACTION-CREATORS 
 function createStudent(student) {
     return {
         type: CREATE_STUDENT,
         student: student
     }
 }
 function updateStudent(student) {
    return {
        type: UPDATE_STUDENT,
        student: student
    }
}
function changeCampus(student) {
    return {
        type: CHANGE_CAMPUS,
        student: student
    }
}
function deleteStudent(student) {
    return {
        type: DELETE_STUDENT,
        student: student
    }
}
//THUNK-CREATORS

export const createNewStudent = student => {
    return  dispatch => {
        axios.post('/students', student)
        .then(student => dispatch(createStudent(student)))
        .catch(err => console.error('Failed to create student', err))
    }

}
export const updateExistingStudent = student => {
    return  dispatch => {
        axios.put(`/students/${student.id}`, student)
        .then(student => dispatch(updateStudent(student)))
        .catch(err => console.error('Failed to update student', err))
    }

}
export const deleteExistingStudent = student => {
    return dispatch => {
        axios.delete(`/students/${student.id}`, student)
        .then(student => dispatch(deleteStudent(student)))
        .catch(err => console.error('Failed to delete student', err))
    }
}
//REDUCER
export default function studentsReducer(students=[], action) {
    switch (action.type){
        case CREATE_STUDENT:
            return [...students, action.student];
        
        case UPDATE_STUDENT:
            return students.map(student => (
                action.student.id === student.id ? action.student : student
            ))

        case DELETE_STUDENT:
            return students.filter(student => 
                student.id !== action.student.id
            )

        default:
            return students;
    }
}