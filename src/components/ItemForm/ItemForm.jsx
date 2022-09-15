import React, { useState } from 'react';

// POST REQUEST HERE

function ItemForm(getItems) {

    const [item, setItem] = useState({
                                    name: '',
                                    quantity: 0,
                                    units: ''
                                    })

    const addItem = (newItem) => {
        console.log(newItem);
        axios.post('/students', newStudent)
            .then(response => {
                console.log('/students POST successful', response);
                getStudents();
            })
            .catch(error => {
                console.log('/students POST error', error);
            });
    }

    return (
        <form onSubmit={addItem}>
            <input onChange={(event) => setItem({})}
                    value={student.github_name}
                    placeholder="GitHub username" />
            <input type="submit" value="Submit" />
        </form>
    );
}







export default ItemForm;