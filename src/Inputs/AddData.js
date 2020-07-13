import React, {useState} from 'react'


function AddData() {
    const [value, setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    )

}

export default AddData