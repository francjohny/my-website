import React, { Component } from 'react';
import Post from '../Post/Post.js'
import './Posts.css';

class Posts extends Component {
    render() {
        return (
            <section className="posts">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            	<Post/>
            </section>
        );
    }
}

export default Posts;