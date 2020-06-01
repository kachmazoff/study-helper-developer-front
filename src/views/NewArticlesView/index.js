import React from 'react'

import { getNewArticles } from '../../services/articlesApi'
import ArticlesList from '../../components/ArticlesList';
import ArticlePreview from '../../components/ArticlePreview';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MyLoader from '../../components/MyLoader';

function NewArticlesView({ extended }) {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    getNewArticles().then((res) => {
      setData(res)
      setIsLoading(false)
    })

  }, [])

  return (
    <div>
      {
        isLoading && <MyLoader />
      }
      {
        (!isLoading && Array.isArray(data) && data.length > 0)
        && <>
          {
            extended
              ?
              <Row>
                <Col md={6}>
                  <ArticlesList data={data.slice(0, data.length / 2)} component={ArticlePreview} />
                </Col>
                <Col md={6}>
                  <ArticlesList data={data.slice(data.length / 2)} component={ArticlePreview} />
                </Col>
              </Row>
              :
              <ArticlesList data={data.slice(0, Math.min(data.length, 5))} component={ArticlePreview} />
          }
        </>
      }
      {
        (!isLoading && Array.isArray(data) && data.length === 0)
        && <p>Ничего не найдено :-(</p>
      }
    </div>
  )
}

export default NewArticlesView
