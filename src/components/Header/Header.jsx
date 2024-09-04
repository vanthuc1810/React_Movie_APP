import React from 'react';
import { NavLink } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export const Header = () => {
  return (
    <header className={cx("header", "d-flex", "justify-content-around")}>
      <div className={cx("header__logo")}>
        <NavLink to={"/"}>
          <img src="https://res-console.cloudinary.com/vanthuc/thumbnails/v1/image/upload/v1725120588/TG9nb19md3V4ZnI=/drilldown" alt="" className={cx("header__logo-img")} />
        </NavLink>
      </div>
      <div className={cx("header__navigation", "align-items-center")}>
        <div className={cx("navigation__items")}>
        <NavLink  className={(nav) => cx("navigation__item-link",{active: nav.isActive} )} to={"/"}>
            Home
          </NavLink>
        </div>
        <div className={cx("navigation__items")}>
        <NavLink  className={(nav) => cx("navigation__item-link",{active: nav.isActive} )} to={"/movies"}>
            Movies & Shows
          </NavLink>
        </div>
        <div className={cx("navigation__items")}>
        <NavLink  className={(nav) => cx("navigation__item-link",{active: nav.isActive} )} to={"/support"}>
            Support
          </NavLink>
        </div>
        <div className={cx("navigation__items")}>
        <NavLink  className={(nav) => cx("navigation__item-link",{active: nav.isActive} )} to={"/"}>
            Subscriptions
          </NavLink>
        </div>
      </div>
      <div className={cx("header__btn", "d-flex", "align-items-center")}>
        <NavLink to={"/"} className={cx("header__btn_item")}>
          <img src="/images/nofication_btn.png" alt="" className={cx("header__logo-img")} />
        </NavLink>
        <NavLink to={"/"} className={cx("header__btn_item")}>
          <img src="/images/search_btn.png" alt="" className={cx("header__logo-img")} />
        </NavLink>
      </div>
    </header>
  );
};
