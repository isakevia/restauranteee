import styles from './Cardapio.module.scss';
import Buscador from './Buscador/index';
import logo from '../../assets/cardapio/logo.png'
import { useState } from 'react';
import Filtros from './Filtros';


export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number| null>(null);
    return (
    <main>
        <br></br>
        <nav className={styles.menu}>
            
        </nav>
        <header className={styles.header}> 
            <div className={styles.header__text}>
            Os melhores doces aqui!
            </div>

            <img src={logo} alt="logo" className={styles.logo} />
        </header>
        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Cardapio</h3>
            <Buscador busca={busca} setBusca={setBusca} />

            <div className={styles.cardapio__filtros}>
            <Filtros filtro={filtro} setFiltro={setFiltro}/>
            </div>
        </section>
   
   </main>
    );
}