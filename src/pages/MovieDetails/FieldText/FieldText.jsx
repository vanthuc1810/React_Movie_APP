import styles from './FieldText.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
export const FieldText = ({children}) => {
    return (
        <div className={cx("wrapper")}>
            {children}
        </div>
    );

}