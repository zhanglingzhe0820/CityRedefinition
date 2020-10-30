import React from "react";
import {Col, Row} from "antd";

const Footer: React.FC<any> = () => {
  return (
    <div style={{
      backgroundColor: '#222',
      display: 'inline-block',
      marginTop: -30
    }}>
      <div style={{width: '50%', float: 'left'}}>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Col className="gutter-row" span={6}>
          <span style={{marginLeft: 50, marginTop: 20, height: 200, float: 'left'}}>
          <p style={{color: 'white'}}>联&nbsp;系&nbsp;我&nbsp;们</p>
          <p style={{color: 'white', fontSize: 12, margin: 0}}>张凌哲</p>
          <p style={{color: 'white', fontSize: 12, margin: 0}}>18851822162</p>
          <p style={{color: 'white', fontSize: 12, margin: 0}}>surevil@foxmail.com</p>
        </span>
          </Col>
          <Col className="gutter-row" span={6}>
          <span style={{marginLeft: 50, marginTop: 20, height: 200, float: 'left'}}>
          <p style={{color: 'white'}}>g&nbsp;i&nbsp;t&nbsp;h&nbsp;u&nbsp;b</p>
          <a href="https://github.com/zhanglingzhe0820/CityRedefinition" style={{color: '#85888a', fontSize: 12, margin: 0}}>城市重定义</a>
        </span>
          </Col>
          <Col className="gutter-row" span={12}>
            <span style={{marginLeft: 50, marginTop: 20, height: 200, float: 'left'}}>
          <p style={{color: 'white'}}>参&nbsp;靠&nbsp;文&nbsp;献</p>
          <a href="https://download.geofabrik.de/" style={{color: '#85888a', fontSize: 12, margin: 0}}>OpenStreetMap（OSM）</a>
              <br/>
              <a href="http://ibsc.scbg.ac.cn/" style={{color: '#85888a', fontSize: 12, margin: 0}}>Quantifying urban areas with multi-source data based on percolation theory</a>
              <br/>
        </span>
          </Col>
        </Row>
      </div>
      <div style={{width: '50%', float: 'right'}}>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Col className="gutter-row" span={6}>
          </Col>
          <Col className="gutter-row" span={6}>
          </Col>
          <Col className="gutter-row" span={12}>
            <span style={{marginLeft: 50, marginTop: 20, height: 200, float: 'left'}}>
          <p style={{color: 'white'}}>微&nbsp;信</p>
          <img style={{width: 100, height: 100}} src={require('../assets/qrcode.jpg')}/>
        </span>
          </Col>
        </Row>
      </div>
    </div>
  )
};
export default Footer
