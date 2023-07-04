import React, { useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Data from './data.json'

const uniqueList = [...new Set(Data.map((curElm) => {
  return curElm.category
})),"All"]
// console.log(uniqueList)

const Restaurent = () => {

  const [menuData, setMenuData] = useState(Data)
  const [menuList, setMenuList] = useState(uniqueList)

  const filterdCategory = (category) => {
    if(category === "All"){
      setMenuData(Data)
      return 
    }
    const updatedList = Data.filter((curElm)=>{
      return curElm.category === category

    })
    return setMenuData(updatedList)
}

return (
  <>
    <Navbar menuList={menuList} filterdCategory={filterdCategory} />
    <Card menuData={menuData} />
  </>
)
}

export default Restaurent