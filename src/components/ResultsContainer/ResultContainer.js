import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';

const ResultContainer = ({ suggestedNames }) => {
  const names = suggestedNames.map((name) => {
    return <NameCard key={name} name={name} />;
  });

  return (
    <div className="result-container">
      {names}
    </div>
  );
};

export default ResultContainer;
