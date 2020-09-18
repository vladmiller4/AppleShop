import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getProductList } from "./actions/products.action";

// Components
import Header from './components/header'
import SideBar from './components/sidebar';
import Cart from './containers/cart';
import ProductList from './containers/product-list';

// CSS
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getInitialStateProducts = this.getInitialStateProducts.bind(this);
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

  getInitialStateProducts() {
    const {dispatch} = this.props;
    dispatch(getProductList());
  }

  componentDidMount() {
    this.getInitialStateProducts()
  }

  render() {
    return (
    <div className="App">
      <Router>
        <Header/>
        <div className="App-wrapper">
          <SideBar/>
            <Switch>
            <Route path="/" exact>
              <ProductList/>
            </Route>
            <Route path="/products">
              <ProductList/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            </Switch>
        </div>
      </Router>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.inCart
});

export default connect(mapStateToProps)(App)