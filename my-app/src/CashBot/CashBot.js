import React, {Component} from "react";
import bot from './bot.png';
import './CashBot.css';

class CashBot extends Component {
    render() {
        return (
            <section className="iphone-ad">
                <img alt="cash bot" className="iphone" src={bot}/>
                <section className="caption">
                    <div>
                        Introducing <br/>
                        <strong>Cash Bot</strong>
                    </div>
                    <p>The <span className="strike-through">first</span> bot to send money.</p>
                </section>
            </section>
        );
    }
}

export default CashBot;