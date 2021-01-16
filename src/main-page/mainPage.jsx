import React, { useState, useEffect, Component } from "react";
import Form from 'react-bootstrap/Form';
import ReactPlayer from 'react-player';
import "./../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";

import './mainPage.css';


class MainPage extends Component {

    constructor(Props) {
        super(Props);

        this.state = {
            link: "",
            youtubeLink: "",
            videoFileURL: "",
            videoFileObject: null,
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