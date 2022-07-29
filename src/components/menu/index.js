
import './index.css'
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <nav className='menu'>
            <div>
                <div className='ola-logo'>
                    <img className='logo-menu' src="./img/cold ofi.png" alt='logon'/>
                </div>
            </div>
            <div className='conteudo-menu'>
                <Link className='Link' to='/'>
                    <img className='icon-casa' src="./img/casa.png" alt='home'/>
                    <p className='menu-p1'>Home</p>
                </Link>
                <Link className='Link' to=''>
                    <img className='icon-cadastrar' src="./img/mais.png" alt='cadastrar'/>
                    <p className='menu-p2'>Cadastrar</p>
                </Link>
                <Link className='Link' to=''>
                    <img className='icon-lupa' src="./img/pesquisa (1).png" alt='consultar'/>
                    <p className='menu-p3'>Consultar</p>
                </Link>
            </div>
            <div>
                <Link className='contener-sair' to='/login'>
                    <img className='icon-sair' src="./img/saida.png" alt='sair'/>
                    <p className='menu-p4'>Sair</p>
                </Link>
            </div>
        </nav>
    )
}