import React, { Component } from 'react';
import './Books.css';

class Books extends Component {
    render() {
        return (
            <section className="books">
	            <blockquote> 
		            <p> It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.
		            	<strong className="quotee"> - Steve Jobs </strong>
	            	</p>
				</blockquote>
            </section>
        );
    }
}

export default Books;