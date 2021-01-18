import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Homepage from "./pages/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import { auth } from "./firebase/firebase.utils";
// import { createUserProfileDocument } from "./firebase/firebase.utils";
import SignInSignUp from "./SignInSignUp/SignInSignUp";
import { setCurrentUser } from "./redux/user/user.actions";
import "./App.css";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) return;
      if (userAuth) {
        // const userRef = await createUserProfileDocument(userAuth);
        // userRef.onSnapshot((snapShot) => {
        //   setCurrentUser({
        //     id: snapShot.id,
        //     ...snapShot.data(),
        //   });
        // });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
