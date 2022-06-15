import Head from 'next/head';
import styles from '../../styles/Bedroom.module.css'
import Navbar from '../../components/Navbar';


const Bedroom = () =>{
    return(
        <>
        <Head>
            <link rel="stylesheet" href="/css/globals.css" />
        </Head>
        <header>
            <Navbar theme='light' apperence='full' />
        </header>
        <main>
            <div className={styles.wallpaper}/>
        </main>
        </>
    )
}
export default Bedroom;