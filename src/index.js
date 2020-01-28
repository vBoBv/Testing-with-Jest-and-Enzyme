import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import reducers from "reducers";
import Root from "Root";
import App from "components/App";

ReactDOM.render(
    // <Provider store={createStore(reducers, {})}>
    //     <App />
    // </Provider>,
    <Root>
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
        {/* <App /> */}
    </Root>,
    document.querySelector("#root")
);
