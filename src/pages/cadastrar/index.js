import { Link } from 'react-router-dom';

import './index.css';

export default function Index() {
    return(
        <main className='page-cadastrar'>
            <section className='conteudo-cadastrar'>
                <div>
                    <h1 className='titulo-cadastrar'>Cadastrar</h1>
                    <div className='usuario-base'>   
                        <div>
                            <label className='sub-titulo'>Email:</label>
                            <input type='text'></input>
                        </div>
                        <div cla>
                            <label className='sub-titulo'>Nome:</label>
                            <input type='text'></input>

                        </div>
                        <div >
                            <label className='sub-titulo'>Senha:</label>
                            <input type='password'></input>
                        </div>
                    </div>
                    <div className='local-cadastrar'>
                        <Link className='botão-voltar-cadastrar' to='/login'>Voltar</Link>
                        <button className='botão-cadastrar'>Entrar</button>
                    </div>
                </div>
            </section>
        </main>
    )
}