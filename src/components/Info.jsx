import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data';

const Info = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setShowAll(true);
      } else {
        setShowAll(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const displayedInfo = showAll ? personalInfo : personalInfo.slice(0, 3);

  return (
    <>
      {displayedInfo.map(({ title, description }, index) => (
        <li className="info__item" key={index}>
          <span className="info__title">{title}</span>
          <span className="info__description">{description}</span>
        </li>
      ))}
      <button onClick={handleToggle} className="info__toggle">
        {showAll ? 'View Less' : 'View All'}
      </button>
    </>
  );
};

export default Info;

