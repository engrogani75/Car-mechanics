import React, { useContext, useEffect, useState } from 'react';
import Nav from '../Home/Nav/Nav';
import { AuthContex } from '../../Providers/AuthProvider';
import OrderTable from './OrderTable';

const OrderBook = () => {

    const {user} = useContext(AuthContex)

    const [orderBook, setOrderBook] = useState([])

  

    const url = `http://localhost:5000/orderBook?email=${user?.email}`

    useEffect(() =>{
        fetch(url)
        .then(res =>res.json())
        .then(data => {
           
            setOrderBook(data)
        })
    }, [url])

    const deleteHandle =(id) =>{
       
        const proced = confirm('are you sure remove this one')
        if (proced) {
            fetch(`http://localhost:5000/orderBook/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
               
                if (data.deletedCount > 0) {
                    alert('delete sucessfully')
                    const remainData = orderBook.filter(order => order._id !== id);
                    console.log(remainData);
                    setOrderBook(remainData)
                }
            })
        }
    }


    const confirmOrderHandle = (id) => {
        const proced = confirm('are you sure confirm it')
        if (proced) {
          fetch(`http://localhost:5000/orderBook/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',           
            },
            body:JSON.stringify({status: 'Approved'})

          })
          .then(res => res.json())  
          .then(data => {
            if (data.modifiedCount>0) {
                alert("confirm this")
                const remain = orderBook.filter(order => order._id !== id);
                const updated = orderBook.find(order => order._id === id)
                updated.status ='Approved'
                const newUpdated = [updated, ...remain]
                setOrderBook(newUpdated)

            }
          })
        }
    }
  

    // console.log(order);
    // console.log(orderBook._id);




    return (
        <div>
            <Nav></Nav>

            <div className='mt-6'>
                <h2 className='text-center text-3xl'>Your Order</h2>
                <table className='flex flex-col justify-center items-center mt-10'>

                    {
                       orderBook.map(orders => <OrderTable key={orders._id} orders={orders} deleteHandle={deleteHandle} confirmOrderHandle={confirmOrderHandle}> </OrderTable>) 
                    }
                  
                 
                </table>
                
            </div>
        </div>
    );
};

export default OrderBook;