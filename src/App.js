import React from 'react';

import login_image from './assets/login_image.jpeg';

export default class App extends React.Component {

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
              <div style={{ width: 40, height: 40, borderRadius: 40 / 2, backgroundColor: 'rgba(0,0,0,0.3)', position: 'absolute', top: item.y - (40 / 2), left: item.x - (40 / 8), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#fff', margin: 0 }}>{item.percentage} %</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>;
  }
}

/*
 * Render the above component into the div#app
 */
