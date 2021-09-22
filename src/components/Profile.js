import React, {Component} from 'react'

const Profile = () => {
    return (
        <div className="content-wrapper">
            <div className="profile-info">
                <div className="profile-picture">
                    <img src="https://img.scoop.it/cKAEfvNSTJwCa79cmbVddoXXXL4j3HpexhjNOf_P3YmryPKwJ94QGRtDb3Sbc6KY"/>
                </div>
                <div className="main-info">
                    <div id='name'>
                        <h1>
                            Афанасьев Никита Евгеньевич
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile