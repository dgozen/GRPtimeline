import React from 'react';
import style from './Form.module.css';

const Form = () => {
    return (
        <div className={style.formContainer}>
        <form className={style.formLayout}>
            <div className={style.year}>Year:
                <input type="text" className={style.yearInput}></input>
            </div> 

            <div className={style.title}>Title:
            <input type="text" className={style.titleInput}></input>
            </div> 

            <div className={style.description}>Description:
            <input type="text" className={style.descriptionInput}></input>
            </div>

            <div className={style.radioButtons}>
                <label><input type="radio" value="Investment" name="Investment" />Investment</label>
                <label><input type="radio" value="Framework" name="Framework" /> Framework</label>
                <label><input type="radio" value="Event" name="Event" /> Event</label>
                <label><input type="radio" value="Trend" name="Trend" /> Trend</label>
                <label><input type="radio" value="Publication" name="Publication" /> Publication</label>
            </div>
            <div className={style.buttonContainer}>
            <div className={style.button}>Submit</div>
            </div>
            
        </form>
        </div>
    )
}

export default Form