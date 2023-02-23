import React from 'react';
import PropTypes from 'prop-types';

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

Result.propTypes = {
  total: PropTypes.number.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Result;
