import React from 'react';
import Typist from 'react-typist';
import ReactDOM from 'react-dom';
import 'react-typist/dist/Typist.css';

const styles = {
    newstitle: {
        fontFamily: 'Courier New',
        color: '#000',
        fontSize: '16px',
        cursor: 'pointer',
    }
}

export default class TextCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            randomIndex: 0
        }
    }

    componentDidMount() {
        this.rollUpdate();
    }

    componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout);
    }

    rollingUpdate() {
        const randomIndex = Math.floor(Math.random() * this.props.news.length);
        const selectedNews = this.props.news[randomIndex];
        const domNode = this.refs.carousel;

        ReactDOM.unmountComponentAtNode(domNode);
        ReactDOM.render(
            <Typist 
                avgTypingDelay={40}
                onTypingDone={this.rollUpdate.bind(this)}>
                {selectedNews.author.toUpperCase() + ": " + selectedNews.title}
            </Typist>,
            domNode
        );
        this.setState({randomIndex: randomIndex});
    }

    rollUpdate() {
        this.timeout = setTimeout(this.rollingUpdate.bind(this), this.props.interval);
    }

    handleClick(e) {
        const url = this.props.news[this.state.randomIndex].url;
        window && window.open(url, '_blank').focus();
    }

    render() {
        return <span onClick={this.handleClick.bind(this)} style={styles.newstitle} className={this.props.className} ref={"carousel"} />;
    }
}
