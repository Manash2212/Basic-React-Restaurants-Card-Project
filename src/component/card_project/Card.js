import React from 'react'

const Card = ({menuData}) => {
  return (
    <>
      <div className="container">
        {menuData.map((curElm) => ( 
          <div className="cards" key={curElm.id}>
            <div className="card-body">
              <div className="card-item">
                <div className=" item item-number font-15">{curElm.id}</div>
                <div className=" item item-name font-30">{curElm.name}</div>
                <div className=" item item-category font-20">{curElm.category}</div>
                <div className=" item item-description font-15">{curElm.description}</div>
              </div>
              
                <img src={curElm.image} alt="Maggi" className='images'  />
              <span className="card-oreder font-20 item ">Order Now</span>
            </div>

          </div>
        ))}
      </div>
    </>
  )
}

export default Card