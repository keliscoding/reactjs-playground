import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Tobias", "Maria"])

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "João", age: 28},
        {id: 3, name: "Pedro", age: 44},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter(user => randomNumber !== user.id)
        });
    }

  return (
    <div>
        <ul>
            {/* é uma má prática usar o index como key */}
            {users.map(({id, name, age}) => (
                <li key={id}>name: {name}, age: {age}</li>
            ) )}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender