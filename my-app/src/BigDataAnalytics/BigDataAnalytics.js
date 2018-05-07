import React, {Component} from "react";
import './BigDataAnalytics.css';
import bigData from './big-data-analytics.svg';
import { Link } from 'react-router-dom';

class BigDataAnalytics extends Component {
    render() {
        return (
            <Link to="/talks/big-data">
                <section className="big-data">
                    <img src={bigData} alt="big-data-analytics" className="big-data-movie"/>
                </section>
            </Link>
        );
    }
}

export default BigDataAnalytics;