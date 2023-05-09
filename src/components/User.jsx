// import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Successfull deletion')
                    const remaining = loadedUsers.filter(user => user._id != _id)
                    setUsers(remaining)
                }
            })
    }

    return (
        <div>
            <h1>Users Are Here</h1>
            <div style={{ border: '2px solid red', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding:'10px' }}>
                {
                    users.map(user => <div key={user._id} style={{ border: '2px solid red' }}>
                        <h4>{user.name}</h4>
                        <h5>{user.email}</h5>
                        <h5>{user._id}</h5>
                        <Link to={`/update/${user._id}`} ><button >Update</button></Link>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default User;