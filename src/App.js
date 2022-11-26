import {BrowserRouter} from 'react-router-dom';
import {Header} from './components/Header';
import {Login} from './views/Login';
import {Principal} from './components/Principal'

function App(){
    return(
        <BrowserRouter>
            <Header />
            <Principal />
        </BrowserRouter>
    );
}

export default App