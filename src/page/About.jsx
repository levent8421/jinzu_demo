import React, {Component} from 'react';
import './About.less';
import Banner from '../img/about/banner.png';
import TextBoxBg from '../img/about/text-box.png';
import VideoBg from '../img/about/video-bg.png';
import Video from '../img/home/video.mp4';
import CourseImage from '../img/about/his.png';
import StruBg from '../img/about/stru-bg.png';
import Stru from '../img/about/stru.png';
import Stru1 from '../img/about/stru1.png';
import Stru2 from '../img/about/stru2.png';
import Stru3 from '../img/about/stru3.png';
import Stru4 from '../img/about/stru4.png';
import Stru1Detail from '../img/about/stru1-detail.png';
import Culture1 from '../img/about/culture-1.png';
import Culture2 from '../img/about/culture-2.png';

class About extends Component {
    state = {
        modalVisible: false,
    };

    render() {
        const {modalVisible} = this.state;
        return (
            <div className="about">
                <div className="header-mask"/>
                <img src={Banner} alt="" className="banner"/>
                <div className="profile">
                    <h3 className="title">COMPANY PROFILE</h3>
                    <h3 className="subtitle">公司简介</h3>
                    <div className="text-box" style={{backgroundImage: `url(${TextBoxBg})`}}>
                        <p>江南金融租赁股份有限公司是经银监会批准，由江南农村商业银行、常州产业投资集团有限公司等7家法人单位共同发起设立的专业从事融资租赁业务的非银行金融机构。公司成立于2015年6月，坐落于美丽富饶的江苏省常州市，在国家实施“一带一路”国家战略的东风下应运而生。现有股东7名，分别为江苏江南农村商业银行股份有限公司、常州产业投资集团有限公司、新誉集团有限公司、常州华威模具有限公司、常州市武进长虹结晶器有限公司、金土地建设集团有限公司、常州投资集团有限公司。</p>
                        <p>公司设有董事会、监事会。其中，董事会下设风险管理和关联交易委员会、审计委员会、战略投资委员会、薪酬提名委员会，总裁室下设创新委员会、立项委员会、项目审核委员会、信息科技委员会、责任认定委员会和采购委员会。</p>
                        <p>公司以现金流稳定的行业为主要业务领域，依托股东实力和区域优势，融合长三角地区的客户、技术、金融、网络、信息、市场等资源，构建轨道交通、智能电网、移动通讯设施、物联网设施、医疗设备、环保、小型农业工程机械的总装制造、销售运营、客户服务的整个产业链金融租赁服务模式。</p>
                        <div className="segs">
                            <div className="item">
                                <h3 className="title">2015年6月</h3>
                                <p className="text">成立于</p>
                            </div>
                            <div className="item item-border">
                                <h3 className="title">7名</h3>
                                <p className="text">现有股东</p>
                            </div>
                            <div className="item">
                                <h3 className="title">现金流稳定的行业</h3>
                                <p className="text">业务领域</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video">
                    <img src={VideoBg} alt="" className="bg"/>
                    <video src={Video} controls/>
                </div>
                <div className="course">
                    <h3 className="title">THE DEVELOPMENT COURSE</h3>
                    <h3 className="subtitle">发展历程</h3>
                    <img src={CourseImage} alt=""/>
                </div>
                <div className="stru" style={{backgroundImage: `url(${StruBg})`}}>
                    <h3 className="title">ORGANIZATIONAL STRUCTURE</h3>
                    <h3 className="subtitle">组织架构</h3>
                    <img src={Stru} alt=""/>
                </div>
                <div className="stru2">
                    <h3 className="title">SHAREHOLDER STRUCTURE</h3>
                    <h3 className="subtitle">股东结构</h3>
                    <div className="row">
                        <img src={Stru1} alt="" onClick={() => this.setState({modalVisible: true})}/>
                        <img src={Stru2} alt=""/>
                    </div>
                    <div className="row">
                        <img src={Stru3} alt=""/>
                        <img src={Stru4} alt=""/>
                    </div>
                </div>
                <div className="culture">
                    <h3 className="title">THE ENTERPRISE CULTURE</h3>
                    <h3 className="subtitle">企业文化</h3>
                    <div className="row-right">
                        <img src={Culture1} alt=""/>
                    </div>
                    <div className="row-left">
                        <img src={Culture2} alt=""/>
                    </div>
                </div>
                <div className="top-modal" style={{display: modalVisible ? 'flex' : 'none'}}
                     onClick={() => this.setState({modalVisible: false})}>
                    <img src={Stru1Detail} alt=""/>
                </div>
            </div>
        );
    }
}

export default About;