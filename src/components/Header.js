import React, {Component} from 'react'
import s from '../cssC/Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div id="logo">
                <p>
                    &nbsp; &#191; Why did I do that ?  &nbsp;
                </p>
            </div>
        </header>
    )
}

export default Header