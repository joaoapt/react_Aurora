import './index.css';
import Menu from '../../components/menu';
import Cabecalho from '../../components/cabecalho';

export default function Index() {
    return(
        <main className='page-home'>
            <Menu/>
            <div className='posição'>
                <Cabecalho/>
                <div className='estrela'>
                    <img className='logo-estrelar' src='../img/floco de neve.png' alt='logo-estrelar'/>
                </div>
            </div>
        </main>
    )
}