import React from 'react'

const PropsExemple = ({nome, idade}) => {
  return (
    <div>
        <h3>Ola {nome}</h3>
        <h3>Eu tenho {idade} anos.</h3>
    </div>
  )
}

export default PropsExemple