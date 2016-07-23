import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        //alert(`Saving ${this.state.course.title}`);
        this.props.dispatch(courseActions.createCourse(this.state.course));
        //this.props.createCourse(this.state.course);
        // this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={(e) => this.onTitleChange(e)}
                    value={this.state.course.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={(e) => this.onClickSave(e)} />
            </div>
        );
    }
}

CoursePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
    //createCourse: PropTypes.func.isRequired,
    // actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps)(CoursePage);