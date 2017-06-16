import xs from 'xstream';

import { div } from '@cycle/dom';

import Header from '../header';
import About from '../about';

function Landing(sources) {
    const header = Header(sources);
    const about = About(sources);

    const vtreeHeader$ = header.DOM;
    const vtreeAbout$ = about.DOM;

    return {
        DOM: xs
            .combine(vtreeHeader$, vtreeAbout$)
            .map(combined => div([...combined]))
    }
}


export default Landing;