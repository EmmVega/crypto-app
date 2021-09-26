import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import Title from 'antd/lib/skeleton/Title';
import {useEffect} from 'react'

import { useGetCryptosQuery } from '../Services/cryptoApi';

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();    
    console.log(data)
    

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
                <Col span={12}><Statistic title='Total Cryptocurrencies' value='5' /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value='5' /></Col>
                <Col span={12}><Statistic title='Total Market Cap' value='5' /></Col>
                <Col span={12}><Statistic title='Total 24h Volumen' value='5' /></Col>
                <Col span={12}><Statistic title='Total Markets' value='5' /></Col>
            </Row>
        </>
    )
}

export default Homepage;