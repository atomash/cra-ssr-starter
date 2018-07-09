import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchProduct } from "../../actions/index";
import MyLoader from '../../lib/loader';

class Home extends Component {
  componentDidMount() {
      if(!this.props.user.name){
          this.props.fetchUser() 
      }
      if(!window.isServer) {
        this.props.fetchProduct()
      }
  }
  render() {
    return (
      <div>
        <h1> Home page</h1>
        <MyLoader load={this.props.userLoading}>
          <h1>{this.props.user.name}</h1>
        </MyLoader>
        <h3>{this.props.product.title}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        product: state.pr.product,
        user: state.ur.user,
        userLoading: state.ur.loading 
    }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      fetchUser,
      fetchProduct
  }, dispatch)

};

export default connect(mapStateToProps, mapDispatchToProps)(Home)