import React, { useState, useEffect } from "react";

function Leagues(props) {

return (
            <div className="leages-container">
                {props.leagues.map((data) => (
                    <div key={data.id} className="leagueChild">
                        <img src={data.logos.light} alt="#"/>
                        <h1>{data.name}</h1>
                    </div>
                ))}
            </div>
        )
    }

export default Leagues;






