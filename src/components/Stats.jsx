import React from 'react'
import {stats} from '../data'
import parse from 'html-react-parser';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <>
    {stats.map(({no, title}, index) => {
      return(
        <div className="stats__box" key={index}>
          <h3 className="stats__no">
          <CountUp end={`${no}`} duration={2.5} />
          <span>+</span>
          </h3>
          <p className="stats__title">{parse(title)}</p>
        </div>
      )
    })}
    </>
  )
}

export default Stats