<h3>Task for react group</h3>

<b>How to install:</b>
<ul>
    <li>Run <b>npm install</b> in root directory</li>
    <li>After successfull installation, run <b>npm start</b></li>
</ul>

<b>Your task:</b> 
<ul>
    <b>General</b>
        <ul>
            <li>Split reducer into several one (cart, products), find approach how to do this.</li>
            <li>Use react-router and create two routes 'cart' and 'products'</li>
            <li>Make shop name clickable, and make a redirect to the product page, in case if user click on it </li>
            <li>Highlight active navigation menu item</li>
        </ul>
    <b>Main page (header)</b>
    <ul>
        <li>On the right side, show cart with a count of items that user wants to buy (you should track changes and update count in case if user adds/ removes any products)</li>
        <li>By clicking on the cart in header, you should navigate to cart page</li>
    </ul>
    <b>Product list page</b>
    <ul>
        <li>Implement possibility to add a product into cart</li>
        <li>Hide or disable 'Add to cart' button in case if product sold out</li>
        <li>Implement possibility to add new product into product list. Use html5 native modal window (for form).</li>
        <li>Implement sorting by <b>Name</b>, <b>Price</b>, <b>Availability</b></li>
        <li>Refactor reducer, load data using xhr - find how to deal with async operations using redux-thunk (your product list should be saved into JSON file)</li>
    </ul>
    <b>Cart page</b>
    <ul>
        <li>Implement the list of products that user adds to cart</li>
        <li>Implement possibility to remove the product from cart</li>
        <li>Implement possibility to increase product count (check how many items are available)</li>
        <li>Implement possibility to decrease product count (and also update product available count)</li>
        <li>Show msg that Cart is empty in case if user clean it</li>
    </ul>
    <b>Extra</b>
    <ul>
        <li>In cart page show "Next" button</li>
        <li>If user clicks next, show cart summary and the message about successful shopping</li>
    </ul>
</ul>

<i>PS: For all data sharing/manipulation, you should use Redux and any Redux oriented modules that you found useful</i>
</br>
![alt text](https://github.com/vdanyliv/redux-start/blob/master/public/1.png "Product list")
</br>
![alt text](https://github.com/vdanyliv/redux-start/blob/master/public/2.png "Cart")
