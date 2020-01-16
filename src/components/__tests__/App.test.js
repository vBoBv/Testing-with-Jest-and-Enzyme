import React from "react";
// import ReactDOM from "react-dom";
import { shallow } from "enzyme";
// import App from "../App";
// import CommentBox from "../CommentBox";
// import CommentList from "../CommentList";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it("shows a comment box", () => {
    // const div = document.createElement("div");

    // ReactDOM.render(<App />, div);

    // //Looks inside the div
    // //and checks to see if the CommentBox is in there
    // // console.log(div.innerHTML);

    // expect(div.innerHTML).toContain("Box for Comment");

    // ReactDOM.unmountComponentAtNode(div); //Clean up

    // const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
    // const wrapped = shallow(<App />);

    expect(wrapped.find(CommentList).length).toEqual(1);
});
