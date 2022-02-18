import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={s.nav}>
            <nav>
                <div className={s.item}>
                    <NavLink to='/profile'>
                        Profile
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to=''>
                        News
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs'>
                        Messages
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to=''>
                        Music
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to=''>
                        Settings
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav