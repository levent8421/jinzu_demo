import React, {Component} from 'react';
import './Area.less';
import Banner from '../img/area/banner.png';
import ArrowLeft from '../img/area/arrow-left.png';
import ArrowRight from '../img/area/arrow-right.png';
import Area1 from '../img/area/area-1.png';
import Area2 from '../img/area/area-2.png';
import Area3 from '../img/area/area-3.png';
import Area4 from '../img/area/area-4.png';
import Area5 from '../img/area/area-5.png';
import Area6 from '../img/area/area-6.png';
import Area7 from '../img/area/area-7.png';
import AreaText1 from '../img/area/area-text-1.png';
import AreaText2 from '../img/area/area-text-2.png';
import AreaText3 from '../img/area/area-text-3.png';
import AreaText4 from '../img/area/area-text-4.png';

class Area extends Component {
    state = {
        carousel: [
            {id: 1, img: Area1, text: '金融领域', active: false, show: false},
            {id: 2, img: Area2, text: '装备制造领域 ', active: false, show: true},
            {id: 3, img: Area3, text: '能源领域', active: false, show: true},
            {id: 4, img: Area4, text: '教育文化领域', active: true, show: true},
            {id: 5, img: Area5, text: '医疗健康领域', active: false, show: true},
            {id: 6, img: Area6, text: '城镇发展领域', active: false, show: true},
            {id: 7, img: Area7, text: '三农领域', active: false, show: false},
        ]
    };

    move(amount) {
        const {carousel} = this.state;
        if (amount > 0) {
            carousel.unshift(carousel.pop());
        } else {
            carousel.push(carousel.shift());
        }
        for (let i = 0; i < carousel.length; i++) {
            const item = carousel[i];
            if (i === 0) {
                item.show = false;
                item.active = false;
            } else if (i === (carousel.length - 1)) {
                item.show = false;
                item.active = false;
            } else if (i === 3) {
                item.show = true;
                item.active = true;
            } else {
                item.show = true;
                item.active = false;
            }
        }
        this.setState({carousel});
    }

    render() {
        const {carousel} = this.state;
        return (
            <div className="area">
                <div className="header-mask"/>
                <img src={Banner} alt="" className="banner"/>
                <h3 className="title">BUSINESS AREAS</h3>
                <h3 className="subtitle">业务领域</h3>
                <div className="carousel">
                    <div className="arrow arrow-left" onClick={() => this.move(-1)}><img src={ArrowLeft} alt=""/></div>
                    <div className="imgs">
                        {
                            carousel.map(v => v.show ? (
                                <div key={v.id} className={`item ${v.active ? 'active' : ''}`}>
                                    <div className="img"><img src={v.img} alt=""/></div>
                                    <p className="text">{v.text}</p>
                                </div>) : null)
                        }
                    </div>
                    <div className="arrow arrow-right" onClick={() => this.move(1)}><img src={ArrowRight} alt=""/></div>
                </div>
                <img src={AreaText1} alt="" className="area-sec"/>
                <img src={AreaText2} alt="" className="area-sec"/>
                <img src={AreaText3} alt="" className="area-sec"/>
                <img src={AreaText4} alt="" className="area-sec"/>
                <div className="footer-mask"/>
            </div>
        );
    }
}

export default Area;