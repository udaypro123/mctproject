import React, { useEffect } from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductHomepage } from '../reduxx/homepageSlice'
import { addhomeitem } from '../reduxx/showprodutdetailsSlice'

const Home = () => {

  const dispatch = useDispatch()
  const { homepageitem } = useSelector((state) => state.homepagedata)
  

  useEffect(() => {
    dispatch(getProductHomepage())
  }, [])

  const homedetalisitem=(ele)=>{
    dispatch(addhomeitem(ele));
  }

  return (
    <>
        <div className='homedtails'>
          <h2>Home page</h2>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis vitae eaque assumenda? Deleniti minima accusantium facere voluptatibus commodi nihil beatae ratione quisquam. Labore, amet soluta. Aliquam hic rem delectus asperiores sapiente nam dolorem. Ipsa aperiam deserunt quidem earum dolor fugit at nisi praesentium id, alias non numquam, eos perferendis iure temporibus fugiat quae repudiandae tempora error quod. Excepturi, inventore consequatur vel exercitationem sit delectus amet beatae nihil, rem maiores aperiam labore dolore ducimus iure perferendis qui nobis ullam. Optio expedita hic reiciendis facilis nisi asperiores in. Eum nobis aut voluptatum?</p>
        </div>
      <div className='homepagediv'>




        {

          homepageitem && homepageitem.map((ele, i) => {
            return (
              <>
                <div className='cardcontent' key={ i }>
                  <img src={ ele.image } alt="" />

                  <h2>{ ele.category }</h2>
                  <p>$ { ele.price } </p>
                  <button onClick={()=>homedetalisitem(ele)}><NavLink to={`/${i}`}>see details</NavLink></button>
                  
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Home
