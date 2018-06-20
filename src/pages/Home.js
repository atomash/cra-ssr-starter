import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from "../actions/index";

export class Home extends Component {
  static fetchData(store) {
    return store.dispatch(fetchUser());
  }
  componentDidMount() {
      if(!window.isServer){
          this.props.fetchUser()
      }
  }
  render() {
    console.log("test")
    return (
      <div>
        <h1>Home page</h1>
        <h2>{this.props.user.name}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        user: state.session.user,
    }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      fetchUser: fetchUser
  }, dispatch)

};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
