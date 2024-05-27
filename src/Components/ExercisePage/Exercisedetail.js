import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import client from "../../client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const ExerciseDetail = () => {
  const [exercise, setExercise] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { exerciseSlug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    console.log("ExerciseSlug received:", exerciseSlug); 
    client.fetch(
      `*[exerciseSlug.current == $exerciseSlug]
      { title, description, joint, instructions, media { asset ->{ _id, url }, alt } }`,
      { exerciseSlug }
    ).then((data) => {
      console.log("Fetched exercise data:", data);
      if (data && data.length > 0) {
        setExercise(data[0]);
      } else {
        console.warn("No exercise found for exerciseSlug:", exerciseSlug);
      }
      setIsLoading(false);
    }).catch(error => {
      console.error("Error fetching exercise:", error);
      setIsLoading(false);
    });
  }, [exerciseSlug]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      {exercise && (
        <>
          <h1>{exercise.title}</h1>
          {exercise.media && (
            <img src={urlFor(exercise.media).width(100).url()} alt={exercise.media.alt || 'alt'} />
          )}
          <p>Description: {exercise.description || 'N/A'}</p>
          <p>Target joint: {exercise.joint || 'N/A'}</p>
          <p>Instructions: {exercise.instructions || 'N/A'}</p>
        </>
      )}
      <button>
        <Link to="/list">Go back</Link>
      </button>
    </section>
  );
};

export default ExerciseDetail;

//code help: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js