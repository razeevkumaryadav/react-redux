import React from 'react';

function Home(props){
    console.warn('home',props)
    return(
        <div>
            <div className='cart-wrapper'>
                <img src="https://cdn.pixabay.com/photo/2016/12/21/16/34/shopping-cart-1923313_960_720.png"  />
            </div>
            <h1>Home Components</h1>
            <div className='card-wrapper'>
                <div className='img-wrapper'>
                    <img src='//image-us.samsung.com/us/smartphones/galaxy-z-flip3-5g/v3/images/galaxy-z-flip3-5g_highlights_kv.jpg' width="200px" height="200px" className=''/>
                </div>
                <div className="text-wrapper">
                    <span>Samsung</span>
                </div>
                <div className="text-wrapper">
                    <span>$1000</span>
                </div>
                <div className='btn-wrapper'>
                    <button type="button" onClick={()=>props.addToCartHandler({price:'100',name:'samsung'})}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;