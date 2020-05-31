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

function ArticlesView(props) {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const { search } = useLocation()

  React.useEffect(() => {
    setIsLoading(true)
    const params = new URLSearchParams(search)
    const typeId = params.get('type');
    if (typeId) {
      getArticlesByType(typeId).then((res) => {
        setData(res)
        setIsLoading(false)
      })
    }
    else {
      getArticles().then((res) => {
        setData(res)
        setIsLoading(false)
      })
    }
  }, [search])

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

export default ArticlesView
