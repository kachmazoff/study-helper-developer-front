import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {
    checkLike,
    changeArticleLike
} from '../../services/likesApi'

function Like({ articleId }) {
    const [isLiked, setIsLiked] = React.useState(false)

    React.useEffect(() => {
        checkLike(articleId).then((res) => {
            setIsLiked(res)
        })
    }, [articleId]
    )

    const onClickHandler = React.useCallback(() => {
        changeArticleLike(articleId).then((res) =>
            setIsLiked(!isLiked)
        )
    }, [articleId, isLiked])

    return (
        <div className={isLiked ? styles.like_active : styles.like} onClick={onClickHandler}>
            <FontAwesomeIcon icon={faHeart} size="2x" />
        </div>
    )
}

export default Like