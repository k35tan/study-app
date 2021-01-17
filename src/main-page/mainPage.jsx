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
                    {/* <h1 className='title'>STUDY APP</h1> */}
                    <Player
                        playsInline
                        poster={videoPlaceholder}
                        src={this.state.videoFileURL}
                        fluid={false}
                        width={700}
                        height={457}
                    />
                    <Form>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" onChange={e => {
                                this.handleVideoLoad(e);
                            }} />
                        </Form.Group>
                    </Form>
                </div>
                <div className='right-side'>
                    <div className="timestamp-container">
                        <div className="keyword-input-container">
                            <Form.Group  >
                                <Form.Control className="keyword-input" type="text" placeholder="Enter a keyword" />
                                <Button className="grey-btn" onClick={() => this.anotherAPI()}>Search</Button>
                            </Form.Group>
                        </div>
                        <div className="text-container">
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.first}</div>
                            <div>{this.state.second}</div>
                            <div>{this.state.first}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MainPage;