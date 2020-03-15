import React from 'react';

import './image_slide_style.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import login_image from '../../assets/login_image.jpeg';
const AutoplaySlider = withAutoplay(AwesomeSlider);

export default class ImageSlidePage extends React.Component {
    render() {
        return <div className="make-center">
            <div className="mobile-screen-wrap">
                <AutoplaySlider
                    buttonContentLeft={<img class="left-icon" src="https://cdn3.iconfinder.com/data/icons/finger-motion/100/el-renk-4-3-512.png" width="40" height="40" />}
                    buttonContentRight={<img class="right-icon" src="https://cdn3.iconfinder.com/data/icons/finger-motion/100/el-renk-4-3-512.png" width="40" height="40" />}
                    // play={true}
                    infinite={false}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={1000}
                    // bullets={false}
                    organicArrows={false}
                    animation="cubeAnimation" className="mobile-screen">
                    <div data-src={login_image} />
                    <div data-src={login_image} />
                    <div data-src={login_image} />
                </AutoplaySlider>
            </div>

        </div>
    }
}