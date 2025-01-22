import { useState } from 'react';
import styles from './InformationLayout.module.css';
export const InformationLayout = ({ info }) => {
	const [infoString] = useState(info);
	return <div className={styles.information}>{infoString}</div>;
};
