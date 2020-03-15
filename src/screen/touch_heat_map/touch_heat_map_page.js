import React from 'react';

import login_image from '../../assets/login_image.jpeg';
import finger_print from '../../assets/finger_print.png';
import './touch_heat_map_style.css'
export default class TouchHeatMapPage extends React.Component {
    state = {
        x: 0,
        y: 0,
        coordinateList: [],
    };
    _onMouseMove(e) {
        var coordinateList = this.state.coordinateList;
        var object = {
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
            percentage: (Math.random() * 100).toFixed(0)
        };
        coordinateList.push(object);
        this.setState({ coordinateList: coordinateList });

    }
    render() {
        const { x, y } = this.state;
        return <div className="container">
            <div className="col-lg-6">
                <img onClick={this._onMouseMove.bind(this)} width="250" height="500" src={login_image} />
            </div>
            <div className="col-lg-6">
                <div style={{ width: 250, height: 500 }}>
                    <img
                        style={{ width: '100%', height: '100%' }}
                        src={login_image}
                    />
                    {this.state.coordinateList.map(item => {
                        return (
                            <div style={{ width: 50, height: 50, borderRadius: 50 / 2, backgroundColor: 'rgba(0,0,0,0.3)', position: 'absolute', top: item.y - (40 / 2), left: item.x - (40 / 8), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={finger_print} style={{ position: 'absolute', width: 50, height: 50, borderRadius: 50 / 2, }} />
                                <p className="textStyle"> {item.percentage} %</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div >;
    }
}