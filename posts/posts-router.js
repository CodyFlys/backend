const express = require('express');

const router = express.Router();

const db = require("./posts-model")
const userDb = require("../users/users-model")

const validatePost = require('../middleWare/validate-post');
const validateUserId = require('../middleWare/validate-user-id');
const validatePostId = require('../middleWare/validate-post-id');

router.get('/', (req, res) => {
  db.getPosts()
  .then(posts => {
    res.status(200).json({posts: posts})
  })
  .catch(error => {
    res.status(500).json({message: "could not retrieve data"})
  })
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    db.getPostsById(id)
    .then(posts => {
      res.status(200).json({posts: posts})
    })
    .catch(error => {
      res.status(500).json({message: "could not retrieve data"})
    })
  });

  router.get('/user/:id', (req, res) => {
    const id = req.params.id
    db.getPostsByUserId(id)
    .then(posts => {
      res.status(200).json({posts: posts})
    })
    .catch(error => {
      res.status(500).json({message: "could not retrieve data"})
    })
  });


  router.post('/user/:id', validatePost, validateUserId, (req, res) => {
    const id = req.params.id
    const newPost = {
        ...req.body,
        user_id: id
    } 
    db.addPosts(newPost)
    .then(post => {
      res.status(201).json({posts: post})
    })
    .catch(error => {
      res.status(500).json({message: "Could not retrieve data"})
    })
})



  router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.removePosts(id)
  .then(post => {
      if (post) {
          res.status(200).json(`succesfully deleted post ${id}`);
      } else {
          res.status(404).json({error: "The post with the specified ID does not exist."})
      }
  })
});

router.put('/:id', validatePost, validatePostId, (req, res) => {
    const id = req.params.id
    const updatedPost = {
      ...req.body,
  } 
      db.updatePosts(id, updatedPost)
      .then(post => {
        res.status(200).json(post)
      }).catch(error => {
          res.status(500).json({ error: 'The post information could not be modified' })
      })
  
  });

module.exports = router;