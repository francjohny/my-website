import React, { Component } from 'react';
import Posts from '../Posts/Posts.js'
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <section>
            	<Posts/>
            </section>
        );
    }
}

export default Blog;