import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewCampus } from '../../reducers/campuses';

class CampusForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event){
        this.setState({name: event.target.value})
    }
    handleImageChange(event){
        this.setState({image: event.target.value})
    }
    handleSubmit(event){
        event.preventDefault();
        const campus = this.state;
        this.props.createNewCampus(campus);
        this.setState({name: '', image: ''})
        //history.push('/campuses');
    }

    render(){

        return (
            <div>
                <h3>Add a Campus!</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
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

const mapStateToProps = null;
const mapDispatchToProps = {createNewCampus}

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm);
