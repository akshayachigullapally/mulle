import './Product.css'
function Product(props){
    //state
    return(
        <div className='=card text-center h-100 bg-light p-3'>
            <img src={props.p.image} className='w-100 product-img' alt=""/>
            <div className='card-body'>
            <p className='fs-3'>Product id - {props.p.id}</p>
            <p className='lead'>Product title - {props.p.title}</p>
            <p className='fs-4'>Product price - {props.p.price}</p>

            </div>
        </div>
    )
}
export default Product;