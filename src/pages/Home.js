import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchProduct } from "../actions/index";

class Home extends Component {
  componentDidMount() {
      if(!window.isServer){
          this.props.fetchUser()
          this.props.fetchProduct()
      }
  }
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <h2>{this.props.userLoading ? "ff": this.props.user.name}</h2>
        <h3>{this.props.product.title}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.ur.loading)
    return {
        product: state.pr.product,
        user: state.ur.user,
        userLoading: state.ur.loading 
    }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      fetchUser: fetchUser,
      fetchProduct: fetchProduct
  }, dispatch)

};

export default connect(mapStateToProps, mapDispatchToProps)(Home)