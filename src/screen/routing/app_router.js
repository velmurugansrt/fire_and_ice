import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import TouchHeatMapPage from '../touch_heat_map/touch_heat_map_page'
import ImageSlidePage from '../image_slide/image_slide_page';


export default class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/heatMap' component={TouchHeatMapPage} />
                    <Route path='/imageSlide' component={ImageSlidePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}