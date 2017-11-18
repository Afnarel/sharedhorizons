/**
 * Created by Vashnak on 28/06/17.
 */

import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import MenuBar from './components/menuBar/MenuBar';
import Sidenav from './components/sidenav/Sidenav';
import Home from './views/home/Home';
import History from './views/history/History';
import Channel from './views/channel/Channel';
import Video from './views/video/Video';
import NotFound from './views/notFound/NotFound';
import VR from './views/vr/VR';


const routes = () => {
    return (
        <BrowserRouter>
            <div>
                <MenuBar/>
                <Sidenav/>
                <div className="views">
                    <Switch>
                        <Route exact path="/" render={() =><Redirect to="/home"/>}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/history" component={History}/>
                        <Route exact path="/channel/:name" component={Channel}/>
                        <Route exact path="/video/:videoId" component={Video}/>
                        <Route exact path="/VR" component={VR}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default routes;