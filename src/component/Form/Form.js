import React from 'react';
import style from './Form.module.css';

const Form = ({ clickHandler }) => {
	return (
		<div id='container'>
			<div className={style.formContainer}>
				<form className={style.formLayout}>
					<div className={style.year}>
						Year:
						<input type='text' className={style.yearInput}></input>
					</div>

					<div className={style.title}>
						Title:
						<input type='text' className={style.titleInput}></input>
					</div>

					<div className={style.link}>
						Link:
						<input type='url' className={style.linkInput}></input>
					</div>

					<div className={style.description}>
						Description:
						<textarea className={style.descriptionInput}></textarea>
					</div>

					<div className={style.radioButtons}>
						<label>
							<input type='radio' value='Investment' name='category' />
							Investment
						</label>
						<label>
							<input type='radio' value='Framework' name='category' /> Framework
						</label>
						<label>
							<input type='radio' value='Event' name='category' /> Event
						</label>
						<label>
							<input type='radio' value='Trend' name='category' /> Trend
						</label>
						<label>
							<input type='radio' value='Publication' name='category' />{' '}
							Publication
						</label>
					</div>
					<button className={style.cancelButton} onClick={clickHandler}>
						Cancel
					</button>
					<button className={style.submitButton}>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
