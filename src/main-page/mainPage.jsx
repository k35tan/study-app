import React, { useState, useEffect, Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Player } from "video-react";
import { TestApi } from '../api/api.js';
import videoPlaceholder from '../../src/video-placeholder.png';

import './mainPage.css';
import "./../../node_modules/video-react/dist/video-react.css";


class MainPage extends Component {

    constructor(Props) {
        super(Props);

        this.state = {
            link: "",
            youtubeLink: "",
            videoFileURL: "",
            videoFileObject: null,
            first: "",
            second: "",
        }
    }

    handleVideoLoad = (e) => {
        console.log(e.target.files);
        let files = e.target.files;
        if (files.length === 1) {
            let file = files[0];
            this.setState({
                videoFileURL: URL.createObjectURL(file),
                videoFileObject: file
            });
        }
    }

    anotherAPI = () => {
        TestApi().then(
            (result) => {
                console.log(result);
                this.setState({
                    first: result.setup,
                    second: result.punchline
                })
            },
            (error) => {
                console.log("error")
            }
        )
    }

    sortData = () => {

    }

    render() {
        return (
            <div className='main-page-container'>
                <div className='left-side'>
                    <Player
                        playsInline
                        poster={videoPlaceholder}
                        src={this.state.videoFileURL}
                        fluid={false}
                        width={700}
                        height={457}
                    />
                    <div className="margin-top">
                        <Form.File onChange={e => {
                            this.handleVideoLoad(e);
                        }} />
                    </div>

                </div>
                <div className='right-side'>
                    <div className="timestamp-container">
                        <div className="keyword-input-container">
                            <div className="left-keyword">
                                <Form.Control className="keyword-input" type="text" placeholder="Enter a keyword" />
                            </div>
                            <div className="right-keyword">
                                <Button className="grey-btn" onClick={() => this.anotherAPI()}>Search</Button>
                            </div>
                        </div>
                        <div className="text-container">
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MainPage;