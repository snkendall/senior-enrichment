import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Campuses from './components/campuses/Campuses';
import Students from './components/students/Students';
import SingleCampus from './components/campuses/SingleCampus';
import SingleStudent from './components//SingleStudent';
import {fetchCampuses} from './reducers/campuses'


// Views: as a user I...
class Routes extends Component {

    componentDidMount(){
        this.props.fectchData()
    }

    render() {
        return (
            <Router >
                <Navbar />
                <Root>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/campuses" component={Campuses} />
                        <Route path="/campuses/:campusId" component={SingleCampus} />
                        <Route exact path="/students" componenet={Students} />
                        <Route path="/students/:studentId" component={SingleStudent} />
                    </Switch>
                </Root>
            </Router>
        )
    }
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
    fectchData: () => {
        dispatch(fetchCampuses())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
