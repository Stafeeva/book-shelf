import React from 'react';

const statusOptions = [
  "Queue",
  "Reading",
  "Finished",
];

const StatusSelect = props => {
  const { value } = props;

  return (
    <select {...props}>
      {statusOptions.map(statusOption => (
        <option value={statusOption}>{statusOption}</option>
      ))}
    </select>
  );
}

export default StatusSelect;
