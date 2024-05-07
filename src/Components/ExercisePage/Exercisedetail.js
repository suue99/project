import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import client from "../../client";


const ExerciseDetail = () => {
     const [exercise, setExercise] = useState(null); 
     const {exerciseSlug} =useParams ()
   
   useEffect(() => {
    const query = '*[_type == "exercise" && slug.current == $exerciseSlug][0]';
    client
      .fetch(query, { exerciseSlug }) // Provide slug as a parameter
      .then(setExercise) 
      .catch(console.error);
      }
      
      , [exerciseSlug]); 

      if (!exercise) {
        return <div>Loading...</div>; 
      }
  
  
  
   
   
     return (
      <div>
         <h1>{exercise.title}</h1>
      
         {exercise.media && (
    <img src={exercise.media.asset.url} alt={exercise.media.alt || exercise.title} />
)}
         <p>Description: {exercise.description}</p>
      </div>
    );
  };
  
  export default ExerciseDetail; 