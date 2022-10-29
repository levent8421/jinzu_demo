import React, {Component} from 'react';
import './ImageCarousel.less';
import Image1 from '../img/home/area-1.png';
import Image2 from '../img/home/area-2.png';
import Icon1 from '../img/home/area-icon-1.png';
import Icon2 from '../img/home/area-icon-2.png';

const classList = ['item item-left', 'item item-right', 'item item-center'];

class ImageCarousel extends Component {
    state = {
        items: [
            {id: 0, img: Image1, className: 'item item-left', icon: Icon1, text: '金融领域'},
            {id: 1, img: Image2, className: 'item item-center', icon: Icon2, text: '装备制造领域'},
            {id: 2, img: Image1, className: 'item item-right', icon: Icon1, text: '三农领域'},
        ]
    };

    select(index) {
        const {items} = this.state;
        let classIdx = 0;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.id === index) {
                item.className = 'item item-center';
            } else {
                item.className = classList[classIdx++];
            }
        }
        this.setState({
            items: items
        });
    }

    render() {
        const {items} = this.state;
        return (
            <div className="image-carousel">
                {
                    items.map(i => (<div className={i.className} key={i.id} onClick={() => this.select(i.id)}>
                        <div className="inner">
                            <img src={i.img} alt="" className="bg"/>
                            <div className="mask">
                                <img className="icon" src={i.icon} alt=""/>
                                <p>{i.text}</p>
                            </div>
                        </div>
                    </div>))
                }
            </div>
        );
    }
}

export default ImageCarousel;