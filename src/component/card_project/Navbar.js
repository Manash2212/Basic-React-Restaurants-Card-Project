import React from 'react'

const Navbar = ({ menuList,filterdCategory }) => {
  return (
    <>
      <div className="header">
        <div className="items">
          {menuList.map((curElm)=>{
            return (
              <button className="category font-20" onClick={()=>filterdCategory(curElm)}>{curElm}</button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Navbar