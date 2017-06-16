import xs from 'xstream';
import { h1 } from '@cycle/dom';

function Header(sources) {

    const vtree$ = xs.of(h1( "This is a title"));

    return {
        DOM: vtree$
    }
}

export default Header;