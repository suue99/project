import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import '../ExercisePage/exercise.css'



function ExerciseList() {
    const [exercises, setExerciseList] = useState([]);

    useEffect(() => {
        client
            .fetch(`
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
            )
        .then(data =>{
            console.log(data)
            setExerciseList(data)
        } )
            .catch(console.error);
    }, []);





    return (
     
            <div>
                <div className="exercise-list"> 
                    {exercises.map((exercise) => (
                        <article key={exercise.slug ? exercise.slug.current : exercise.title} className="exercise-item"> 
                            {exercise.media && (
                                <img src={exercise.media.asset.url} alt={exercise.media.alt || exercise.title} />
                            )}
                            <h3>{exercise.title}</h3> 
                           
                            {exercise.slug && (
                                <Link className="xlink" to={`/exercise/${exercise.slug.current}`}>More details</Link>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        );

    }
     


export default ExerciseList;
