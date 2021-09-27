import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
// import {useEffect} from 'react'
import { Cryptocurrencies, News } from '../Components';
import { useGetCryptosQuery } from '../Services/cryptoApi';

const {Title} = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);    
    const globalStats = data?.data?.stats
    
    if(isFetching) return 'Loading...';

    // const res = fetch('https://coinranking1.p.rapidapi.com/coins', {  //ESTA FORMA SI FUNCIONA
    //     headers:{
    //         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    //         'x-rapidapi-key': 'f21e28f4fcmsh4e58aec1760fec7p1d6c83jsnff1f72abbdf8'
    //     }})
    // .then(data => data.json())
    // .then(response => console.log(response))

    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title='Total 24h Volumen' value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 cryptos in the world</Title>
                <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show more</Link></Title>
            </div>
            <Cryptocurrencies simplyfied/>
            <div className='home-heading-container'>
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show more</Link></Title>
            </div>
            <News simplyfied/>
        </>
    )
}

export default Homepage;