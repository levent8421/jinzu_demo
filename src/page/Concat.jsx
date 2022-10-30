import React, {Component} from 'react';
import './Concat.less';
import Concat1 from '../img/concat/concat-1.png';
import Concat2 from '../img/concat/concat-2.png';
import Concat3 from '../img/concat/concat-3.png';
import Banner from '../img/concat/banner.png';

class Concat extends Component {
    render() {
        return (
            <div className="concat">
                <div className="header-mask"/>
                <img src={Banner} alt="" className="banner"/>
                <h3 className="title">CONCAT US</h3>
                <h3 className="subtitle">联系我们</h3>
                <img src={Concat1} alt="" className="content1-img"/>
                <img src={Concat2} alt="" className="content2-img"/>
                <div className="concat-info">
                    <div className="item">
                        <p className="text">
                            <span className="title">电话：</span>
                            <span className="value">0519-81282266</span>
                        </p>
                        <div className="line"/>
                    </div>
                    <div className="item">
                        <p className="text">
                            <span className="title">传真：</span>
                            <span className="value">0519-81282267</span>
                        </p>
                        <div className="line"/>
                    </div>
                    <div className="item">
                        <p className="text">
                            <span className="title">邮编：</span>
                            <span className="value">213000</span>
                        </p>
                        <div className="line"/>
                    </div>
                    <div className="item">
                        <p className="text">
                            <span className="title">地址：</span>
                            <span className="value">江苏省常州市延陵中路668号</span>
                        </p>
                        <div className="line"/>
                    </div>
                </div>
                <img src={Concat3} alt="" className="content3-img"/>
                <div className="form-wrapper">
                    <div className="row">
                        <div className="input-group">
                            <label htmlFor="form-name">姓名 <span>*</span></label>
                            <input type="text" id="form-name" placeholder="请输入姓名"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="form-phone">手机号 <span>*</span></label>
                            <input type="text" id="form-pgone" placeholder="请输入手机号"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="form-email">邮箱 <span>*</span></label>
                            <input type="text" id="form-email" placeholder="请输入邮箱"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-group">
                            <label htmlFor="form-remark">备注 <span>*</span></label>
                            <textarea placeholder="请输入您的备注"/>
                        </div>
                    </div>
                    <div className="row">
                        <button>马上提交</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Concat;