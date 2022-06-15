import Head from "next/head";
import Navbar from "../../components/Navbar";



export default function Login() {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/globals.css" />
                <title>Login</title>
            </Head>
            <Navbar theme={'light'} apperence={'full'} />
            <main className={"position-fixed d-flex h-100 w-100"}>
                <div className={"container d-flex justify-content-center align-items-center"}>
                    <form method={"POST"} className={"needs-validation"} noValidate>
                        <div className="text-center display-5">
                            <span className="fw-bold">Entrar para aLoren</span>
                        </div>
                        <div className="container-login">
                            <div className="text-center pt-5">
                                <div className="d-flex flex-column flex-row-lg">
                                    <a href="https://accounts.google.com/signin/v2/identifier?faa=1&rip=1&continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3DurmH5m1T8kzLECKSaJTLhQ%26channel_id%3De366b1da798650fafdca3b5fc418b4eb8cabcfb020a7ae083b28e0ca21735bed%26origin%3Dhttps%3A%2F%2Ftwitter.com&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info"><img className="me-2" width="16px" src="/img/google.svg" />Continuar com o google</a>
                                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D" target="_blank" rel="noopener noreferrer" className="my-2 btn btn-outline-primary"><img className="me-2" src="/img/twitter.svg" />Continuar com o twiter</a>
                                    <a href="https://github.com/login" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary"><img className="me-2" src="/img/github.svg" />Continuar com o github</a>
                                </div>
                            </div>
                        </div>

                        <button className={"mt-4 w-100 btn-submit"} type={"submit"}><a className="text-decoration-none" href="/email">Continuar com email</a></button>
                    </form>
                </div>
            </main>
        </>

    )
}