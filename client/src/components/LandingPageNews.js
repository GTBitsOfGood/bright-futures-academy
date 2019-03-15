import React, { Component } from 'react';
import NewsTile from './NewsTile';
import './css/LandingPageNews.css';

class LandingPageNews extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        this.onClickMoreNews = this.onClickMoreNews.bind(this);
        this.getNews = this.getNews.bind(this);
    }

    /**
     * When the user clicks on the "more news" button this triggers.
     * TODO: 
     */
    onClickMoreNews() {
        alert("clicked more news");
    }

    /**
     * This is the function that fetches news from the backend
     */
    getNews() {
        return (
            <NewsTile />
        )
    }

    render() {
        return (
            <div className="backgroundNews">
                <span>
                    <p className="headingTextNews left">
                        Bright Future News
                    </p>
                    <div onClick={this.onClickMoreNews}>
                        <p className="moreNews right">
                            More News >
                        </p>
                    </div>
                </span>
                <span>
                    <NewsTile />
                    {this.getNews}
                </span>
            </div>
        );
    }

}

export default LandingPageNews;
