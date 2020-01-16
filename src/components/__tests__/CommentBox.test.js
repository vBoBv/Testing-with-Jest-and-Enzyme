import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it("has a text area and two button", () => {
    // const wrapped = mount(<CommentBox />);

    // console.log(wrapped.find("textarea").length);
    // console.log(wrapped.find("button").length);

    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(2);
});

// it("has a text area that users can type in", () => {
//     wrapped.find("textarea").simulate("change", {
//         target: { value: "new comment" }
//     });
//     wrapped.update();

//     expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
// });

// it("when form is submitted, text area gets emptied", () => {
//     wrapped.find("textarea").simulate("change", {
//         target: { value: "new comment" }
//     });
//     wrapped.update();
//     // expect(wrapped.find("textarea").prop("value")).toEqual("new comment");

//     wrapped.find("form").simulate("submit");
//     wrapped.update();
//     expect(wrapped.find("textarea").prop("value")).toEqual("");
// });

describe("the text area", () => {
    beforeEach(() => {
        wrapped.find("textarea").simulate("change", {
            target: { value: "new comment" }
        });
        wrapped.update();
    });

    it("has a text area that users can type in", () => {
        // wrapped.find("textarea").simulate("change", {
        //     target: { value: "new comment" }
        // });
        // wrapped.update();

        expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    });

    it("when form is submitted, text area gets emptied", () => {
        // wrapped.find("textarea").simulate("change", {
        //     target: { value: "new comment" }
        // });
        // wrapped.update();
        // expect(wrapped.find("textarea").prop("value")).toEqual("new comment");

        wrapped.find("form").simulate("submit");
        wrapped.update();
        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});
