import React, { useState, useEffect, useContext } from 'react';
import Feed from '../components/Feed';
import Header from '../components/Header';
import { UserContext } from '../UserContext';

function App() {
    const { userInfo } = useContext(UserContext);

    return (
        <div>
            <Header />
            <div>
                {userInfo == null && (
                    <h2>Hello! Please log in or register to gain access</h2>
                )}
                {userInfo != null && <Feed />}
            </div>
        </div>
    );
}

export default App;
