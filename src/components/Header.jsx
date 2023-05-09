// import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'><button>Add User</button></Link>
            <Link to='/users'><button>Users</button></Link>
        </div>
    );
};

export default Header;