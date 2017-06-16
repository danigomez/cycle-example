import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';

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
});