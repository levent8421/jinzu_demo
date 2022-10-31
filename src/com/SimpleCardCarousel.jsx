import React, {Component} from 'react';
import './SimpleCardCarousel.less';
import Image1 from '../img/home/area-1.png';
import Icon1 from '../img/home/area-icon-1.png';

class SimpleCardCarousel extends Component {
    offset = 0;
    state = {
        items: [
            {id: 0, img: Image1, text: 'Test1', icon: Icon1, level: 3, mode: 'left'},
            {id: 1, img: Image1, text: 'Test2', icon: Icon1, level: 2, mode: 'left'},
            {id: 2, img: Image1, text: 'Test3', icon: Icon1, level: 1, mode: 'left'},
            {id: 3, img: Image1, text: 'Test4', icon: Icon1, level: 0, mode: 'none'},
            {id: 4, img: Image1, text: 'Test5', icon: Icon1, level: 1, mode: 'right'},
            {id: 5, img: Image1, text: 'Test6', icon: Icon1, level: 2, mode: 'right'},
            {id: 6, img: Image1, text: 'Test7', icon: Icon1, level: 3, mode: 'right'},
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