import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";

const withAuth = (Component) => {
    return function (props) {
        const {loggedInUser, setLoggedInUser} = useContext(AuthContext);
        console.log(loggedInUser);
        return (
            <Component loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} {...props}>
            </Component>
        );
    }
}

export default withAuth;