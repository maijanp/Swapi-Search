import React from 'react';
import styles from '../Infocard/Infocard.module.css';

const InfoCard = (props) => (
  <div>
    <h2>{props.title}</h2>
    <p>{props.detailOne}</p>
    <p>{props.detailTwo}</p>
    <p>{props.summary}</p>
    <p>{props.date}</p>
  </div>
);

export default InfoCard;
