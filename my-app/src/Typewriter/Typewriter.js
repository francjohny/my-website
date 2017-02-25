import React, {Component} from 'react';
import './Typewriter.css';
import Link from 'react-router/Link';

class Main extends Component {
    componentWillMount() {
        var TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(() => {
                this.tick();
            }, delta);
        };

        window.onload = function () {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
        };
    }

    render() {
        return (
            <section className="typewriter">
                <span className="dash"> - </span>
                <Link to="/" className="typewrite"
                   data-period="2000"
                   data-type='["Co-Founder and CTO at Vyfrakens.", 
                                "Genius Software Wizard.", 
                                "Creator of opportunities.", 
                                "Head of global trends and insights.",
                                "Connoisseur."
                    ]'>
                </Link>
            </section>
        );
    }
}

export default Main;