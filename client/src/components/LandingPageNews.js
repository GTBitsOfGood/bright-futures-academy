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
                <table>
                    <tr>
                        <NewsTile header="Step One" caption="What a lovely pattern we got here in this image which is encapsulted in a figure element. Oh dear, look how long this caption is!"/>
                    </tr>
                    <tr>
                        <NewsTile header="Step Two" caption="What a lovely pattern we got here in this image which is encapsulted in a figure element. Oh dear, look how long this caption is!"/>
                    </tr>  
                    <tr>
                        <NewsTile header="Step Three" caption="What a lovely pattern we got here in this image which is encapsulted in a figure element. Oh dear, look how long this caption is!"/>
                    </tr>                
                </table>
            </div>
        );
    }

}

export default LandingPageNews;
