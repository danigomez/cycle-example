import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';

import Store from '../shared/redux/store';
import reducers from '../shared/redux/reducers'

import Landing from '../shared/landing';

function main(sources) {
    const landing = Landing(sources);
    const vtree$ = landing.DOM;

    return {
        DOM: vtree$
    }

}

run(main, {
    DOM: makeDOMDriver('#root'),
    STORE: new Store({}, reducers)
});