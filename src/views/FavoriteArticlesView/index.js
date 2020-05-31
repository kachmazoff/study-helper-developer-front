import React from 'react'

import {
  useLocation
} from "react-router-dom";

import { getArticles, getArticlesByType } from '../../services/articlesApi'
import ArticlesList from '../../components/ArticlesList';
import ArticlePreview from '../../components/ArticlePreview';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from '../../components/Card';
import MyLoader from '../../components/MyLoader';
import styles from './styles.module.css'
import { getLikedArticlesOfUser } from '../../services/likesApi'

function FavoriteArticlesView(props) {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
      getLikedArticlesOfUser().then((res) => {
        setData(res)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      {
        isLoading && <div className={ styles.div_modify }><MyLoader height={300} width={300}/></div>
      }
      {
        (!isLoading && Array.isArray(data) && data.length > 0)
        && <Card type="light">
          <Row>
            <Col md={6}>
              <ArticlesList data={data.slice(0, data.length / 2)} component={ArticlePreview} />
            </Col>
            <Col md={6}>
              <ArticlesList data={data.slice(data.length / 2)} component={ArticlePreview} />
            </Col>
          </Row>
        </Card>
      }
      {
        (!isLoading && Array.isArray(data) && data.length === 0)
        && <p>Ничего не найдено :-(</p>
      }
    </div>
  )
}

export default FavoriteArticlesView
