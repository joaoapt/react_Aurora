import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Menu from './pages/menu'

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/menu" element={<Menu />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
            </Routes>
        </BrowserRouter>
    )
}