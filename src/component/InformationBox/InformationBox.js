import React from 'react';
import style from './InformationBox.module.css';
import ReadMoreLink from '../Buttons/ReadMoreLink/ReadMoreLink';

const InformationBox = (props) => {
  let categoryColors = 'red';

  switch (props.category) {
    case 'event':
      categoryColors = '#0071b8';
      break;

    case 'publication':
      categoryColors = '#33622a';
      break;

    case 'program, platform, investment initiative':
      categoryColors = '#009ede';
      break;
    case 'trend':
      categoryColors = '#49853e';
      break;

    case 'framework: conceptual, evaluative, operational':
      categoryColors = '#58595b';
      break;

    default:
  }

  return (
    <div className={style.boxStyle} style={{backgroundColor: categoryColors}}>
      <h2>{props.title}</h2>
      <div style={{overflow: 'auto'}}>
        <p>{props.text}</p>
      </div>
      <div className={style.linkPlacement}>
        <ReadMoreLink link={props.link} />
      </div>
    </div>
  );
};

export default InformationBox;
