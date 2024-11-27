import styles from './FieldLayout.module.css';
export const FieldLayout = ({boxClicked}) => {
	return (
		<div className={styles.game}>
			<div className={styles.table}>
				<table>
					<tr>
						<td>
							<div id="box1" className={styles.box} onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box2" className={styles.box}  onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box3" className={styles.box}  onClick={boxClicked}></div>
						</td>
					</tr>
					<tr>
						<td>
							<div id="box4" className={styles.box}  onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box5" className={styles.box}  onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box6" className={styles.box}  onClick={boxClicked}></div>
						</td>
					</tr>
					<tr>
						<td>
							<div id="box7" className={styles.box}  onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box8" className={styles.box}  onClick={boxClicked}></div>
						</td>
						<td>
							<div id="box9" className={styles.box}  onClick={boxClicked}></div>
						</td>
					</tr>
				</table>
				<div className={styles.winning}></div>
			</div>
		</div>
	);
};
