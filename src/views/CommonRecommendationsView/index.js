import React from 'react'

import { getCommonRecommendations } from '../../services/recommendationApi'
import ArticlesList from '../../components/ArticlesList';
import ArticlePreview from '../../components/ArticlePreview';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function CommonRecommendationsView() {
  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    getCommonRecommendations()
      .then((res) => {
        setIsLoading(false)
        if (Array.isArray(res)) {
          setData(res)
        }
      })
  }, [])

  return (
    <div>
      {
        isLoading && <p>Загрузка...</p>
      }
      {
        (!isLoading && Array.isArray(data) && data.length > 0)
        && <Row>
          <Col md={6}>
            <ArticlesList data={data.slice(0, Math.min(data.length / 2, 5))} component={ArticlePreview} />
          </Col>
          <Col md={6}>
            <ArticlesList data={data.slice(Math.min(data.length / 2, 5), Math.min((data.length / 2) * 2, 10))} component={ArticlePreview} />
          </Col>
        </Row>
      }
      {
        (!isLoading && Array.isArray(data) && data.length === 0)
        && <p>Ничего не найдено :-(</p>
      }
    </div>
  )
}

export default CommonRecommendationsView
