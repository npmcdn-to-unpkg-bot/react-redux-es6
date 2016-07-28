import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthorForm from './AuthorForm';
import * as actions from '../../actions/authorActions';
import NotFoundPage from '../NotFoundPage';

class ManageAuthorPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author: Object.assign({}, this.props.author)
        };
        this.updateAuthorState = this.updateAuthorState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.author);
        if(this.props.author.id != nextProps.author.id) {
            this.setState({author: Object.assign({}, nextProps.author)});
        }
    }

    updateAuthorState(event) {
        let author = Object.assign({}, this.state.author);
        author[event.target.name] = event.target.value;
        return this.setState({author: author});
    }

    render() {
        // console.log(this.props.display404);
        if (this.props.display404) {
            return <NotFoundPage/>
        }
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm onChange={this.updateAuthorState}
                            author={this.state.author}/>
            </div>
        );
    }
}

function getAuthorById(authors, authorId) {
    const author = authors.filter(author => author.id === authorId)[0];
    return authors.length ? author : null;
}

ManageAuthorPage.propTypes = {
    author: PropTypes.object.isRequired,
    action: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    const authorId = ownProps.params.id; // from the path `course/:id`
    let author = {id: '', firstName: '', lastName: ''};
    let display404 = false;
    // important: at first we haven't finished fetching data => set author to empty object
    if(authorId && state.authors.length > 0) {
        author = getAuthorById(state.authors, authorId);
        if (!author) {
            display404 = true;
        }
    }
    console.log(display404);

    return {
        author: author,
        display404: display404
    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);