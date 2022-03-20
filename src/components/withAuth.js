import {useState} from "react";
import {AuthContext} from "../contexts/AuthContext";

const withAuth = (Component) => {
    return function (props) {
        const {loggedInUser, setLoggedInUser} = useState(AuthContext);
        return (
            <Component loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} {...props}>
            </Component>
        );
    }
}