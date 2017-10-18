// can create a campus
// can edit a campus's info, including adding/removing a student to/from that campus
// can delete a campus
import axios from './axios';

//ACTION-TYPE
const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const CHANGE_STUDENT = 'CHANGE_STUDENT';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
//ACTION-CREATORS 
function getCampuses(campuses){
    return {
        type: GET_CAMPUSES,
        campuses: campuses
    }
}

 function createCampus(campus) {
     return {
         type: CREATE_CAMPUS,
         campus: campus
     }
 }
 function updatecampus(campus) {
    return {
        type: UPDATE_CAMPUS,
        campus: campus
    }
}
function changeStudent(campus) {
    return {
        type: CHANGE_STUDENT,
        campus: campus
    }
}
function deleteCampus(campus) {
    return {
        type: DELETE_CAMPUS,
        campus: campus
    }
}
//THUNK-CREATORS

export const fetchCampuses = () => {
    return dispatch => {
        axios.get('/')
        .then(campuses => dispatch(getCampuses(campuses)))
        .catch(err => console.error('Failed to fetch campused', err))
    }
}

export const createNewCampus = campus => {
    return  dispatch => {
        axios.post('/campuses', campus)
        .then(campus => dispatch(createCampus(campus)))
        .catch(err => console.error('Failed to create campus', err))
    }

}
export const updateExistingCampus = campus => {
    return  dispatch => {
        axios.put(`/campuses/${campus.id}`, campus)
        .then(campus => dispatch(updateCampus(campus)))
        .catch(err => console.error('Failed to update campus', err))
    }

}
export const deleteExistingCampus = campus => {
    return dispatch => {
        axios.delete(`/campuses/${campus.id}`, campus)
        .then(campus => dispatch(deleteCampus(campus)))
        .catch(err => console.error('Failed to delete campus', err))
    }
}
//REDUCER

export default function campusesReducer(campuses = [], action){
    switch (action.type){
        case GET_CAMPUSES:
            return action.campuses

        case CREATE_CAMPUS:
            return [...campuses, action.campus];
        
        case UPDATE_CAMPUS:
            return campuses.map(campus =>(
                action.campus.id === campus.id ? action.campus : campus
            ))

        case DELETE_CAMPUS:
            return campuses.filter(campus => 
                campus.id !== action.campus.id
            )

        default:
            return campuses;
    }
}
