import React, { useState } from "react";
import '../Hompage/slider.css';

function Slider () {
    const [emoji, setEmoji] = useState('&#128528');

    const emojis = ['&#128513', '&#128516', '&#128528', '&#128534', '&#128557'];

    const handleChange = (e) => {
        const rangeValue = e.target.value;
        setEmoji(emojis[rangeValue]);
    };

    return (
        <div className="range-container">
            <h3 className="range-h3">How are you feeling today?</h3>
            <div className="emoji" dangerouslySetInnerHTML={{ __html: emoji }}></div>
            <div className="slider">
                <span className="amazing">Amazing</span>
                <input type="range" defaultValue="2" min="0" max="4" step="1" onChange={handleChange} />
                <span className="horrible">Horrible</span>
            </div>
        </div>
    );
}

export default Slider;
