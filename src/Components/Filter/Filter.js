import styles from './Filter.module.css';

const Filter = ({ onChange, filter }) => {
    return (

        <label className={styles.label}>
            Find contacts by name
            <input
                className={styles.input}
                onChange={onChange}
                value={filter}
                type="text"
                name="filter" />
        </label>

    );
};

export default Filter;