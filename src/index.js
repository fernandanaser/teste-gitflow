import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import { EnderecoProvider } from './context/EnderecoContext';
import { PessoasProvider } from './context/PessoasContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routers from './routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <PessoasProvider>
            <EnderecoProvider>
                <Routers />
            </EnderecoProvider>
        </PessoasProvider>
    </AuthProvider>
);
reportWebVitals();
