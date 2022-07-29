import './index.css';
//import storage from 'local-storage';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

export default function Index() {
 //   const [usuario, setUsuario] = useState('-');

  //  const navigate = useNavigate();
 
   //  useEffect(() => {
   //      if (!storage('usuario-logado')) {
   //          navigate('/');
   //      }
   //      else{
   //          const usuarioLogado = storage('usuario OK');
   //          setUsuario(usuarioLogado.nome)
  //       }
   //  }, [])
 
    return(
        <header className='base-cabeçalho'>
            <div className='aprecentação'>Olá joão bem vindo ao Aurora Production </div>
            <div>
                <div className='perfil'>
                    <span>J</span>
                </div>
            </div>
        </header>
    )
}