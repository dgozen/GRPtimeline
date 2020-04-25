import React from 'react';
import style from './AddButton.module.css';

const AddButton = (props) => {
    return (
        <div className={style.buttonContainer}>
            <a href={props.link} className={style.buttonStyle}>+
		</a>
        </div>
    )

}

export default AddButton;