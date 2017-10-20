import React, { Component } from 'react';
import { connect } from  'react-redux';
import { updateExistingCampus } from '../../reducers/campuses';

class EditCampus extends Component {
    constructor(props){
        super(props);
        this.state = this.props.campus
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event){
        this.setState({ name: event.target.value })
    }
    handleImageChange(event){
        this.setState({ image: event.target.value })
    }
    handleSubmit(event){
        event.preventDefault();
        const {name, image, id} = this.state;
        const campusUpdate = {name, image, id}
        if (name) campusUpdate.name = name;
        if (image) campusUpdate.image = image;
        console.log(updateExistingCampus)
       this.props.updateExistingCampus(campusUpdate)
    }

    render(){
        return (
            <div>
                <h3>Edit this Campus: </h3>
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

const mapStateToProps = ({ campuses, students }) => ({ campuses, students });
const mapDispatchToProps = { updateExistingCampus };

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
