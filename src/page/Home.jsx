import React, {Component} from 'react';
import './Home.less'
import Carousel from '../com/Carousel';
import BannerIcon1 from '../img/home/icon-banner-1.png';
import BannerIcon2 from '../img/home/icon-banner-2.png';
import BannerIcon3 from '../img/home/icon-banner-3.png';
import BannerIcon4 from '../img/home/icon-banner-4.png';
import Video from '../img/home/video.mp4';
import CultureImg from '../img/home/img1.png';
import News1 from '../img/home/news-1.png';
import News2 from '../img/home/news-2.png';
import News3 from '../img/home/news-3.png';
import News4 from '../img/home/news-4.png';
import VideoPoster from '../img/home/carousel_0.jpg';
import SimpleCardCarousel from "../com/SimpleCardCarousel";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="carousel-wrapper">
                    <Carousel/>
                    <div className="carousel-mask">
                        <div className="banner-item">
                            <img src={BannerIcon1} alt=""/>
                            <div className="text">以“融资+融智”为基本服务理念</div>
                        </div>
                        <div className="banner-item">
                            <img src={BannerIcon2} alt=""/>
                            <div className="text">公司以现金流稳定的行业为主要业务领域</div>
                        </div>
                        <div className="banner-item">
                            <img src={BannerIcon3} alt=""/>
                            <div className="text">支持农业机械推广、 促进农业现代化。</div>
                        </div>
                        <div className="banner-item">
                            <img src={BannerIcon4} alt=""/>
                            <div className="text">建立具有专业化、特色化的 金融租赁经营模式</div>
                        </div>
                    </div>
                </div>
                <div className="introduction">
                    <div className="text">
                        <div className="text-box">
                            <h3 className="title">COMPANY PROFILE</h3>
                            <h3 className="subtitle">公司简介</h3>
                            <div className="del"/>
                            <div className="content">
                                <p>江南金融租赁股份有限公司是经银监会批准，由江南农村商业银行、常州产业投资集团有限公司等7家法人单位共同发起设立的专业从事融资租赁业务的非银行金融机构。公司成立于2015年6月，坐落于美丽富饶的江苏省常州市，在国家实施“一带一路”国家战略的东风下应运而生。现有股东7名，分别为江苏江南农村商业银行股份有限公司、常州产业投资集团有限公司、新誉集团有限公司、常州华威模具有限公司、常州市武进长虹结晶器有限公司、金土地建设集团有限公司、常州投资集团有限公司。</p>
                                <p>``````</p>
                            </div>
                            <button>MORE &nbsp;&nbsp;&nbsp;>></button>
                        </div>
                    </div>
                    <div className="video">
                        <video src={Video} controls poster={VideoPoster}/>
                    </div>
                </div>
                <div className="culture">
                    <div className="img">
                        <img src={CultureImg} alt=""/>
                    </div>
                    <div className="content">
                        <h3 className="title">THE ENTERPRISE CULTURE</h3>
                        <h3 className="subtitle">企业文化</h3>
                        <div className="del"/>
                        <div className="secs">
                            <div className="sec">
                                <div className="title">经营理念</div>
                                <div className="text">
                                    江南金融租赁股份有限公司是经银监会批准，由江南农村商业银行、常州产业投资集团有限公司等7家法人单位共同发起设立的专业从事融资租赁业务的非银行金融机构。······
                                </div>
                                <button>MORE &nbsp;&nbsp;>></button>
                            </div>
                            <div className="sec">
                                <div className="title">华彩缤纷</div>
                                <div className="text">
                                    江南金融租赁股份有限公司是经银监会批准，由江南农村商业银行、常州产业投资集团有限公司等7家法人单位共同发起设立的专业从事融资租赁业务的非银行金融机构。······
                                </div>
                                <button>MORE &nbsp;&nbsp;>></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news">
                    <div className="inner">
                        <h3 className="title">NEWS AND INFORMATION</h3>
                        <h3 className="subtitle">新闻资讯</h3>
                        <div className="row">
                            <div className="card">
                                <div className="content">
                                    <h4 className="title title-left">
                                        金融知识普及月之守好“钱袋子”
                                    </h4>
                                    <p className="text">
                                        案例：张爷爷为自己投保了一份3年期分红保险，第二年时张爷爷就退保了，经询问，张爷爷经朋友介绍投资了一项理财项目，投资时称每月可获得10%的收益分红收益太低······
                                        <a href="/" className="link">MORE</a>
                                    </p>
                                    <p className="date date-left">2022-10-10</p>
                                </div>
                                <div className="img">
                                    <img src={News1} alt=""/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src={News2} alt=""/>
                                </div>
                                <div className="content">
                                    <h4 className="title title-right">
                                        铸造员工精气神、新楼新貌新气象
                                    </h4>
                                    <p className="text">
                                        为了进一步提高公司品牌服务形象，提升员工自身综合素质，展现员工良好的精神风貌，7月5日，公司组织全体员工开展了商务礼仪培训活动。本次培训活动通过职场素养自查、职······
                                        <a href="/" className="link">MORE</a>
                                    </p>
                                    <p className="date date-right">2022-10-10</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card">
                                <div className="content">
                                    <h4 className="title title-left">
                                        江南金融租赁以金融之力赋能“青春留常”
                                    </h4>
                                    <p className="text">
                                        江南金融租赁股份有限公司首笔人才公寓——孟享家人才公寓融资租赁项目成功落地。该项目为人才公寓运营方提供融资，用于人才公寓项目的装修改造和配套设施的购置······
                                        <a href="/" className="link">MORE</a>
                                    </p>
                                    <p className="date date-left">2022-10-10</p>
                                </div>
                                <div className="img">
                                    <img src={News3} alt=""/>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src={News4} alt=""/>
                                </div>
                                <div className="content">
                                    <h4 className="title title-right">
                                        携手共筑“防疫墙” 齐心绘就“同心圆”
                                    </h4>
                                    <p className="text">
                                        守望相助，共克疫情。面对新型冠状病毒感染的肺炎疫情，江南金租积极响应，迅速行动，充分发挥基层党组织战斗堡垒作用和党员先锋模范作用，积极支持防疫一线做好疫情防控工······
                                        <a href="/" className="link">MORE</a>
                                    </p>
                                    <p className="date date-right">2022-10-10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button>MORE &nbsp;&nbsp; >></button>
                </div>
                <div className="area">
                    <h3 className="title">BUSINESS AREA</h3>
                    <h3 className="subtitle">业务领域</h3>
                    <SimpleCardCarousel items={[1, 2, 3, 4, 5]} active={0}/>
                </div>
            </div>
        );
    }
}

export default Home;