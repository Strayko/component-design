import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";

const SpeakersToolbar = ({ showSessions, setShowSessions }) => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <section className="toolbar dark-theme-header">
            <div className="container">
                <div className="justify-content-between">
                    <ul className="toolrow d-flex flex-column flex-md-row">
                        <li className="d-flex flex-column flex-md-row">
                            <b>Show Sessions&nbsp;&nbsp;</b>
                            <label className="fav">
                                <input type="checkbox" defaultChecked={showSessions} onChange={(event) => {
                                    setShowSessions(event.target.checked);
                                }} />
                                <span className="switch"></span>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
                            <strong>Theme</strong>
                            <label className="dropdown">
                                <select className="form-control theme" defaultValue={theme} onChange={(event) => {
                                    setTheme(event.target.value);
                                }} >
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SpeakersToolbar;