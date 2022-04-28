import React from 'react';
import s from './Nav.module.scss';
import {NavLink} from "react-router-dom";

const Nav = () => (
    <div className={s.nav}>
        <nav>
            <div className={s.item}>
                <NavLink to='/profile'>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages'>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users'>
                    Users
                </NavLink>
            </div>
        </nav>
    </div>
)


export default Nav