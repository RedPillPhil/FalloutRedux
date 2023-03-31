import React from 'react'
import { useSelector } from 'react-redux'
import {
  vaultboyfullhp,
  vaultboynohp,
} from '../../../../../constants/imageImports.jsx'

import './Stats.scss'

const Stats = ({ injuries }) => {
  const characterStats = useSelector((state) => state.characterStats)

  console.log(characterStats)
  const health = 100 + 10 * characterStats.special.strength

  return (
    <div className='pipboy-special'>
      <section className='pipboy-stats'>
        <h3>{localStorage.getItem('name')}</h3>
        <img src={health > 50 ? vaultboyfullhp : vaultboynohp} />
        <div>Health: {health}</div>
        <div>Injuries: {injuries}</div>
      </section>
      <ul className='special'>
        <li>
          STRENGTH:{' '}
          <div className='special-item'>{characterStats.special.strength}</div>
        </li>
        <li>
          PEPCEPTION:{' '}
          <div className='special-item'>
            {characterStats.special.perception}
          </div>
        </li>
        <li>
          ENDURANCE:{' '}
          <div className='special-item'>{characterStats.special.endurance}</div>
        </li>
        <li>
          CHARISMA:{' '}
          <div className='special-item'>{characterStats.special.charisma}</div>
        </li>
        <li>
          INTELLIGENCE:{' '}
          <div className='special-item'>
            {characterStats.special.intelligence}
          </div>
        </li>
        <li>
          AGILITY:{' '}
          <div className='special-item'>{characterStats.special.agility}</div>
        </li>
        <li>
          LUCK:{' '}
          <div className='special-item'>{characterStats.special.luck}</div>
        </li>
      </ul>
    </div>
  )
}

export default Stats
