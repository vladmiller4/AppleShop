import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addToCart, removeFromCart } from '../../reducers/cart.reducer'
import { Link } from 'react-router-dom';
import { Checkout } from '../../components/checkout/index';
import './cart.css';


export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutModal: false
    };
    this.renderCart = this.renderCart.bind(this);
    this.updateProductCount = this.updateProductCount.bind(this);
    this.CheckoutModal = this.CheckoutModal.bind(this);
  }

  CheckoutModal() {
    this.setState({
      checkoutModal: true
    })
  };

  updateProductCount(e, product) {
    const {value} = e.target;
    const {dispatch} = this.props;

    if(value > product.count){
      const { products } = this.props;
      const productItem = products.find((elem) => {
        return elem.id === product.id
      });
      addToCart(productItem, dispatch, value - product.count);
    }
    else {
      removeFromCart(product, dispatch, product.count - value)
    }
  }

  renderCart() {
    const {dispatch} = this.props;
    return this.props.cart.length ? this.props.cart.map((product) => (
      <div className="cart-item" key={product.price}>
        <p>{product.name}</p>
        <div className="cart-right">
          <input type="number" value={product.count} onChange={(e) => this.updateProductCount(e, product)}/>
          <button className="button-remove" onClick={() => removeFromCart(product, dispatch, product.count)}>Delete</button>
        </div>
      </div>
    )) : 
      <div className="cart-empty">
        <div className="cart-center">
          <h3>Your cart is empty!</h3>
          <Link to="products">Continue Shopping</Link>
        </div>
      </div>
  }

  render() {
    const {checkoutModal} = this.state;
    return (
    <div className="App-cart">
      {this.renderCart()}
      {this.props.cart.length ? <button className="next-button" onClick={this.CheckoutModal}>Next</button> : ''}
      <section>
          {checkoutModal && <div className="modal-wrapper"><Checkout/></div>}
      </section>
    </div>);
  }
}

const mapStateToProps = state => ({
  cart: state.cart.inCart,
  products: state.products.products
});
export default connect(mapStateToProps)(Cart);

