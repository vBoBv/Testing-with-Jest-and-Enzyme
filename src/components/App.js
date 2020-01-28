import React, { Component } from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";

// export default () => {
//     return (
//         <div>
//             {/* <CommentBox />
//             <CommentList /> */}
//             <Route path='/post' component={CommentBox} />
//             <Route path='/' exact component={CommentList} />
//         </div>
//     );
// };

class App extends Component {
    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>
                    Sign In
                </button>
            );
        }
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/post'>Post a comment</Link>
                </li>
                <li>{this.renderButton()}</li>
            </ul>
        );
    }

    render() {
        return (
            <div>
                {/* <CommentBox />
                <CommentList /> */}
                {this.renderHeader()}
                <Route path='/post' component={CommentBox} />
                <Route path='/' exact component={CommentList} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(App);
