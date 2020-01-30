import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
// import reduxPromise from "redux-promise";
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";

// export default (props) => {
//     return (
//         <Provider store={createStore(reducers, {})}>{props.children}</Provider>
//     );
// };

export default ({ children, initialState = {} }) => {
    // return (
    //     <Provider store={createStore(reducers, initialState)}>
    //         {children}
    //     </Provider>
    // );
    const store = createStore(
        reducers,
        initialState,
        // applyMiddleware(reduxPromise)
        applyMiddleware(async, stateValidator)
    );

    return <Provider store={store}>{children}</Provider>;
};
