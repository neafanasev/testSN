import React, {Suspense} from "react";
import Preloader from "../common/Preloader/Preloader";

// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth
// })

export const withSuspense = (Component) => (props) => (
    <Suspense fallback={<Preloader />}>
        <Component {...props}/>
    </Suspense>
)