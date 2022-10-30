import React, {Component} from 'react';
import './News.less';
import Banner from '../img/news/banner.png';
import News1 from '../img/news/news1.png';
import News2 from '../img/news/news2.png';
import News3 from '../img/news/news3.png';
import News4 from '../img/news/news4.png';
import Arrow from '../img/news/arrow.png';

class News extends Component {
    render() {
        return (
            <div className="news">
                <div className="header-mask"/>
                <img src={Banner} alt="" className="banner"/>
                <h3 className="title">NEWS AND INFORMATION</h3>
                <h3 className="subtitle">新闻咨询</h3>
                <div className="images">
                    <div className="row">
                        <div className="img"><img src={News1} alt=""/></div>
                        <div className="img"><img src={News2} alt=""/></div>
                    </div>
                    <div className="row">
                        <div className="img"><img src={News3} alt=""/></div>
                        <div className="img"><img src={News4} alt=""/></div>
                    </div>
                    <div className="mask">
                        <img src={Arrow} alt=""/>
                        <div className="text">MORE</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;