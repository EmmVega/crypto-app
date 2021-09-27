import React, { useState } from 'react'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../Services/cryptoApi';
import millify from 'millify';
import { useParams } from 'react-router';
import {Col, Select, Row, Typography} from 'antd'
import LineChart from './LineChart';

const { Title } = Typography;

const Cryptodetails = () => {
    const {coinId} = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const {data, isFetching} = useGetCryptoDetailsQuery(coinId);
    const {data: coinHistory} = useGetCryptoHistoryQuery({coinId, timePeriod});;
    const cryptoDetails = data?.data?.coin; 
    const {Option} = Select;

    const time = ['3h','24h','7d','30d','3m','1y','3y','5y'];

    if (isFetching) return 'Loading...';
    return (
          <Col className='coin-detail-container'>
              <Col className='coin-heading-container'>
                  <Title level={2} className='coin-name'>
                      {cryptoDetails.name} ({cryptoDetails.slug})
                  </Title>
                  <p>
                      {cryptoDetails.name} live price in US dollar 
                  </p>
              </Col>
             <Select
                defaultValue="7d"
                className="select-timeperiod"
                placeholder="Select Time Period"
                onChange={(value) => setTimePeriod(value)}
             >
                {time.map((date) => (
                   <Option key={date}>{date}</Option>
                ))}
             </Select>
             <LineChart
                coinHistory={coinHistory}
                currentPrice={millify(cryptoDetails.price)}
                coinName={cryptoDetails.name}
             />
            <Col className='stats-container'>
                <Col className='coin-value-statistics'>
                    <Col className='coin-value-statistics-heading'>
                        <Title level={3} className='coin-detailes-heading'>
                            {cryptoDetails.name} value statistics
                        </Title>
                        <p>
                            An overview showing the stats of {cryptoDetails.name}
                        </p>
                    </Col>
                </Col>
            </Col>
          </Col>
    );
}

export default Cryptodetails;