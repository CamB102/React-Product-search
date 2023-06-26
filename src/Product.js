import './product.css'
function Product({name, category, description, price}){
    return(
        <div className="product">
        <h3>{name}</h3>
        <p className="category">{category}</p>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <button className="cart-button">Add to cart</button>
        </div>

    )
}
export default Product
