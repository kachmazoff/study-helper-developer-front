import React from "react";

import BasePage from "../../components/BasePage";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserCard from "../../components/UserCard";
import Section from "../../components/Section";
import CommonRecommendationsView from "../../views/CommonRecommendationsView";
import NewArticlesView from "../../views/NewArticlesView";
import { isAuthenticated } from "../../services/authApi";
import LastViewedArticlesView from "../../views/LastViewedArticlesView";
import RightColumn from "../../components/RightColumn";
import MainColumn from "../../components/MainColumn";
import AdvertisingCard from "../../components/AdvertisingCard";
import { ResponsiveLine } from "@nivo/line";
import data from './data.js'

function Main() {
  // <BasePage title="Главная">
  return (
    <>
      <Row className="no-gutters"> 
        <MainColumn>
          <Row>
            <Col>
              <h1>Главная</h1>
            </Col>
          </Row>
       <h1>
          <ResponsiveLine
          data={data}
         margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
         xScale={{ type: 'point' }}
         yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
         axisTop={null}
         axisRight={null}
         axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </h1>
          <Row>
            <Col lg={12} className="px-0 px-md-3">
              <Section title="Рекомендуем" type="light">
                <CommonRecommendationsView />
              </Section>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={12}
              lg={isAuthenticated() ? 6 : 12}
              xl={isAuthenticated() ? 6 : 12}
              className="px-0 px-md-3 mt-4 mt-md-5"
            >
              <Section title="Новые статьи" type="light">
                <NewArticlesView extended={!isAuthenticated()} />
              </Section>
            </Col>
            {isAuthenticated() && (
              <Col md={12} lg={6} className="px-0 px-md-3 mt-4 mt-md-5">
                <Section title="Вы смотрели" type="light">
                  <LastViewedArticlesView />
                </Section>
              </Col>
            )}
          </Row>
        </MainColumn>
        <RightColumn>
          <UserCard />
          <AdvertisingCard />
        </RightColumn>
      </Row>
    </>
  );
}

export default Main;
