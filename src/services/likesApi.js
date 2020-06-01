import { getQuery, postQuery } from './commonApi'

const endpoint = '/likes'

function checkLike(articleId){
    return getQuery(endpoint + `/check/${articleId}`)
}

function getLikedArticlesOfUser(){
    return getQuery(endpoint + `/favorites`)
}

function changeArticleLike(articleId){
    return postQuery(endpoint + `/article/${articleId}`)
}

export {
    checkLike,
    getLikedArticlesOfUser,
    changeArticleLike
}