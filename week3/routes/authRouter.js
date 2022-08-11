const express = require("express");
const authRouter = express.Router();
const Comment = require('../models/comment.js');


//POST CREATE ONE //
authRouter.post('/', (req, res, next) => {
    const newComment = new Comment(req.body);
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500);
            return next(err);
        }
        return res.status(201).send(savedComment);
    });
});

// GET ONE //
authRouter.get('/:commentId', (req, res, next) => {
    Comment.find({ _id: req.params.commentId }, (err, comments) => {
        if(err){
            res.status(500);
            return next(err);
        }
        return res.status(200).send(comments);
    });
});


// GET  All //
authRouter.get('/', (req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500);
            return next(err);
        }
        return res.status(200).send(comments);
    });
});



// PUT UPDATE ONE //
authRouter.put('/:commentId', (req, res, next) => {
    Comment.findOneAndUpdate(
        { _id: req.params.commentId },
        req.body,
        { new: true },
        (err, updatedComment) => {
            if(err){
                res.status(500);
                return next(err);
            }
            return res.status(201).send(updatedComment);
        }
    );
});



// DELETE ONE //
authRouter.delete('/:commentId', (req, res, next) => {
    Comment.findOneAndDelete({ _id: req.params.commentId }, (err, deletedComment) => {
        if(err){
            res.status(500);
            return next(err);
        }
      res.status(200).send(`This has been successfully deleted "${deletedComment.title}"`);
    });
});


module.exports = authRouter;