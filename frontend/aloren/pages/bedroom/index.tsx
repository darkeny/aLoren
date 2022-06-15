import Head from 'next/head';
import Background_img from '../../components/Background_img';
import Navbar from '../../components/Navbar';
import Paralax from '../../components/Paralax';

const Bedroom = () =>{
    return(
        <>
        <Head>
            <link rel="stylesheet" href="/css/globals.css" />
        </Head>
        <header>
            <Navbar theme='light' apperence='full' />
        </header>

        </>
    )
}
export default Bedroom;