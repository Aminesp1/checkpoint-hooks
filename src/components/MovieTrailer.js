import { Rating } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

const MovieTrailer = ({ movies }) => {
    console.log(useParams())
    const { title } = useParams()
    const movie = movies.find(el => el.title === title)
    console.log(movie);
    return (
        <div>
            <h1>Title:{movie.title}</h1>
            <img src={movie.posterURL} alt="" />
            <p>Description:{movie.description} </p>
            <Rating value={0} readOnly />



            <iframe width="560" height="315" src={movie.trailer}></iframe>
        </div>
    )
}

export default MovieTrailer 
