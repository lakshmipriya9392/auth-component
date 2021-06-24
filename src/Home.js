import React from 'react'

export default function Home({handleLogout}) {
    return (
        <div>
            <h1>Home Component</h1>
            <button onClick = {handleLogout}>Signout</button>
        </div>
    )
}
