import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App'
import Header from '../component/header/Header';
import TrackerPage from '../pages/tracker-page/TrackerPage'
export function Routing() {

    return (
        <BrowserRouter>

            <Route path="/" component={App} exact />
            <Route component={Header} />

            
            <Switch>
                <Route path="/tracker" component={TrackerPage} exact />
            </Switch>
        </BrowserRouter>
    );
}
