import React from 'react';
import { Link } from 'react-router-dom';
import './NewItem.css';

const NewItem = (props) => {
  let toValue;

  switch (props.name) {
    case "Хризантемы":
      toValue = "chris";
      break;
    case "Розы":
      toValue = "roses";
      break;
    case "Подарки":
      toValue = "gift";
      break;
    case "Горшочные растения":
        toValue = "home";
        break;
    
    default:
      toValue = props.name.toLowerCase();
  }

  return (
    <Link to={toValue}>
      <div className='newitem' data-title={props.name}>
        <img src={props.image} alt='' />
      </div>
    </Link>
  );
}

export default NewItem;
