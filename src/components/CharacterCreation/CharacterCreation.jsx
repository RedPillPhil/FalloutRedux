import React, { useState } from 'react'
import SpecialInput from './SpecialInput/SpecialInput.jsx'
import SpecialOutput from './SpecialOutput/SpecialOutput.jsx'
import SubmitCharacter from './SubmitCharacter/SubmitCharacter.jsx'
import saveCharacter from '../../store/actions/saveCharacterAction'
import SingleStat from './SingleStat/SingleStat.jsx'
import Input from '../Shared/Input/Input.jsx'
import { useSelector, useDispatch } from 'react-redux'

import pic from '../../pics/vaultboy.png'

import './CharacterCreation.scss'

const CharacterCreation = ({ getStatPage }) => {
  const [characterName, setCharacterName] = useState('')
  const [hoveredStat, setHoveredStat] = useState('strength')

  const characterStats = useSelector((state) => state.characterStats)
  const dispatch = useDispatch()

  console.log(characterName)

  const saveStats = (name) => {
    dispatch(saveCharacter(name))
  }

  const alertUncompleted = (remainingPoints) => {
    alert(
      `You have ${remainingPoints} unspent points!` +
        (characterName.length < 3
          ? " Player's name should be at least 3 characters long!"
          : '')
    )
  }

  const handleNameChange = (e) => {
    setCharacterName(e.target.value)
  }

  const saveName = () => {
    localStorage.setItem('name', characterName)
    localStorage.setItem(
      'stats',
      JSON.stringify({
        strength: characterStats.special.strength,
        perception: characterStats.special.perception,
        endurance: characterStats.special.endurance,
        charisma: characterStats.special.charisma,
        intelligence: characterStats.special.intelligence,
        agility: characterStats.special.agility,
        luck: characterStats.special.luck,
      })
    )
    saveStats(characterName)
  }

  return (
    <div className='character-creation'>
      <div className='character-creation__left-side'>
        <img className='character-creation__vaultboy' src={pic} />
        <div>
          <label className='character-creation__name'>
            <span>CHARACTER NAME:</span>
            <Input text={characterName} updateText={handleNameChange} />
          </label>
          <div className='character-creation__output-wrapper'>
            <SpecialInput
              getStatPage={getStatPage}
              setHoveredStat={setHoveredStat}
            />
            <SpecialOutput />
          </div>
          <div className='character-creation__remaining-points'>
            Remaining points: {characterStats.special.remainingPoints}
          </div>
          <SubmitCharacter
            saveName={saveName}
            alertUncompleted={alertUncompleted}
          />
        </div>
      </div>
      <div className='character-creation__right-side'>
        <SingleStat statName={hoveredStat.toLocaleLowerCase()} />
      </div>
    </div>
  )
}

export default CharacterCreation
