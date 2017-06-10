import React, { Component } from 'react';
import Post from '../Post/Post.js'

class Posts extends Component {
    render() {
        return (
            <section>
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