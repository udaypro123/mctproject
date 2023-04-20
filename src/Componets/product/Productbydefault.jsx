import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getProductDatadefault } from '../reduxx/store/deaultdatashowsilce'
import { useDispatch, useSelector } from 'react-redux'

const Productbydefault = () => {

    const {showdefualtdata}=useSelector((state)=>state.showdata)
   

    const dispatch=useDispatch()
    const datas="electronics"

    useEffect(()=>{
        dispatch(getProductDatadefault(datas))
    },[datas])

  return (
    <>
     <div className='deproducts'>
          {
            showdefualtdata.map((ele,i)=>{
              
              return (
                <>
                  <ul key={i}>
                    <li ><NavLink>{ele.title} </NavLink> </li>
                  </ul>
                </>
              )
            })
          }
      </div>
    </>
  )
}

export default Productbydefault
