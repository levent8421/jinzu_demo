import React, {Component} from 'react';
import './Header.less';
import Logo from '../img/logo.png';
import {withNavigation} from './routerUtils';

class Header extends Component {
    state = {
        menus: [
            {text: '主页', active: true, path: '/'},
            {text: '关于江南金租', active: false, path: '/about'},
            {text: '新闻咨询', active: false, path: '/news'},
            {text: '业务领域', active: false, path: '/area'},
            {text: '加入我们', active: false, path: '/join'},
        ],
        bgState: 'color'
    };

    componentDidMount() {
        this.originOnScroll = document.onscroll;
        const _this = this;
        document.onscroll = e => {
            _this.setBgState(e.target.documentElement.scrollTop > 100 ? 'color' : 'transparent');
        };
    }

    setBgState(state) {
        const {bgState} = this.state;
        if (bgState === state) {
            return;
        }
        this.setState({bgState: state});
    }

    componentWillUnmount() {
        document.onscroll = this.originOnScroll;
    }

    to(n) {
        const {menus} = this.state;
        let menu;
        for (let i = 0; i < menus.length; i++) {
            menus[i].active = (i === n);
            if (menus[i].active) {
                menu = menus[i];
            }
        }
        this.setState({menus});
        this.props.navigate(menu.path);
    }

    render() {
        const {menus, bgState} = this.state;
        return (
            <div className={`app-header app-header-${bgState}`}>
                <div className="inner">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="menus">
                        {
                            menus.map((m, i) => (
                                <div className={`item ${m.active ? 'active' : ''}`} key={i} onClick={() => this.to(i)}>
                                    <div className="text">{m.text}</div>
                                    <div className="line"/>
                                </div>))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withNavigation(Header);