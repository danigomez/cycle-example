import xs from 'xstream';


const INIT = {
    type: "INIT"
};

const reducer = (state, action) => {
    switch (action.type) {
        case "INIT":
            return state;
    }
};

class Store {
    constructor(initialState, reducers) {
        this.reducers = [...reducers, reducer];
        this.action$ = xs.create().startWith(INIT);

        this.state$ = this.action$
            .map(action => reducers.map(({key, reducer}) => ({[key]: reducer(initialState, action)})))
            .startWith(initialState);

    }

    dispatch(action) {
        this.action$.shamefullySendNext(action);
    }

    subscribe(listener) {
        this.state$.addListener(listener)
    }

}

export default Store;