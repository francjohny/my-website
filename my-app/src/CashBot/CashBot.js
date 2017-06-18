import React, {Component} from "react";
import bot from './bot.png';
import './CashBot.css';

class CashBot extends Component {
    render() {
        return (
            <section className="iphone-ad">
                <img alt="900x500" className="iphone" src={bot}/>
                <section className="caption">
                    Introducing <br/>
                    <strong>Cash Bot</strong>
                    <p>The first bot to send money.</p>
                </section>
            </section>
        );
    }
}

export default CashBot;