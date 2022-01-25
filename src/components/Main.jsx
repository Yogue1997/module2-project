import React, {useState, useEffect} from 'react'
import Africa from './continents/Africa'
import Asia from './continents/Asia'
import Antartica from './continents/Antartica'
import Europe from './continents/Europe'
import NorthaAmerica from './continents/NorthAmerica'
import Oceania from './continents/Oceania'
import SouthAmerica from './continents/SouthAmerica'

const apiKey = 'Xr0A62YZGlP3S4msTJwT1f9a21xznKhPwLw0qQ4nQ8vq0cFu1uSGb9gr2wgo'

function Main() {


    return (
        <div className="main-container">
            <Africa />
            <Asia />
            <Antartica />
            <Europe />
            <NorthaAmerica />
            <Oceania />
            <SouthAmerica />
        </div>
    )
}

export default Main;