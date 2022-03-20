import Layout from "./Layout";
import Header from "./Header";
import Speakers from "./Speakers";
import {AuthProvider} from "../contexts/AuthContext";

const App = () => {

    return (
        <AuthProvider initialLoggedInUser="Ronald">
            <Layout startingTheme="light">
                <div>
                    <Header />
                    <Speakers />
                </div>
            </Layout>
        </AuthProvider>
    );
}

export default App;