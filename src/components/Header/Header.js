import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div id="logo">
                <p>
                    {
                        props.isAuth ? <button onClick={props.logout}>{props.login}</button>:
                            <NavLink to={'/login'}>
                                &nbsp; Click here to login &nbsp;
                            </NavLink>
                    }
                </p>
            </div>
        </header>
    )
}
// &#191;
export default Header