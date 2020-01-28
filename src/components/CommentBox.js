import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import requireAuth from "components/requireAuth";

class CommentBox extends Component {
    state = { comment: "" };

    // componentDidMount() {
    //     this.shouldNavigateAway();
    // }

    // componentDidUpdate() {
    //     this.shouldNavigateAway();
    // }

    // shouldNavigateAway() {
    //     if (!this.props.auth) {
    //         this.props.history.push("/");
    //     }
    // }

    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        //Call an action creator
        // And save the comment
        this.props.saveComment(this.state.comment);

        this.setState({ comment: "" });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button
                    className='fetch-comments'
                    onClick={this.props.fetchComments}
                >
                    Fetch Comments
                </button>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return { auth: state.auth };
// };

// export default connect(mapStateToProps, actions)(CommentBox);
export default connect(null, actions)(requireAuth(CommentBox));
