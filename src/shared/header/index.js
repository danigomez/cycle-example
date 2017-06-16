import xs from 'xstream';
import { h1, div, a } from '@cycle/dom';

function Header(sources) {

    const vtree$ = xs.of(
        div([
            h1( "This is a title"),
            a(".link_home", {attrs: {href: "#home"}}, [
                "Home"
            ]),
            a(".link_about", {attrs: {href: "#about"}}, [
                "About"
            ])
        ])
    );

    return {
        DOM: vtree$
    }
}

export default Header;