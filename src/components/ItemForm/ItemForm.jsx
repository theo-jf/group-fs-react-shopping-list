import React, { useState } from 'react';

// POST REQUEST HERE

function ItemForm() {
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => setStudent({github_name: event.target.value})}
                    value={student.github_name}
                    placeholder="GitHub username" />
            <input type="submit" value="Submit" />
        </form>
    );
}







export default ItemForm;