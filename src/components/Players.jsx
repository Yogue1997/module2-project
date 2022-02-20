import axios from "axios";
import { useState, useEffect } from "react";


function Players(props) {


    const [user, setUser] = useState('messi')
    const [data, setData] = useState([])

    // useEffect(() => {
    //     axios(`https://soccer.sportmonks.com/api/v2.0/players/search/${user}?api_token=Xr0A62YZGlP3S4msTJwT1f9a21xznKhPwLw0qQ4nQ8vq0cFu1uSGb9gr2wgo`)
    //         .then(res => {
    //             console.log(res.data.data);
    //             setData(res.data.data)
    //         })
    // }, [user])


    const fetchPlayer = async () => {
        const { data } = await axios.get(`https://soccer.sportmonks.com/api/v2.0/players/search/${user}?api_token=Xr0A62YZGlP3S4msTJwT1f9a21xznKhPwLw0qQ4nQ8vq0cFu1uSGb9gr2wgo`)
        setData(data.data)
    }
    console.log(data);


    // const [active, setActive] =  useState(true)



    const getValue = (event) => {
        console.log(event.target.value);
        setUser(event.target.value)
    }

    console.log(user);


    return (
        <div id="mainPlayers">
            <div id="playerInput">
                <input type="text" id="input" onChange={getValue} 
                placeholder="type a soccer player name..." size={50}/>
                <button onClick={fetchPlayer} >search</button>
            </div>
            <div id="playerDiv">
                {data.map((data, index) => (
                    // <h1 key={index} id="playerCard">
                    //     <span>
                    //         <img src={data.image_path} alt="#"
                    //             style={{ width: "40px" }} />
                    //     </span>
                    //     {data.fullname} 
                    //     <div>
                    //         <p> Birth date: {data.birthdate}</p>
                    //     </div>
                    // </h1>
                    <div className="playerCard">
                        <img src={data.image_path} alt="" />
                        <h2>{data.fullname}</h2>
                        {/* <p>Common Name: {data.common_name}</p> */}
                        <h3>Birth date: {data.birthdate}</h3>
                        <h3>Nationality: {data.nationality}</h3>
                        <h3>Birthcountry: {data.birthcountry}</h3>
                    </div>
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
