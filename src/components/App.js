import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading}
                        authorCount={this.props.authorCount}
                        courseCount={this.props.courseCount}/>
                {this.props.children}
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

// Using loading from the store => have to dispatch to update loading
function mapStateToProps(state) {
    return {
        authorCount: state.authors.length,
        courseCount: state.courses.length,
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);

