const express = require('express')
const MoviesService = require('../services/movies.js')

const {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
} = require('../utils/schemas/movies.js')

const validationHandler = require('../services/middleware/validationHandler.js')

const joi = require('@hapi/joi')

function moviesApi(app){
    const router = express.Router()
    app.use("/api/movies", router)

    const moviesService = new MoviesService()

    router.get("/", async function(req, res, next){
        const { tags } = req.query
        try{
            const movies = await moviesService.getMovies({ tags })
            //throw new Error('Error Getting Movies')
            res.status(200).json({
                data: movies,
                message: 'Movies listed'
            })
        }catch(err){
            next(err)
        }
    })

    router.get("/:movieId", validationHandler(joi.object({movieId: movieIdSchema}), 'params' ), async function(req, res, next){
        const { movieId } = req.params
        try{
            const movie = await moviesService.getMovie({ movieId })
            res.status(200).json({
                data: movie,
                message: 'Movie retrieved'
            })
        }catch(err){
            next(err)
        }
    })
    router.post("/", validationHandler(createMovieSchema), async function(req, res, next){
        const { body:movie } = req
        try{
            const createMovieId = await moviesService.createMovie({ movie })
            
            res.status(201).json({
                data: createMovieId,
                message: 'Movies created'
            })
        }catch(err){
            next(err)
        }
    })
    router.put("/:movieId", validationHandler(joi.object({movieId: movieIdSchema}), validationHandler(updateMovieSchema), 'params'), async function(req, res, next){
        const { movieId } = req.params
        const { body: movie } =  req
        try{
            const UpdatedMovieId = await moviesService.updateMovie({ movieId, movie })
            res.status(200).json({
                data: UpdatedMovieId,
                message: 'Movie updated'
            })
        }catch(err){
            next(err)
        }
    })
    router.delete("/:movieId", validationHandler(joi.object({movieId: movieIdSchema}), 'params'), async function(req, res, next){
        const { movieId } = req.params
        try{
            const deletedMovie = await moviesService.deleteMovie({ movieId })
            res.status(200).json({
                data: deletedMovie,
                message: 'Movie deleted'
            })
        }catch(err){
            next(err)
        }
    })

    router.patch("/:movieId", async function(req, res, next){
        const { movieId } = req.params
        const { body:movie } = req
        try{
            const partialUpdateMovie = await moviesService.partialUpdateMovie({ movieId, movie })
            res.status(200).json({
                data: partialUpdateMovie,
                message: 'Movie partial updated'
            })

        }catch(err){
            next(err)
        }
    })
}


module.exports = moviesApi