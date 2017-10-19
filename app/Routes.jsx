import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import { connect } from 'react-redux';
import Root from './components/Root';
import Home from './components/Home';
import Campuses from './components/campuses/Campuses';
import Students from './components/students/Students';
import SingleCampus from './components/campuses/SingleCampus';
import SingleStudent from './components/students/SingleStudent';
import {fetchCampuses} from './reducers/campuses';
import {fetchStudents} from './reducers/students';


class Routes extends Component {

    componentDidMount(){
        this.props.fectchData()
    }

    render() {
        return (
            <Router history={history}>
                <Root>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/campuses" component={Campuses} />
                        <Route path="/campuses/:campusId" component={SingleCampus} />
                        <Route exact path="/students" component={Students} />
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
        dispatch(fetchStudents())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
