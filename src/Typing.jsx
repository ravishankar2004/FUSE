import React, { Component } from 'react';

class TxtType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toRotate: props.toRotate,
            loopNum: 0,
            period: parseInt(props.period, 10) || 2000,
            txt: '',
            isDeleting: false
        };
    }

    componentDidMount() {
        this.tick();
    }

    tick = () => {
        const { loopNum, toRotate, isDeleting, txt } = this.state;
        const i = loopNum % toRotate.length;
        const fullTxt = toRotate[i];

        if (isDeleting) {
            this.setState({ txt: fullTxt.substring(0, txt.length - 1) });
        } else {
            this.setState({ txt: fullTxt.substring(0, txt.length + 1) });
        }

        this.el.innerHTML = `<span class="wrap">${this.state.txt}</span>`;

        let delta = 200 - Math.random() * 100;
        if (isDeleting) { delta /= 2; }
        if (!isDeleting && txt === fullTxt) {
            delta = this.state.period;
            this.setState({ isDeleting: true });
        } else if (isDeleting && txt === '') {
            this.setState(prevState => ({
                isDeleting: false,
                loopNum: prevState.loopNum + 1
            }));
            delta = 500;
        }

        setTimeout(this.tick, delta);
    }

    render() {
        return (
            <span className="typewrite" ref={(el) => { this.el = el; }}></span>
        );
    }
}

class App extends Component {
    componentDidMount() {
        const elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i < elements.length; i++) {
            const toRotate = JSON.parse(elements[i].getAttribute('data-type'));
            const period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType({ toRotate, period });
            }
        }

        const css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    }

    render() {
        return (
            <div className="App">
                
            </div>
        );
    }
}

export default App;
