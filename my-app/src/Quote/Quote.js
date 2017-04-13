import React, { Component } from 'react';
import './Quote.css';

class Books extends Component {
    render() {
        return (
            <section className="books">
	            <blockquote> 
		            <p> All our dreams can come true, if we have the courage to pursue them.
                        <strong className="quotee"> - Walt Disney</strong>
	            	</p>
				</blockquote>
            </section>
        );
    }
}

export default Books;