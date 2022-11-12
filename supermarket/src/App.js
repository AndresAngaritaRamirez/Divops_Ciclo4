import {BrowserRouter} from 'react-router-dom';
import {Header} from './components/Header';
import {Login} from './views/Login';

function App(){
    return(
        <BrowserRouter>
            <Header />
            <Login/>
        </BrowserRouter>
    );
}

export default App