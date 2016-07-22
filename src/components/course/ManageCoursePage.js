import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, content) {
        console.log("ManageCourse constructor");
        super(props, content);

        this.state = {
            course: Object.assign({}, this.props.course),
            error: {}
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }


    // // Hoi Son tai sao can setState lai
    componentWillReceiveProps(nextProps) {
        if(this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        // this.context.router.push('/courses');
        browserHistory.push('courses');
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}/>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    return course.length ? course[0]: null;
}

// ownProps?
function mapStateToProps(state, ownProps) {
    console.log(ownProps);
    const courseId = ownProps.params.id; // from the path `course/:id`
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    if(courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
       return {
           value: author.id,
           text: author.firstName + ' ' + author.lastName
       };
    });

    // Lam sao de console log state trong tung method
    console.log(ManageCoursePage.state);
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //manually
        // createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);