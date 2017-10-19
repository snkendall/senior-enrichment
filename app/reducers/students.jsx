import axios from 'axios';

// can create a student
// can edit a student's info, including the campus that student is assigned to
// can delete a student

//ACTION-TYPE
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const CHANGE_CAMPUS = 'CHANGE_CAMPUS';
const DELETE_STUDENT = 'DELETE_STUDENT';
//ACTION-CREATORS 
function getStudents(students) {
    return {
        type: GET_STUDENTS,
        students: students
    }
}
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

export const fetchStudents = () => {
    return dispatch => {
        axios.get('/api/students')
        .then(({data}) => dispatch(getStudents(data.students)))
        .catch(err => console.error('Failed to load students', err))
    }
}

export const createNewStudent = student => {
    return  dispatch => {
        axios.post('/api/students', student)
        .then(({data}) => dispatch(createStudent(data.student)))
        .catch(err => console.error('Failed to create student', err))
    }

}
export const updateExistingStudent = student => {
    return  dispatch => {
        axios.put(`/api/students/${student.id}`, student)
        .then(({data}) => dispatch(updateStudent(data.student)))
        .catch(err => console.error('Failed to update student', err))
    }

}
export const deleteExistingStudent = student => {
    return dispatch => {
        axios.delete(`/api/students/${student.id}`, student)
        .then(({data}) => dispatch(deleteStudent(data.student)))
        .catch(err => console.error('Failed to delete student', err))
    }
}
//REDUCER
export default function studentsReducer(students = [], action) {
    switch (action.type){
        case GET_STUDENTS:
            return action.students

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