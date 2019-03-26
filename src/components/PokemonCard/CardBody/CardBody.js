import React from 'react'
import {CardStats} from './CardStats.js'
import {CardProfile} from './CardProfile.js'
import {CardTitle} from './CardTitle.js'

import './CardBody.css'

export const CardBody = ({ info }) => (
    <div className='cardStyle'>
      {/*Navigation, Pokemon Name and Type*/}
      <CardTitle info={info}/>

      {/*Pokemon image, stats, description*/}
      <CardStats info={info}/>

      {/*Pokemon info*/}
      <CardProfile info={info}/>
    </div>
)
