import { useState } from "react";


function Players(props) {

    // const data = props.data

    // const [state, setState] = useState(props.user)

    // const getValue = (event) => {
    //     console.log(event.target.value);
    //     setState(event.target.value)
    // }

    // const handleSubmit = () => {
    //     const value = state
    //     console.log('value on Submit: ' , value);
    // }

    // console.log(state)


    return (
        <div>
            <input type="text" id="input" onChange={props.value} />
            <button onClick={props.submit}>search</button>
        </div>
    )
}

export default Players;