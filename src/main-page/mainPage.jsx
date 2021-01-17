import React, { useState, useEffect, Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Player } from "video-react";
import { TestApi } from '../api/api.js';
import videoPlaceholder from '../../src/video-placeholder.png';
import axios from "axios";


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
            data: [],
            keyword: "",
            time_stamps: [],
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

    // axios
    //   .get("/myapp/allevents")
    //   .then(res => this.setState({ todoList: res.data }))
    //   .catch(err => console.log(err));

    // anotherAPI = () => {
    //     TestApi().then(
    //         (result) => {
    //             console.log(result);
    //             this.setState({
    //                 first: result.setup,
    //                 second: result.punchline
    //             })
    //         },
    //         (error) => {
    //             console.log("error")
    //         }
    //     )
    // }

    anotherAPI = () => {
        // result = "[[\"best\", 0.0, 11.1], [\"place\", 11.1, 11.4], [\"to\", 11.4, 11.5], [\"find\", 11.5, 11.8], [\"a\", 11.8, 11.9], [\"lover\", 11.9, 12.0], [\"set\", 12.0, 12.4], [\"the\", 12.4, 12.5], [\"bar\", 12.5, 12.9], [\"is\", 12.9, 13.1], [\"where\", 13.1, 13.2], [\"I\", 13.2, 13.4], [\"go\", 13.4, 13.5], [\"me\", 13.5, 15.1], [\"and\", 15.1, 15.3], [\"my\", 15.3, 15.4], [\"friends\", 15.4, 15.8], [\"at\", 15.8, 15.9], [\"the\", 15.9, 16.2], [\"table\", 16.2, 16.4], [\"and\", 16.4, 24.4], [\"I'll\", 24.4, 36.2], [\"follow\", 36.2, 36.4], [\"my\", 36.4, 36.7], [\"lead\", 36.7, 37.2], [\"I\", 37.2, 37.6], [\"may\", 37.6, 37.8], [\"be\", 37.8, 38.1], [\"crazy\", 38.1, 38.3], [\"don't\", 38.3, 38.9], [\"mind\", 38.9, 39.2], [\"me\", 39.2, 39.5], [\"say\", 39.5, 39.8], [\"boy\", 39.8, 40.2], [\"last\", 59.9, 61.3], [\"night\", 61.3, 61.6], [\"you\", 61.6, 61.7], [\"were\", 61.7, 61.8], [\"in\", 61.8, 61.9], [\"my\", 61.9, 62.3], [\"room\", 62.3, 62.6], [\"now\", 62.6, 63.6], [\"my\", 63.6, 63.7], [\"bedsheets\", 63.7, 63.8], [\"smell\", 63.8, 64.4], [\"like\", 64.4, 64.6], [\"you\", 64.6, 65.1], [\"play\", 72.7, 88.7], [\"family\", 88.7, 103.0], [\"doing\", 103.0, 103.4], [\"okay\", 103.4, 103.6], [\"I'm\", 103.6, 104.7], [\"leaving\", 104.7, 104.8], [\"the\", 104.8, 105.1], [\"in\", 105.1, 105.4], [\"the\", 105.4, 105.4], [\"text\", 105.4, 105.9], [\"but\", 105.9, 106.4], [\"the\", 106.4, 106.5], [\"radio\", 106.5, 108.5], [\"play\", 108.5, 108.9], [\"in\", 108.9, 109.2], [\"the\", 109.2, 109.4], [\"good\", 109.4, 109.7], [\"night.\", 109.7, 110.1], [\"The\", 132.7, 145.0], [\"Cure\", 145.0, 145.5], [\"by\", 145.5, 145.6], [\"Lady\", 145.6, 145.8], [\"Gaga\", 145.8, 145.9], [\"30\", 162.7, 165.1], [\"lb\", 165.1, 176.0], [\"my\", 176.0, 176.2], [\"baby\", 176.2, 176.8], [\"be\", 188.3, 188.5], [\"my\", 188.5, 188.7], [\"baby,\", 188.7, 189.6], [\"last\", 189.6, 201.2], [\"night\", 201.2, 201.6], [\"you\", 201.6, 201.7], [\"were\", 201.7, 201.8], [\"in\", 201.8, 201.9], [\"my\", 201.9, 202.2], [\"room\", 202.2, 202.6], [\"with\", 227.1, 229.2], [\"the\", 229.2, 229.3], [\"shape\", 229.3, 229.7], [\"of\", 229.7, 229.9], [\"you\", 229.9, 230.3]]"
        // let result = [1,2,3,4]
        let my_array = [
            ["best", 0, 11.1],
            ["place", 11.1, 11.4],
            ["to", 11.4, 11.5],
            ["find", 11.5, 11.8],
            ["a", 11.8, 11.9],
            ["lover", 11.9, 12],
        ]

        axios.get("/api/object").then(
            (result) => {
                console.log(result)
                console.log(result.data)
                let query = this.state.keyword
                var json_file = result.data
                let time_stamps = []
                for (let i = 0; i < json_file.length; i++){
                    if (json_file[i][0] == query){
                        time_stamps.push(json_file[i][1]);
                        // for (let index = i; index < i + 2 ; index++){
                        //     console.log(json_file[index][0]);
                        // }
                    }
                }
            console.log("Below is the transcript from your video: ")
            for (let t = 0; t<json_file.length; t++){
 		        console.log(json_file[t][0]);
            }
            console.log(time_stamps)
            this.setState({
                data: result.data,
                time_stamps: time_stamps, 
            })
            },
                (error) => {
                    console.log(error)
                }
            )
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
                                <Form.Control className="keyword-input" value={this.state.keyword} onChange={(e) => this.setState({keyword: e.target.value})} type="text" placeholder="Enter a keyword" />
                            </div>
                            <div className="right-keyword">
                                <Button className="grey-btn" onClick={() => this.anotherAPI()}>Search</Button>
                            </div>
                        </div>
                        <div className="text-container">
                            <div>
                                {this.state.time_stamps.map(element => { return (<div>{element}</div>)}) }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MainPage;