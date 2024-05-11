import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import '../ExercisePage/exercise.css'

function ExerciseList() {
    const [exercises, setExerciseList] = useState([]);
    const [filteredExercises, setFilteredExercises] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        client.fetch(`
            *[_type == "exercise"]{
                title,
                slug,
                description,
                joint,
                type,
                instructions,
                media{ 
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
            }`
        ).then(data => {
            setExerciseList(data);
            setFilteredExercises(data); // Initialize filteredExercises with all exercises
        }).catch(console.error);
    }, []);

    useEffect(() => {
        // Filter exercises based on the filter value
        const filteredData = exercises.filter(exercise =>
            exercise.title.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredExercises(filteredData);
    }, [exercises, filter]);

    return (
        <div>
            <div className="exercise-filter">
                <input
                    type="text"
                    placeholder="Filter exercises..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <div className="exercise-list">
                {filteredExercises.map((exercise) => (
                    <article key={exercise.slug ? exercise.slug.current : exercise.title} className="exercise-item">
                        {exercise.media && (
                            <img src={exercise.media.asset.url} alt={exercise.media.alt || exercise.title} />
                        )}
                        <h3>{exercise.title}</h3>
                        {exercise.slug && (
                            <Link className="xlink" to={`/exercise/${exercise.slug.current}`}>More</Link>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
}

export default ExerciseList;
