import styles from './InformationLayout.module.css';
export const InformationLayout = ({info}) => {
	return <div className={styles.information}>{info}</div>;
};
