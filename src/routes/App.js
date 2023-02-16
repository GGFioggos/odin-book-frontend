import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';

function App() {
    const { userInfo } = useContext(UserContext);
    console.log(userInfo);
    return <div>Hello {userInfo && <div>{userInfo.firstName}</div>}</div>;
}

export default App;
