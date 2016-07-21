import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
          <div className="jumbotron">
            <h1>Test</h1>
            <p>React</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
          </div>  
        );
    }
}

export default HomePage;