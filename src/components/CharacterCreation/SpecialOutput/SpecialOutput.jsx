import React from 'react'
import { useSelector } from 'react-redux'

import './SpecialOutput.scss'

const SpecialOutput = () => {
  const specialStats = useSelector((state) => state.characterStats.special)
  return (
    <section className='special-output'>
      <ul className='special-output__stats-list'>
        <li>{specialStats.strength}</li>
        <li>{specialStats.perception}</li>
        <li>{specialStats.endurance}</li>
        <li>{specialStats.charisma}</li>
        <li>{specialStats.intelligence}</li>
        <li>{specialStats.agility}</li>
        <li>{specialStats.luck}</li>
      </ul>
    </section>
  )
}

export default SpecialOutput
