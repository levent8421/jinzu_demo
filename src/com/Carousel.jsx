import React, {Component} from 'react';
import './Carousel.less';
import Carousel0Img from '../img/home/carousel_0.png';
import Carousel1Img from '../img/home/carousel_1.png';
import Carousel2Img from '../img/home/carousel_2.png';
import Carousel3Img from '../img/home/carousel_3.png';
import Carousel4Img from '../img/home/carousel_4.png';
import ArrawLeft from '../img/home/arraw-left.png';
import ArrawRight from '../img/home/arraw-right.png';

class Carousel extends Component {
    state = {
        index: 0,
    };
    onLeftClick = () => {
        let {index} = this.state;
        index--;
        if (index < 0) {
            index = 4;
        }
        this.setState({
            index: index
        });
    };
    onRightClick = () => {
        let {index} = this.state;
        index++;
        index %= 5;
        this.setState({
            index: index
        });
    };

    render() {
        const {index} = this.state;
        return (
            <div className="carousel">
                <div className="image-window">
                    <img src={Carousel1Img} alt="" className="bg"/>
                    <img src={Carousel0Img} alt="" className={index === 0 ? 'item active' : 'item'}/>
                    <img src={Carousel1Img} alt="" className={index === 1 ? 'item active' : 'item'}/>
                    <img src={Carousel2Img} alt="" className={index === 2 ? 'item active' : 'item'}/>
                    <img src={Carousel3Img} alt="" className={index === 3 ? 'item active' : 'item'}/>
                    <img src={Carousel4Img} alt="" className={index === 4 ? 'item active' : 'item'}/>
                </div>
                <div className="mask">
                    <div className="arrow" onClick={this.onLeftClick}>
                        <img src={ArrawLeft} alt=""/>
                    </div>
                    <div className="arrow" onClick={this.onRightClick}>
                        <img src={ArrawRight} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;