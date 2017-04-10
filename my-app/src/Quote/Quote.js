import React, { Component } from 'react';
import './Quote.css';
import disney from '../../public/disney.png';

class Books extends Component {
    render() {
        return (
            <section className="books">
	            <blockquote> 
		            <p> All our dreams can come true, if we have the courage to pursue them.
                        <strong className="quotee"> <img src={disney} className="disney" alt="disney"/> </strong>
	            	</p>
				</blockquote>
            </section>
        );
    }
}

export default Books;