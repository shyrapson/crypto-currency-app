import React,{useState} from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
const { Text, Title } = Typography;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  // useGetCryptoNewsQuery is use to get the names of crypto and it is passed to the Select
  const { data} = useGetCryptosQuery(100);
  if (!cryptoNews?.value) return "loading";

  return (
    <Row gutter={[24, 24]}>
      {/* use select to get one specific news of one cryptocurrencies we are interested in */}
      {!simplified && (
        <Col span={24}>
          <Select showSearch
          className="select-news"
          placeholder="Select a Crypto"
          optionFilterProp="children"
          onChange={(value)=>console.log(value)}
          // fiters out the options so it only shows the one fro our selected cryptocurrency
          filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
<option value="Cryptocurrency">Cryptocurrency</option>

          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news,i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                {/* added a || demo url for those that dont have image url */}
                <img style={{maxWidth:'200px',maxHeight:'100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
              </div>
              {/* if a description length is longer than 100 characters then render */}
              <p>
                {news.description > 100? `{news.description.substring(0,100)}...`:news.description}
                </p>
                <div className="provider container">
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} alt=""></Avatar>
                <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                {/* moments function gets the time from when the article is being posted to the present time */}
                <Text> {moment(news.datePublished).startOf('ss').fromNow()}</Text>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
