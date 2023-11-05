

const OrderTable = ({orders, deleteHandle, confirmOrderHandle}) => {
    const{_id, img, price, date, serviceName, status}= orders || []
   

   


    return (
        <div>
             <tbody className='grid grid-cols-6 gap-10 mx-auto justify-center items-center border-2 w-11/12'>
             <td><button onClick={() =>deleteHandle(_id)}>X</button></td>
                  
                    <td><img src={img} alt="" /></td>
                    <td>{serviceName}</td>
                    <td>{price}</td>
                    <td>{date}</td>

                    {
                        status === 'Approved'?<td><span className="text-orange-600 font-bold">Approved</span></td>:<td><button onClick={() =>confirmOrderHandle(_id)}>Pending</button></td>
                    }
                    
                </tbody> 
        </div>
    );
};

export default OrderTable;