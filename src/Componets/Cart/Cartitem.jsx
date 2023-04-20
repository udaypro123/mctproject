import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../reduxx/showprodutdetailsSlice'

const Cartitem = () => {

const dispatch=useDispatch()
const {prodata}=useSelector((state)=>state.productdata)


const deleteitem=(id)=>{
  dispatch(removeItem(id))
  console.log("hiii")
}

  return (
    <>
    <div className='cartmaindiv'>
     {
      prodata.length>0 ? <div className='cartcard'>
        {
          prodata.map((ele,id)=>{
              return (
                <>
                <div className='cartcontent' key={id}>
                  <img src={ele.image} alt="" />

                  <p>{ele.category}</p>
                  <p>$ {ele.price} </p>
                 
                  <button onClick={()=>deleteitem(id)}>Remove Item</button>
               
                </div>
                </>
              )
          })
        }
      </div>: <h2>no data</h2>

     }

    </div>

    </>
  )
}

export default Cartitem
