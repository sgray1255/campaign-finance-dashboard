import styles from './LegListTitle.module.scss';

const LegListTitle = ( {searchTitle }) => {
  return <h1 className={styles.LegHeader}> {searchTitle} Congressmen</h1>
};

export default LegListTitle;
