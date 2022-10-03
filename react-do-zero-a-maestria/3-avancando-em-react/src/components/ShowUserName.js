import React from 'react'

const ShowUserName = ({username, name}) => {
  return (
    <div>
        <h2>O nome do usuário é: {username}</h2>
        <p>O nome real é: {name}</p>
    </div>
  )
}

export default ShowUserName