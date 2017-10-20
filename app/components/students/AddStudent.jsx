import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewStudent } from '../../reducers/students';
//import history from '../../history';

class StudentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            image: ''
            // ,
            // campusId: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        //this.handleCampusChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event){
        this.setState({name: event.target.value})
    }
    handleEmailChange(event){
        this.setState({email: event.target.value})
    }
    handleImageChange(event){
        this.setState({image: event.target.value})
    }
    // handleCampusChange(event){
    //     this.setState({campusId: event.target.value})
    // }
    handleSubmit(event){
        event.preventDefault();
        const student = this.state;
        this.props.createNewStudent(student);
        this.setState({name: '', email: '', image: ''})
        //history.push('/students');
    }

    render(){
        const {campuses} = this.props;
        return (
            <div>
                <h3>Add a Student: </h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Image:
                        <input type="text" value={this.state.image} onChange={this.handleImageChange} />
                    </label>
                    {/* <label>
                        Campus:
                        <select value={this.state.campusId} onChange={this.handleCampusChange}>
                            {campuses.map(campus => (
                                <option key={campus.id} value={campus.id}>{campus.name}</option>
                            ))}
                        </select>
                    </label> */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({campuses}) => ({campuses});
const mapDispatchToProps = {createNewStudent}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
