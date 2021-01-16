import React, { useState, useEffect, Component } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import logo from '../../src/youtube.png';

import './mainPage.css';


class MainPage extends Component {

    constructor(Props) {
        super(Props);

        this.state = {
            link: "",
            youtubeLink: "",
        }
    }

    render() {
        return (
            <div className='main-page-container'>
                <h1>Main Page File</h1>
                <ReactPlayer url="https://www.youtube.com/watch?v=33W0XTAbgOI" />
            </div>
        );
    }
};

export default MainPage;