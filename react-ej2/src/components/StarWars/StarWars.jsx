import React from 'react'

const StarWars = ({characters}) => {
  return (
    <div>
        <ul>
            {characters.map((character, i) => (
              <li key={i}>{character.name}</li>
            ))}
          </ul>
    </div>
  )
}

export default StarWars