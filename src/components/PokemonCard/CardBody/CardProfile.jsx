import React from 'react';
import { Container, Row, Col } from 'reactstrap';

type Props = {
    info: Object,
};

/**
 * The functional component for the card profile
 *
 * @param {Object} info The object containing the pokemon card data
 */
export const CardProfile = ({ info }: Props) => {
    const {
        height,
        weight,
        egg_groups = [],
        abilities = [],
    } = info;

    return (
        <>
            <div id='cardProfileDiv' className='profileTitleColor'>

                <h4 id='cardProfileTitle' className='profileTitle'>
                    Profile
                </h4>

            </div>
            <Container className='pt-4'>
                <Row className=''>

                    <Col className='margin' xs='5' sm='5' md='5' lg={{ size: 2, offset: 1 }}>
                        <h4 id='cardProfileHeightLabel' className='profileKey align-left'>
                            Height:
                        </h4>
                    </Col>

                    <Col xs='5' sm='5' md='5' lg='2'>
                        <h4 id='cardProfileHeightValue' className='profileKey align-left'>
                            {`${height} m`}
                        </h4>
                    </Col>

                    <Col className='margin' xs='5' sm='5' md='5' lg={{ size: 2, offset: 1 }}>
                        <h4 id='cardProfileWeightLabel' className='profileKey align-left'>
                            Weight:
                        </h4>
                    </Col>

                    <Col xs='5' sm='5' md='5' lg='2'>
                        <h4 id='cardProfileWeightValue' className='profileKey align-left'>
                            {`${weight} kg`}
                        </h4>
                    </Col>

                </Row>
                <Row className=''>

                    <Col className='margin pr-0' xs='5' sm='5' md='5' lg={{ size: 2, offset: 1 }}>
                        <h4 id='cardProfileEggLabel' className='profileKey align-left pl-0'>
                            Egg Group:
                        </h4>
                    </Col>

                    <Col xs='5' sm='5' md='5' lg='2'>
                        <h4 id='cardProfileValue' className='profileKey align-left text-capitalize'>
                            {egg_groups.map((item, i, arr) => (arr.length === i + 1 ? item : `${item}, `))}
                        </h4>
                    </Col>

                    <Col className='margin' xs='5' sm='5' md='5' lg={{ size: 2, offset: 1 }}>
                        <h4 id='cardProfileAbilitiesLabel' className='profileKey align-left'>
                            Abilities:
                        </h4>
                    </Col>

                    <Col className='' xs='5' sm='5' md='5' lg='2'>
                        <h4 id='cardProfileAbilityValue' className='profileKey align-left text-capitalize'>
                            {abilities.map((item, i, arr) => (arr.length === i + 1 ? item : `${item}, `))}
                        </h4>
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default CardProfile;
