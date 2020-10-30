import {Card, Col, Row, Statistic} from 'antd';
import {FormattedMessage, connect, formatMessage, Dispatch} from 'umi';
import React, {Component} from 'react';

import {GridContent} from '@ant-design/pro-layout';
import numeral from 'numeral';
import {StateType} from './model';
import {Pie, WaterWave, Gauge, TagCloud, Map} from './components/Charts';
import styles from './style.less';
import {getAllStatistic, StatisticsAbstractData} from "@/services/statistics";

interface HomeProps {
    analysis: StateType;
    dispatch: Dispatch<any>;
    loading: boolean;
}

class Home extends Component<HomeProps> {
    state = {
        peopleNum: 0,
        recordNum: 0,
        picNum: 0,
        speciesNum: 0
    };

    async componentDidMount() {
        const statistics: StatisticsAbstractData = (await getAllStatistic());
        this.setState({
            peopleNum: statistics.peopleNum,
            recordNum: statistics.recordNum,
            picNum: statistics.picNum,
            speciesNum: statistics.speciesNum
        })
        const {dispatch} = this.props;
        if (dispatch) {
            dispatch({
                type: 'analysis/fetchTags'
            })
        }
    }

    render() {
        const {analysis, loading} = this.props;
        const {tags} = analysis;
        return (
            <GridContent>
                <React.Fragment>
                    <Row gutter={24}>
                        <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{marginBottom: 24}}>
                            <Card
                                title='大盘记录'
                                bordered={false}
                            >
                                <Row>
                                    <Col md={6} sm={12} xs={24}>
                                        <Statistic
                                            title='总量'
                                            suffix="个"
                                            value={numeral(this.state.recordNum).format('0,0')}
                                        />
                                    </Col>
                                    <Col md={6} sm={12} xs={24}>
                                        <Statistic
                                            title='大型城市'
                                            suffix="个"
                                            value={numeral(this.state.peopleNum).format('0,0')}
                                        />
                                    </Col>
                                    <Col md={6} sm={12} xs={24}>
                                        <Statistic
                                            title='中型城市'
                                            suffix="个"
                                            value={numeral(this.state.picNum).format('0,0')}
                                        />
                                    </Col>
                                    <Col md={6} sm={12} xs={24}>
                                        <Statistic
                                            title='小型城市'
                                            suffix="个"
                                            value={numeral(this.state.speciesNum).format('0,0')}
                                        />
                                    </Col>
                                </Row>
                                <div className={styles.mapChart}>
                                    <Map/>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col xl={18} lg={24} sm={24} xs={24} style={{marginBottom: 24}}>
                            <Card
                                title='城市云'
                                loading={loading}
                                bordered={false}
                                bodyStyle={{overflow: 'hidden'}}
                            >
                                <TagCloud data={tags || []} height={161}/>
                            </Card>
                        </Col>
                    </Row>
                </React.Fragment>
            </GridContent>
        );
    }
}

export default connect(
    ({
         analysis,
         loading,
     }: {
        analysis: StateType;
        loading: {
            models: { [key: string]: boolean };
        };
    }) => ({
        analysis,
        loading: loading.models.analysis,
    }),
)(Home);
