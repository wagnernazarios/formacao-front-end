import React, { useState } from 'react'

function ListRender() {
    const [list] = useState(["Wagner", "Jean", "Roberto"]);

    const [users, setUsers] = useState([
        { id: 1, nome: "Wagner", idade: 32 },
        { id: 2, nome: "Jean", idade: 26 },
        { id: 3, nome: "Roberto", idade: 29 },
    ])

    const deleteRandomUser = () => {

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
    }


    return (
        <div>
            {/* lista sem key*/}

            <ul>
                {list.map((user) => (
                    <li >{user}</li>
                ))}
            </ul>
            {/* lista com key*/}

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.nome} - {user.idade} anos</li>
                ))}
            </ul>


            <button onClick={deleteRandomUser}>Delete random users</button>
        </div>


    )
}

export default ListRender