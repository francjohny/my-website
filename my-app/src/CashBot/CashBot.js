import React, {Component} from "react";
import bot from './bot.png';
import './CashBot.css';

class CashBot extends Component {
    render() {
        return (
            <section className="iphone-ad">
                <img alt="cash bot" className="iphone" src={bot}/>
                <section className="caption">
                    <h7>
                        Introducing <br/>
                        <strong>Cash Bot</strong>
                    </h7>
                    <p>The first bot to send money.</p>
                </section>
            </section>
        );
    }
}

export default CashBot;