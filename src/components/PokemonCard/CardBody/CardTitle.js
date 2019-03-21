import React from 'react'
import './CardBody.css'

export const CardTitle = ({ info }) => {
  let { name, id, types = [] } = info
  return (
    <div className="cardTitlePadding">
      <span className="cardTitleName smallScreenRemove">{name}</span>
      <span className="cardTitleID smallScreenRemove">#{id}</span>
      <span className="cardTitleAbilities">{ types.map((item, i) =>{
        return(
          <div key={i++} className='d-inline px-1'>
            <p className='titleType'>{item}</p>
          </div>
        )})
      }
      </span>
      <hr className="cardTitleBreak"/>
    </div>
  )
}
