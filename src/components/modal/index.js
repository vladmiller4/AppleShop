import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_NEW_PRODUCT } from "../../actions/products.action";
import "./modal.css"

export function ModalAdd(props) {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productAvailable, setProductAvailable] = useState(0);
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    function setName(e) {
        const {value} = e.target;
        setProductName(value);
    }
    
    function setPrice(e) {
        const {value} = e.target;
        setProductPrice(value);
    }
    
    function setAvailable(e) {
        const {value} = e.target;
        setProductAvailable(value);
    }

    function addToList(e) {
        const { closeModal } = props;
        e.preventDefault();
        const newProduct = {
          id: products.length + 1,
          name: productName,
          price: productPrice,
          available: productAvailable
        };
        if (newProduct.name !== '' && newProduct.price !== 0) {
          dispatch({
            type: ADD_NEW_PRODUCT,
            payload: newProduct
          });
          closeModal();
        }
    }

    return (
        <div className="modal">
            <div className="modal-body">
                <div className="modal-header">
                    <h3>Add new product</h3>
                    <button onClick={props.closeModal}>X</button>
                </div>
                <form>
                    <label>Name:
                        <input type="text" value={productName} onChange={setName} placeholder="iPhone 11"/>
                    </label>
                    <label>Price:
                        <input type="number" value={productPrice} onChange={setPrice}/>
                    </label>
                    <label>Count:
                        <input type="number" value={productAvailable} onChange={setAvailable}/>
                    </label>
                    <button type="submit" value='add' onClick={addToList}>Add Product</button>
                </form>
            </div>
        </div>
    )
}