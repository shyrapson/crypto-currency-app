import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import { useGetExchangesQuery } from "../services/cryptoApi.js";
import Loader from "./Loader.jsx";
const { Text,Title } = Typography;
const { Panel } = Collapse;


function Exchanges() {
  const { data, isFetching } = useGetExchangesQuery();
  if(isFetching) return <Loader/>
  console.log(data);
  const exchangeList = data?.data?.exchanges;
  return (
    <>
    
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        <Title >exchanges OTW...., thank you....</Title>
        {/* {exchangeList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                }
              >
                <Col dangerouslySetInnerHTML={{ __html: exchange?.description }} />;
              </Panel>
            </Collapse>
          </Col>
        ))} */}
      </Row>
    </>
  );
}

export default Exchanges;
