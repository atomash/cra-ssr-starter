import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchProduct } from "../actions/index";

class Home extends Component {
  state = {
    v1: ''
  }
  componentDidMount() {
      if(!window.isServer){
          this.props.fetchUser()
          this.props.fetchProduct()
      }
  }
  checkSymbol = (value1, value2) => {
    const output = [];
    for(let i = 0; i < value2.length; i++) {
      if(value1[i] !== value2[i]) {
        output.push(value2[i]);
      }
    }
    return output[0];
  }
  keyDownHandler = (e) => {
    this.setState({v1: e.target.value})
  }
  inputHandler = (e) => {  
    if(this.checkSymbol(this.state.v1, e.target.value) === '@') {
      alert("success")
    }
  }
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <input 
        onInput={this.inputHandler}
        onKeyDown={this.keyDownHandler} 
        type="text"/>
        <h2>{this.props.userLoading ? "ff": this.props.user.name}</h2>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      fetchUser: fetchUser,
      fetchProduct: fetchProduct
  }, dispatch)

};

export default connect(mapStateToProps, mapDispatchToProps)(Home)