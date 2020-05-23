const db = require('../data/dbConfig');

function getPosts() {
    return db('posts')
}

function getPostsById(id) {
    return db('posts')
        .where({ 'posts.id': id })
}


function getPostsByUserId(id) {
    return db('posts')
        .where({ 'posts.user_id': id })
}

function addPosts(newPost) {
    return db('posts').insert(newPost)
}

function updatePosts(id, changes) {
    return db('posts')
    .where({ 'posts.id': id})
    .update(changes)
}

function removePosts(id) {
    return db('posts')
        .where('id', id)
        .del();
}

module.exports = {
    getPosts,
    getPostsById,
    getPostsByUserId,
    addPosts,
    updatePosts,
    removePosts
}