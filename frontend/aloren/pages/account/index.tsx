import Head from "next/head";
import Account_Type from "../../components/Account_Type";
import Copy from "../../components/Copy_Right";
import Navbar from "../../components/Navbar";

let Conta = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/conta.css" />
                <link rel="stylesheet" href="/css/globals.css" />
                <script src="/js/animation.js"></script>
                <title>Conta</title>
            </Head>

            <header>
                <Navbar theme="light" apperence="full" />
            </header>
            <Account_Type />
            <Copy />
        </>
    )
}
export default Conta;