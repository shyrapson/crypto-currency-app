import React from "react";
import { Route, Routes, Link} from "react-router-dom";
import { Layout, Typography, Space,  } from "antd";
import { Navbar,Exchanges,Homepage,Cryptocurrencies,News,CryptoDetails } from "./components";
import "./App.css";


const App = () => {
  return (
    <div className="app">
    
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
            <Route path="/" element={<Homepage/>}/>
              <Route path="/exchange" element={<Exchanges/>}/>
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              {/* 'coinid' means it can be dynamic{1 or 2 or 3 ....} */}
              <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
              <Route path="/news" element={<News/>}/>
            </Routes>
          </div>
        </Layout>
        <div className="footer" >
        <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
          Cryptoverse <br/>
          All rights Reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
     
    </div>
  );
};

export default App;
