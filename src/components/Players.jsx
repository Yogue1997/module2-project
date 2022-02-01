import axios from "axios";
import { useState, useEffect } from "react";


function Players(props) {


    const [user, setUser] = useState('messi')
    const [data, setData] = useState([])

    useEffect(() => {
        axios(`https://soccer.sportmonks.com/api/v2.0/players/search/${user}?api_token=Xr0A62YZGlP3S4msTJwT1f9a21xznKhPwLw0qQ4nQ8vq0cFu1uSGb9gr2wgo`)
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data)
            })
    }, [user])

    const handleSubmit = () => {
        const value = data
        console.log('value on Submit: ', value);
    }

    const getValue = (event) => {
        console.log(event.target.value);
        setUser(event.target.value)
    }

    console.log(user);


    return (
        <div >
            <div id="playerInput">
                <input type="text" id="input" onChange={getValue} />
                <button onClick={handleSubmit}>search</button>
            </div>
            <div>
                {data.map((data, index) => (
                    <h1 key={index} id="playerDiv">
                        <span>
                            <img src={data.image_path} alt="#"
                                style={{ width: "40px" }} />
                        </span>
                        {data.fullname}
                        <div>
                            <p>Birth date: {data.birthdate}</p>
                        </div>
                    </h1>
                ))}
            </div>
        </div>
    )
}

export default Players;




    // const data = props.data

    // const [state, setState] = useState(props.user)

    // const getValue = (event) => {
    //     console.log(event.target.value);
    //     setUser(event.target.value)
    // }

    // const handleSubmit = () => {
    //     const value = user
    //     console.log('value on Submit: ' , value);
    // }

    // console.log(state)
