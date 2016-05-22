import React from 'react';
import TextCarousel from './TextCarousel';
import fakenews from './fakenews';
import axios from 'axios';

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        background: '#fff',
        padding: 15,
        paddingTop: 5,
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [
                {
                    title: "Loading..."
                }
            ]
        }
    }

    componentDidMount() {
        axios.get(`http://hn.algolia.com/api/v1/search?query=`)
            .then(response => {
                this.setState({news: response.data.hits});
            })
            .catch(err => {
                console.log('ERROR', err)
            });
    }

    render() {
        const news = this.state.news
            .filter(item => item.title && item.author && item.url);

        return (
            <div style={styles.container}>
                <TextCarousel news={news} interval={5000} />
            </div>
        );
    }
}
