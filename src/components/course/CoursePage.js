import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: "" }
        };
    }

    // onTitleChange(event) {
    //     // const course = this.state.course;
    //     // course.title = event.target.value; // <------
    //     // { state: {course}} course.title
    //     this.setState({course: {
    //         title: event.target.value
    //     }});
    // }
    //
    // onClickSave() {
    //     // this.props.dispatch(courseActions.createCourse(this.state.course));
    //     this.props.actions.createCourse(this.state.course);
    //     // this.props.actions.createCourse(this.state.course);
    // }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        // Destructuring
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={() => this.redirectToAddCoursePage()}/>
            </div>
        );
    }
}

CoursePage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    // createCourse: PropTypes.func.isRequired
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //manually
        // createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);