import React, { useState, useEffect } from "react";
import "react-loader-spinner"
import axios from "axios";





function Standings(props) {



    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedLeague, setSelectedLeague] = useState("eng.1")
    const [selectedYear, setSelectedYear] = useState("2021")


    useEffect(() => {
        setLoading(true)
        axios(`https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`)
            .then(response => {
                console.log(response.data.data.standings);
                setData(response.data.data.standings);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [selectedYear, selectedLeague])



    return (
        <div className="standingscontainer">
            <div className="selectCont">
                <select
                    name="select-league"
                    id="select-league"
                    defaultValue={selectedLeague}
                    onChange={(e) => setSelectedLeague(e.target.value)}
                >
                    <option value="arg.1">Argentine Liga Profesiol de Fútbol</option>
                    <option value="aus.1">Australian A-League</option>
                    <option value="bra.1">Brazilian Serie-A</option>
                    <option value="chn.1">Chinese Super League</option>
                    <option value="ned.1">Dutch Everdisie</option>
                    <option value="eng.1">English Premier League</option>
                    <option value="fra.1">French Ligue</option>
                    <option value="ger.1">German Bundesliga</option>
                    <option value="ind.1">Indonesia Liga 1</option>
                    <option value="ita.1">Italian Serie A</option>
                    <option value="jpn.1">Japanese J league</option>
                    <option value="mex.1">Mexican Liga BBVA MX</option>
                    <option value="por.1">Portuguese Liga</option>
                    <option value="rus.1">Russian Primera League</option>
                    <option value="esp.1">Spanish Primera League</option>
                    <option value="tur.1">Turkish Super league</option>
                </select>
                <select
                    name="select-year"
                    id="select-year"
                    onChange={(e) => setSelectedYear(e.target.value)}
                    defaultValue={selectedYear}
                >
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
            </div>
            <table className="stadingRes">
                <tr>
                    <th>Rank </th>
                    <th>Team </th>
                    <th>Points </th>
                    <th>Games Played</th>
                    <th>Goals For </th>
                    <th>Goals Against </th>
                    <th>Wins </th>
                    <th>Draws </th>
                    <th>Loses </th>
                </tr>
                {data.map((data, index) => (
                    // <div key={data.team.id} className="standingsInfDiv">
                    //     <h1>
                    //         <span>
                    //             {`${index + 1}.`}<img src={data.team.logos[0].href} alt="#" 
                    //             style={{width: "30px"}} />
                    //         </span>
                    //         {data.team.shortDisplayName}
                    //     </h1>
                    // </div>
                    <tr className="team-data">
                        <td className="wdl">{`${index + 1}`}</td>
                        <td className="logo-name"><img src={data.team.logos[0].href} alt="#" style={{width: "20px"}} /> {data.team.shortDisplayName}</td>
                        <td className="wdl">{data.stats[6].value}</td>
                        <td className="wdl">{data.stats[3].value}</td>
                        <td className="wdl">{data.stats[4].value}</td>
                        <td className="wdl">{data.stats[5].value}</td>
                        <td className="wdl">{data.stats[0].value}</td>
                        <td className="wdl">{data.stats[2].value}</td>
                        <td className="wdl">{data.stats[1].value}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Standings;










// { data.map((data, index) => {
//     <div key={index} className="standingDiv">
//         <h1>
//             <span>
//                 {`${index + 1}.`}
//                 <img src={data.team.logos[0].href} alt="#" />
//             </span>
//             {data.team.shortDisplayName}
//         </h1>
//     </div>
// })}