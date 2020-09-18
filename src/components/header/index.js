import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import { ModalAdd } from "../../components/modal/index"
import './header.css';

export class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    })
  };

  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  render () {
  const {isOpen} = this.state;
  const {cart} = this.props;
  const counter = cart.reduce((acc, value) => {
    return acc + value.count
  }, 0);
  return (
  <div className="app-header">
    <nav className="app-header-nav">
      <ul>
        <li>
          <NavLink to="products">My Apple Shop</NavLink>
        </li>
        <button className="add-button" onClick={this.openModal}>Add New Product</button>
        <li>
          <NavLink to="cart">Cart: { counter }</NavLink>
        </li>
      </ul>
    </nav>
    <section>
      {isOpen && <div className="modal-wrapper"><ModalAdd closeModal={this.closeModal}/></div>}
    </section>
  </div>);
  }
};

const mapStateToProps = (state) => ({
  cart: state.cart.inCart
});
export default connect(mapStateToProps)(Header)