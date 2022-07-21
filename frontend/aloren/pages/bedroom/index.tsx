import Head from 'next/head';
import styles from '../../styles/Bedroom.module.css'
import Navbar from '../../components/Navbar';
import Rooms from '../../components/Room';


const Bedroom = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/globals.css" />
            </Head>
            <header>
                <Navbar theme='light' apperence='full' />
            </header>
            <div className="row g-3 g-lg-5 py-4 ">
                <Rooms />
                <Rooms />
                <Rooms />
                <Rooms />
                <Rooms />
            </div>

        </>
    )
}
export default Bedroom;