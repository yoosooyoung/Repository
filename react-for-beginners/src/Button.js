import PropTypes from 'prop-types';
//스타일도 모듈러가 된다.
//html내에서 랜덤방식으로 클래스이름이 생성된다.
import styles from './Button.module.css';

function Button({ text }) {
	return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
};
export default Button;
