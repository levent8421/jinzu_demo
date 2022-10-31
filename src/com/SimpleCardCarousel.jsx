import React, {Component} from 'react';
import './SimpleCardCarousel.less';
import Image1 from '../img/home/area-1.png';
import Image2 from '../img/home/area-2.png';
import Image3 from '../img/home/area-3.png';
import Image4 from '../img/home/area-4.png';
import Image5 from '../img/home/area-5.png';
import Image6 from '../img/home/area-6.png';
import Image7 from '../img/home/area-7.png';
import Icon1 from '../img/home/area-icon-1.png';
import Icon2 from '../img/home/area-icon-2.png';
import Icon3 from '../img/home/area-icon-3.png';
import Icon4 from '../img/home/area-icon-4.png';
import Icon5 from '../img/home/area-icon-5.png';
import Icon6 from '../img/home/area-icon-6.png';
import Icon7 from '../img/home/area-icon-7.png';

class SimpleCardCarousel extends Component {
    offset = 0;
    state = {
        items: [
            {id: 0, img: Image2, text: '装备制造领域', icon: Icon2, level: 3, mode: 'left'},
            {id: 1, img: Image3, text: '能源领域', icon: Icon3, level: 2, mode: 'left'},
            {id: 2, img: Image4, text: '教育文化领域', icon: Icon4, level: 1, mode: 'left'},
            {id: 3, img: Image1, text: '金融领域', icon: Icon1, level: 0, mode: 'none'},
            {id: 4, img: Image5, text: '医疗健康领域', icon: Icon5, level: 1, mode: 'right'},
            {id: 5, img: Image6, text: '城镇发展领域', icon: Icon6, level: 2, mode: 'right'},
            {id: 6, img: Image7, text: '三农领域', icon: Icon7, level: 3, mode: 'right'},
        ],
    };

    go(amount) {
        const {items} = this.state;
        this.offset += amount;
        if (amount > 0) {
            this.offset %= items.length;
        } else if (amount < 0) {
            if (this.offset < 0) {
                this.offset = items.length - 1;
            }
        }
        const ci = Math.floor(items.length / 2);
        for (let i = 0; i < items.length; i++) {
            const ri = (i + this.offset) % items.length;
            const item = items[ri];
            if (i === ci) {
                item.level = 0;
                item.mode = 'none';
                continue;
            }
            item.mode = i < ci ? 'left' : 'right';
            item.level = Math.abs(i - ci);
        }
        this.setState({items: items});
    }

    render() {
        const {items} = this.state;
        return (
            <div className="simple-card-carousel">
                <div className="arrow" onClick={() => this.go(-1)}/>
                <div className="inner">
                    {items.map(v => (<div className={`item item-level-${v.level} item-${v.mode}`} key={v.id}>
                        <div className="item-inner">
                            <img src={v.img} alt="" className="bg"/>
                            <div className="mask">
                                <img src={v.icon} alt="" className="icon"/>
                                <p>{v.text}</p>
                            </div>
                        </div>
                    </div>))}
                </div>
                <div className="arrow" onClick={() => this.go(1)}/>
            </div>
        );
    }
}

export default SimpleCardCarousel;