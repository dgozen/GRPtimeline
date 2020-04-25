import React from 'react';
import style from './AddButton.module.css';

const AddButton = (props) => {
    return (
            <a href={props.link} className={style.buttonStyle}>+
		</a>
    
    )

}

export default AddButton;