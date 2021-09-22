import React, {Component} from 'react';
import s from './ProfileHeader.module.css';

const ProfileHeader = () => {
    return (
        <div className={s.profileHeader}>
            <div className={s.picture}>
                <img src="https://img.scoop.it/cKAEfvNSTJwCa79cmbVddoXXXL4j3HpexhjNOf_P3YmryPKwJ94QGRtDb3Sbc6KY"/>
            </div>
            <div className={s.info}>
                <div className={s.name}>
                    <h1>
                        Афанасьев Никита Евгеньевич
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;