import './App.less';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import React, {Component} from 'react';
import Header from './com/Header';
import Footer from './com/Footer';
import Home from './page/Home';
import About from './page/About';
import News from './page/News';
import Area from './page/Area';
import Concat from './page/Concat';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/area" element={<Area/>}/>
                        <Route path="/join" element={<Concat/>}/>
                    </Routes>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;