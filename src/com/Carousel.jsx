import React, {Component} from 'react';
import './Carousel.less';
import Carousel0Img from '../img/home/carousel_0.jpg';
import Carousel1Img from '../img/home/carousel_1.jpg';
import ArrawLeft from '../img/home/arraw-left.png';
import ArrawRight from '../img/home/arraw-right.png';

class Carousel extends Component {
    state = {
        index: -1,
    };

    componentDidMount() {
        const _this = this;
        setTimeout(() => {
            _this.setState({index: 0});
        }, 100);
    }

    onLeftClick = () => {
        let {index} = this.state;
        index--;
        if (index < 0) {
            index = 1;
        }
        this.setState({index: index});
    };
    onRightClick = () => {
        let {index} = this.state;
        index++;
        index %= 2;
        this.setState({index: index});
    };

    render() {
        const {index} = this.state;
        return (
            <div className="carousel">
                <div className="image-window">
                    <img src={Carousel0Img} alt="" className="bg"/>
                    <img src={Carousel1Img} alt="" className={index === 1 ? 'item active' : 'item'}/>
                    <img src={Carousel0Img} alt="" className={index === 0 ? 'item active' : 'item'}/>
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