import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import { UserContext } from '../UserContext';

function App() {
    const { userInfo } = useContext(UserContext);

    return (
        <div>
            <Header />
            <div>
                {userInfo == null && (
                    <div>Hello! Please log in or register to gain access</div>
                )}
                {userInfo != null && <div>Hello {userInfo.lastName}</div>}
            </div>
        </div>
    );
}

export default App;
