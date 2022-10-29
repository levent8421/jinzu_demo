import React, {Component} from 'react';
import './Footer.less';
import Logo from '../img/footer-logo.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="inner">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="concat">
                        <div className="sec">
                            <h4 className="title">投诉举报热线：</h4>
                            <p>0519-81282266 </p>
                        </div>
                        <div className="sec">
                            <h4 className="title">汽车租赁业务咨询热线：</h4>
                            <p>0519-81280000</p>
                        </div>
                    </div>
                    <div className="info">
                        <p>© 2022 江南金融租赁有限公司 版权所有</p>
                        <p>技术支持:江苏加减品牌管理咨询有限公司</p>
                        <p>备案号: 苏ICP备16004569号</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;