import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import AuthorList from './AuthorList';

class AuthorPage extends React.Component {

    constructor(props) {
        super(props);
    }

    redirectToAddAuthorPage() {
        browserHistory.push("/author");
    }

    render() {
        const {authors} = this.props;
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={authors}/>
                <button className="btn btn-primary" onClick={this.redirectToAddAuthorPage}>
                    Add Author
                </button>
            </div>
        );
    }

}

AuthorPage.propTypes = {
    authors: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        authors: state.authors
    };
}
//
// function mapDispatchToProps(dispatch) {
//     return {
//         action: bindActionCreators(actions, dispatch)
//     };
// }

export default connect(mapStateToProps)(AuthorPage);