import React, { useState, useEffect, Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Player } from "video-react";
import {TestApi} from '../api/api.js';

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
                <h1>Main Page File</h1>

                <Form>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" onChange={e => {
                            this.handleVideoLoad(e);
                        }} />
                    </Form.Group>
                </Form>

                <Button onClick={() => this.anotherAPI()}>Call api</Button>
                <div>{this.state.first}</div>
                <div>{this.state.second}</div>

                <Player
                    playsInline
                    src={this.state.videoFileURL}
                    fluid={false}
                    width={480}
                    height={272}
                />
            </div>
        );
    }
};

export default MainPage;