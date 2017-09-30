import React, {Component} from 'react';
import './404.css';
import butters from './butters.png';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <section className="error404">
                <img alt="900x500" height={500} src={butters}/>
                <div className="error-msg">
                    <p> 404!? Oh, Geez!</p>
                    <p> Cheese Louis!</p>
                    <p> This is gonna get me grounded for sure. </p>
                    <p> No matches for <code>{window.location.pathname}</code></p>
                    <p> Head back <Link to="/" className="error404-to-home">Home</Link>, fella </p>
                </div>
            </section>
        );
    }
}

export default PageNotFound;