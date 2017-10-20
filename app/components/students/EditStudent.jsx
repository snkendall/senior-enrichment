import React, { Component } from 'react';
import { connect } from  'react-redux';
import { updateExistingStudent } from '../../reducers/students';

class EditStudent extends Component {
    constructor(props){
        super(props);
        this.state = this.props.student
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event){
        this.setState({ name: event.target.value })
    }
    handleImageChange(event){
        this.setState({ image: event.target.value })
    }
    handleEmailChange(event){
        this.setState({ email: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        const {name, image, email, id} = this.state;
        const studentUpdate = {id, name, image, email};
        if (name) studentUpdate.name = name;
        if (image) studentUpdate.image = image;
        if (email) studentUpdate.email = email;
       this.props.updateExistingStudent(studentUpdate)
    }

    render(){
        return (
            <div>
                <h3>Edit this Student: </h3>
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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

const mapStateToProps = ({ campuses, students }) => ({ campuses, students });
const mapDispatchToProps = { updateExistingStudent };

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
