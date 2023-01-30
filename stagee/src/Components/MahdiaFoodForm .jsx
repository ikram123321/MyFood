import React, { useState } from 'react';
import "../Styles/Mahdia.css";
import Man_Food from '../assets/Man_food.png'
import Homecom from './Homecom';
const MahdiaFoodForm = () => {
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (city.toLowerCase() === "mahdia" && region.toLowerCase() === "tunisie") {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className='mh'>
            <form onSubmit={handleSubmit} >
                <img src={Man_Food} className="food_man" />
                <table>
                    <tr>
                        <td><label>
                            City

                        </label></td><td> <input
                            type="text"
                            value={city} placeholder="mahdia"
                            onChange={e => setCity(e.target.value)}
                        /></td>
                    </tr>

                    <br />
                    <tr>
                        <td> <label>
                            Region

                        </label></td><td><input
                            type="text"
                            value={region} placeholder='tunisie'
                            onChange={e => setRegion(e.target.value)}
                        /></td>
                    </tr>

                </table>
                <br />
                <button type="submit">Submit</button>
                {isValid ? (
                    <p >Welcome, You can have your food</p>

                ) : (
                    <p>Sorry, we only deliver in Mahdia, Tunisia</p>
                )}
            </form>
        </div>
    );
};

export default MahdiaFoodForm;