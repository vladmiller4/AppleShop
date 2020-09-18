import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addToCart } from '../../reducers/cart.reducer';
import './product-list.css';

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = (e) => {
    const { value } = e.target;
    this.setState({value: value});
  }

  renderProducts() {
    const { dispatch } = this.props;
    const { products } = this.props.products;
    const productsFilter = (value) => {
      if (value === "name") {
        return products.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return products.sort((a, b) => {
          return a[value] - b[value];
        });
      }
    }
    return productsFilter(this.state.value).map((product) => (
      <div className="product_list_item" key={product.id}>
        <p>{product.name}</p>
        <p>Price: ${product.price}</p>
        {product.available > 0 ? <p id="in">In stock</p> : <p id="out">Sold out</p>}
        <button className="add-to-cart-btn" onClick={() => addToCart(product, dispatch, 1 )} disabled={product.available <= 0}>Add to card</button>
      </div>
    ));
  }

  render() {
    return (
    <div className="App-product_main">
      <div className="select-container">
         <select name='sort' onChange={this.onChange}>
            <option value="">Filter by</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="available">Available</option>
          </select>
      </div>
      <div className="App-product_list">
        {this.renderProducts()}
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({...state});
export default connect(mapStateToProps)(ProductList);