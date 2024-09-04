import { Link } from "react-router-dom";
import styles from './Button.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export const Button = ({
  to,
  href,
  leftIcon,
  rightIcon,
  onClick,
  className,
  small,
  medium,
  large,
  children,
  primary,
  secondary,
  title,
  ...passProps
}) => {
  const Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    Comp = Link;
    props.to = to;
  }
  if (href) {
    Comp = "a";
    props.href = href;
  }

  const classes = cx("btn",{
    [className]: className,
    small,
    medium,
    large,
    primary,
    secondary  
}
  );
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className="">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="">{rightIcon}</span>}
    </Comp>
  );
};
