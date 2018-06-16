import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from "../actions/index";

export const fetchData = (store) => store.dispatch(fetchUser());
export class Home extends Component {
  componentDidMount() {
    console.log(window.isServer)
      if(!window.isServer){
          this.props.fetchUser()
      }
  }
  render() {
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
