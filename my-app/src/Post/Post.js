import React, {Component} from 'react';
import './Post.css';

class Post extends Component {
    render() {
        return (
            <section className="post">
                <h3>
                    <a href="#">
                        Designing For, and As, a Color-Blind Person
                    </a>
                </h3>
                <span className="postInfo">
                    by
                    <a href="#">
                        Connor Turnbull
                    </a>
                    on Jul 22nd 2011 with 2 comments
                </span>
                <p>Color blindness is a mild disability through which the affected experience a decreased ability to
                    distinguish colors from others. This can be a real drawback for anyone in the design field since
                    color theory is an integral feature in successful design, and a lot of decisions are based on the
                    feeling and emotion derived from...
                </p>
                <a className="more" href="#">Read More</a>
                <a href="#">12 Likes 14 Comments Share</a>
            </section>
        );
    }
}

export default Post;