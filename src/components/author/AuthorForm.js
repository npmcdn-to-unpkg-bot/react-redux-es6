import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = ({author, onChange}) => {
    return (
        <form>
            <TextInput name="firstName" label="First Name" value={author.firstName} onChange={onChange}/>
            <TextInput name="lastName" label="Last Name" value={author.lastName} onChange={onChange}/>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
};

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
};

export default AuthorForm;