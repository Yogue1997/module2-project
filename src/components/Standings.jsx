import React, { useState} from "react";






function Standings(props) {

    const [active, setActive] = useState(true)

    const [selectedLeague, setSelectedLeague] = useState(props.league)
    const [selectedYear, setSelectedYear] = useState(props.year)

    const data = props.standing



    return (
        <div className="standingscontainer">
            <div className="selectCont">
                <select
                    name="select-league"
                    id="select-league"
                    defaultValue={selectedLeague}
                    onChange={(e) => setSelectedLeague(e.target.value)}
                >
                    <option value="ang.1">Argentine Liga Profesiol de Fútbol</option>
                    <option value="aus.1">Australian A-League</option>
                    <option value="bra.1">Brazilian Serie-A</option>
                    <option value="chn.1">Chinese Super League</option>
                    <option value="ned.1">Dutch Everdisie</option>
                    <option value="eng.1">English Premier League</option>
                    <option value="fra.1">French Ligue</option>
                    <option value="ger.1">German Bundesliga</option>
                    <option value="idn.1">Indonesia Liga 1</option>
                    <option value="ita.1">Italian Serie A</option>
                    <option value="jpn.1">Japanese J league</option>
                    <option value="mys.1">Malysian Super League</option>
                    <option value="mex.1">Mexican Liga BBVA MX</option>
                    <option value="por.1">Portuguese Liga</option>
                    <option value="rus.1">Russian Primera League</option>
                    <option value="sgp">Singaporean Premier League</option>
                    <option value="esp.1">Spanish Primera League</option>
                    <option value="tha.1">Thai Premier League</option>
                    <option value="uga.1">Ugandan Super League</option>
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
            <div className="stadingRes">
                { data.map((data, index) => {
                    <div key={index} className="standingDiv">
                        <h1>
                            <span>
                                {`${index + 1}.`}
                                <img src={data.team.logos[0].href} alt="#" />
                            </span>
                            {data.team.shortDisplayName}
                        </h1>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Standings;