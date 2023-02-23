import React from 'react';

function Result({ total, next, operation }) {
  return (
    <div className="calc-result">
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </div>
  );
}

export default Result;
