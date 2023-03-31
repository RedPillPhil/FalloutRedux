import React from 'react'
import { useSelector } from 'react-redux'
import { inventoryItems } from '../../../../../constants/inventoryItems.jsx'
import './Inventory.scss'

const Inventory = () => {
  const inventory = useSelector((state) => state.characterStats.inventory)
  console.log(inventory)

  return (
    <main className='inventory'>
      {inventoryItems.map((item, index) => {
        return (
          <div
            className='inventory__item'
            key={index}
            style={{
              backgroundImage: "url('" + item.image + "')",
            }}
          >
            <label className='inventory__name'>{item.name}</label>
            <p className='inventory__amount'>{item.amount}</p>
          </div>
        )
      })}
    </main>
  )
}

export default Inventory
