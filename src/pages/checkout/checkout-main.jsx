import { useLazyQuery } from '@apollo/client/react';
import { useState, useEffect } from 'react';
import productPicture from '../../assets/product.webp';
import CustomerForm from './customer-form';
import './checkout.css';

import { GET_FEE } from '../../data/queries/checkout-queries';
import { GET_CUSTOMER, GET_PRODUCT_DETAILS } from '../../data/queries/checkout-queries';
import { data } from 'autoprefixer';

export default function Checkout(){
    const [GetCustomer, {customerInformation}] = useLazyQuery(GET_CUSTOMER);
    const [GetProductDetails, {ProductDetails}] = useLazyQuery(GET_PRODUCT_DETAILS);
    const [HandleGetFee, GetFeeResult] = useLazyQuery(GET_FEE);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [productsInCart, setProductsInCart] = useState([]);
    const [fee, setFee] = useState({tax: 0, shipping: 0});
    
    const HandleGetCustomer = async ()=>{
        const InitCustomerInfor = await GetCustomer({
            variables:{
                customerId: 'p'
            },
            fetchPolicy: 'no-cache'
        })
        setLocation(InitCustomerInfor.data.customer.location);
        const resultProductsInCartId = InitCustomerInfor.data.customer.items;

        let localProductsId = resultProductsInCartId.map((item)=>{
            return item.productId;
        })

        let ProductInCartDetails = [];
        for(let item of localProductsId){
            const InitProductDetails = await GetProductDetails({
                variables:{
                    productId: item
                },
                fetchPolicy: 'no-cache'
            })
            ProductInCartDetails.push(InitProductDetails.data);
        }
        
        let combineProductCustomer = ProductInCartDetails.map((item, index) => {
            return {
                ...item.product,
                quantity: InitCustomerInfor.data.customer.items[index].quantity,
                color: InitCustomerInfor.data.customer.items[index].color,
                size: InitCustomerInfor.data.customer.items[index].size
            }
        });
        setProductsInCart(combineProductCustomer);

        if(InitCustomerInfor.data.customer.location) {
            const GetFee = await HandleGetFee({
                variables: {
                    location: InitCustomerInfor.data.customer.location, 
                },
                fetchPolicy: 'no-cache'
            })
            setLocation(GetFee);
            console.log(GetFee);
            setFee({tax: GetFee.data.fee.tax, shipping: GetFee.data.fee.shipping});
        }
        
        const subTotal = combineProductCustomer.reduce((item)=>{
            return item.quantity*item.price;
        })
        setSubTotal(subTotal);
        if(fee){
            const Total = (subTotal + fee.tax + fee.shipping*subTotal);
            setTotal(Math.round(Total));
        }
    }


    useEffect(()=>{
        HandleGetCustomer();
    }, [])

    return(
        <div className='container'>
            <div className="row p-4">
                <div className='col-9'>
                    <table className="table table-hover text-left">
                        <thead className='table-secondary'>
                            <tr>
                            <th>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault"></label>
                            </th>
                            <th></th>
                            <th scope="col-md-1">Item</th>
                            <th scope="col-md-8">Category</th>
                            <th scope="col-md-2">Quantity</th>
                            <th scope="col-md-1">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    productsInCart.map((item, index)=>{
                                        return <tr>
                                            <td>
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault"></label>
                                            </td>
                                            <td key={index}><img src={productPicture} alt="" /></td>
                                            <td key={index+1}>{item.name}</td>
                                            <td key={index+2}>{item.categories}</td>
                                            <td key={index+3}>{item.quantity}</td>
                                            <td key={index+4}>{item.price}</td>
                                        </tr>
                                    })
                                }                            
                        </tbody>
                    </table>
                </div>
                <div className='col-3 '>
                    <div className="text-center bg-secondary bg-opacity-10 rounded-3">
                        <div className='p-3'>
                            <button type="button" className="btn w-100 checkout-btn d-flex justify-content-center align-items-center">
                                CHECKOUT
                            </button>
                            <div className='d-flex p-1 justify-content-between'>
                                <div>Cart Subtotal</div>
                                <div>{subTotal} <sup>d</sup></div>
                            </div>
                            <div className='d-flex p-1 justify-content-between'>
                                <div>Shipping</div>
                                <div>{fee.shipping} <sup>d</sup></div>
                            </div>
                            <div className='d-flex p-1 justify-content-between'>
                                <div>Tax</div>
                                <div>{fee.tax*subTotal} <sup>d</sup></div>
                            </div>
                            <div className='d-flex p-2 justify-content-between fw-bold'>
                                <div>Total</div>
                                <div>{total}<sup>d</sup></div>
                            </div>
                        </div>        
                    </div>
                    
                    <CustomerForm location={location}/>
                </div>
                
            </div>
        </div>
    )
}