import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.jsx';

// PUT GET IN HERE :)
function App() {
    let [itemList, setItemList] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
