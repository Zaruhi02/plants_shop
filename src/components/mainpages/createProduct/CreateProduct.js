import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import {GlobalState} from '../../../GlobalState';
import Loading from '../utils/loading/Loading';


const initialState ={
    product_id: '',
    title: '',
    price: 0,
    description:'',
    content:'',
    category: '',
    _id: ''
}


function CreateProduct () {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)
    return(
        <div className='create_product'>
            <div className='upload'>
            <input type="file" name="file" id="file_up"/>
            <div id='file_img'>
                <img src='' alt='' />
                <span>X</span>
            </div>
            </div>
            <form>
            <div className='row'>
            <label htmlFor="product_id">Product ID</label>
            <input type="text" name="product_id" id="product_id" required 
            value={product.product_id}/>
            </div>

            <div className='row'>
            <label htmlFor="product_id">Product ID</label>
            <input type="text" name="product_id" id="product_id" required 
            value={product.product_id}/>
            </div>
            </form>
        </div>
    )
}

export default CreateProduct;