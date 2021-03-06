import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Leagues from './Leagues'
import Standings from './Standings';
 


function Home() {

    const [active, setActive] = useState(true)
    const [dataLeagues, setDataLeagues] = useState([]);
    const [dataPlayers, setDataPlayers] = useState([])
    const [standings, setStandings] = useState([])
    const defaultLeagues = 'eng.1'
    const defaultYears = '2012'

    // console.log(dataPlayers);


    const [usr, setUsr] = useState('messi')

    // useEffect(() => {
    //     const userData = localStorage.getItem('usr-list')
    //     if(userData) {
    //         setUsr(JSON.parse(userData))
    //     }
    // }, [])


    // useEffect( () => { 
    //     localStorage.setItem('usr-list', JSON.stringify(usr))
    // })




    // const handleSubmit = () => {
    //     const value = dataPlayers
    //     // window.location.reload(true);
    //     console.log('value on Submit: ', value);
        
    // }



    // const getValue = (event) => {
        
    //     setUsr(event.target.value)
    //         console.log(event.target.value)
    // }

    // console.log(usr);


    const fectchData = () => {
        const leagueApi = 'https://api-football-standings.azharimm.site/leagues'
        const playersApi = `https://soccer.sportmonks.com/api/v2.0/players/search/${usr}?api_token=Xr0A62YZGlP3S4msTJwT1f9a21xznKhPwLw0qQ4nQ8vq0cFu1uSGb9gr2wgo`
        const standingsApi = `https://api-football-standings.azharimm.site/leagues/${defaultLeagues}/standings?season=${defaultYears}`
        const getLeagues = axios.get(leagueApi)
        const getPlayers = axios.get(playersApi)
        const getStandings = axios.get(standingsApi)

        axios.all([getLeagues, getPlayers, getStandings]).then(
            axios.spread((...allData) => {
                const allLeagueInfos = allData[0].data.data
                const allPlayerInfos = allData[1].data.data
                const allStandingsInfos = allData[2].data.data.standings

                setDataLeagues(allLeagueInfos)
                setDataPlayers(allPlayerInfos)
                setStandings(allStandingsInfos)
            })
        )
    }

    useEffect(() => {
        fectchData()
    }, [])


    // console.log(usr);

    return (
        <div className="main-container">
            <div className='tabs'>
                <div className='leagesTab' onClick={() => setActive(true)}>
                    <h2 style={{ color: active ? "red" : null }}>Standings</h2>
                </div>
                <div className='standingsTab' onClick={() => setActive(false)}>
                    <h2 style={{ color: !active ? "red" : null }}>Leagues</h2>
                </div>
            </div>
            {active ? <Standings/> : <Leagues leagues={dataLeagues} />  }
        </div>
    )
}

export default Home;






















   // const user = inputUser.value
    // const url = `https://soccer.sportmonks.com/api/v2.0/players/search/${user}?api_token=Xr0A62YZGlP3S4msTJwT1f9a21xznKhPwLw0qQ4nQ8vq0cFu1uSGb9gr2wgo`


    // useEffect(() => {
    //     axios('')
    //         .then(res => setData(res.data.data))
    // }, [])












// const apiToken = `Xr0A62YZGlP3S4msTJwT1f9a21xznKhPwLw0qQ4nQ8vq0cFu1uSGb9gr2wgo`
// const leagesApi = `https://soccer.sportmonks.com/api/v2.0/leagues?api_token=${apiToken}`




// const [leages, setLeages] = useState([])

// useEffect(() => {
//     loadData()
// }, [])

// const loadData = async () => {
//     await fetch(leagesApi)
//         .then(response => response.json())
//         .then(data => setLeages(data))
// }
// console.log(leages);