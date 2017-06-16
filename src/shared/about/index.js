import xs from 'xstream';
import { div, p, h2 } from '@cycle/dom';

function About(sources) {

    const vtree$ = xs.of(
        div(".about", [
                h2("About section"),
                p("This is a dummy about")
            ]
        )
    );

    return {
        DOM: vtree$
    }
}

export default About;