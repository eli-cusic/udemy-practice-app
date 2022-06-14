import React from 'react';
import './FabricDate.css';
import Card from './Card';


function FabricDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long'});
  const day = props.date.toLocaleString('en-US', { day: '2-digit'});
  const year = props.date.getFullYear();

  return(
    <Card className='fabric-date'>
      <div className='fabric-date-month'>{month}</div>
      <div className='fabric-date-day'>{day}</div>
      <div className='fabric-date-year'>{year}</div>
    </Card>
  );
}

export default FabricDate;
