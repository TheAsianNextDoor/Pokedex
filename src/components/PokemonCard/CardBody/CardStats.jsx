import React from 'react';
import {
    Container,
    Row,
    Col,
    Progress,
} from 'reactstrap';

type Props = {
    info: Object,
};

/**
 * The functional component for the card stats
 *
 * @param {Object} info The object containing the pokemon card data
 */
export const CardStats = ({ info }: Props) => {
    const {
        hp,
        attack,
        defense,
        speed,
    } = ((info || {}).stats || {});
    const spAtk = ((info || {}).stats || {})['special-attack'];
    const spDef = ((info || {}).stats || {})['special-defense'];

    const hpPercent = (hp / 255) * 100;
    const attackPercent = (attack / 165) * 100;
    const defensePercent = (defense / 200) * 100;
    const speedPercent = (speed / 130) * 100;
    const spAtkPercent = (spAtk / 150) * 100;
    const spDefPercent = (spDef / 200) * 100;

    return (
        <Container id='cardStatsContainer' className='pt-1'>
            <Row id='cardStatsRow'>
                <Col xs='12' sm='12' md='12' lg='5'>

                    <img
                        id='cardStatsImg'
                        src={info.image}
                        className='pokemonImage'
                        alt={info.name}
                        title={info.name}
                    />

                </Col>
                <Col className='display-block' xs='12' sm='12' md='12' lg='6'>
                    <Col className='align-left display-block' xs='3' sm='3' md='3' lg='4'>

                        <h4 id='cardStatsLabelHP' className='statsSectionTitle align-left'>HP </h4>
                        <h4 id='cardStatsLabelAtk' className='statsSectionTitle align-left'>Attack </h4>
                        <h4 id='cardStatsLabelDef' className='statsSectionTitle align-left'>Defense </h4>
                        <h4 id='cardStatsLabelSpeed' className='statsSectionTitle align-left'>Speed </h4>
                        <h4 id='cardStatsLabelSPAtk' className='statsSectionTitle align-left'>SP Atk </h4>
                        <h4 id='cardStatsLabelSPDef' className='statsSectionTitle align-left'>Sp Def </h4>

                    </Col>
                    <Col className='display-block' xs='7' sm='7' md='7' lg='8'>

                        <Progress
                            id='cardStatsProgressHP'
                            color='success'
                            value={hpPercent}
                        >
                            <span id='cardStatsSpanHPText' className='align-left pl-2'>
                                {hp}
                            </span>
                        </Progress>

                        <div id='cardStatsDivAtk' className='statPadding'>
                            <Progress
                                id='cardStatsProgressAtk'
                                color='success'
                                value={attackPercent}
                            >
                                <span id='cardStatsSpanAtkText' className='align-left pl-2'>
                                    {attack}
                                </span>
                            </Progress>
                        </div>

                        <div id='cardStatsDivDef' className='statPadding'>
                            <Progress
                                id='cardStatsProgressDef'
                                color='success'
                                value={defensePercent}
                            >
                                <span id='cardStatsSpanDefText' className='align-left pl-2'>
                                    {defense}
                                </span>
                            </Progress>
                        </div>

                        <div id='cardStatsDivSpeed' className='statPadding'>
                            <Progress
                                id='cardStatsProgressSpeed'
                                color='success'
                                value={speedPercent}
                            >
                                <span id='cardStatsSpanSpeedText' className='align-left pl-2'>
                                    {speed}
                                </span>
                            </Progress>
                        </div>

                        <div id='cardStatsDivSpAtk' className='statPadding'>
                            <Progress
                                id='cardStatsProgressSpAtk'
                                color='success'
                                value={spAtkPercent}
                            >
                                <span id='cardStatsSpanSpAtkText' className='align-left pl-2'>
                                    {spAtk}
                                </span>
                            </Progress>
                        </div>

                        <div id='cardStatsDivSpDef' className='statPadding'>
                            <Progress
                                id='cardStatsProgressSpDef'
                                color='success'
                                value={spDefPercent}
                            >
                                <span id='cardStatsSpanSpDefText' className='align-left pl-2'>
                                    {spDef}
                                </span>
                            </Progress>
                        </div>

                    </Col>
                </Col>
            </Row>

            <h2 id='cardStatsGenusTitle' className='genusTitle align-left'>
                {info.genus}
            </h2>

            <Row className='pt-2'>
                <Col lg={12}>
                    <p id='cardStatsDescription' className='description align-left'>
                        {info.description}
                    </p>
                </Col>
            </Row>

        </Container>
    );
};

export default CardStats;
