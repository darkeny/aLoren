import Head from "next/head";
import Background_img from "../../components/Background_img";
import Navbar from "../../components/Navbar";
import Paralax from "../../components/Paralax";
import styles from '../../styles/Conta.module.css';

let Conta = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/conta.css" />
                <link rel="stylesheet" href="/css/globals.css" />
                <script async src="/js/animation.js" />
                <title>Conta</title>
            </Head>

            <header>
                <Navbar theme="light" apperence="full" />
            </header>
            <div className="container_ajusting">
                <Background_img apparence="bg_lg" />
            </div>

            <section className="content-site">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 text-center py-space mt-4">
                            <span className="text-gradient display-4 fw-bold text-blue-bold">Sistema de contas</span>
                            <h4 className="fw-light text-dark text-center opacity-75">
                                Utilizamos um sistema de contas para diferencias regalias / recursos que o sistema oferece
                            </h4>
                        </div>
                    </div>

                </div>
            </section>


            <div className="p-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="text-center">
                            <div className="h2 text-blue-bold fw-bold pb-5 ">Usuario Base</div>
                            <span className="text-center text-muted">Conta especializada na criação de projectos</span>
                            <div className="pt-3 p-5 text-muted">
                                A conta Developer (desenvolvedor) é epecialmente adquirida quando se pretende desenvolver um projecto integrado,
                                seja no âmbito tecnologico, comercial ou industrial. <br /><br />

                                Apenas os estudantes e professores poderam promover suas contas para o modo de desenvolvedor, o usuario base
                                não tem requisitos suficientes para a promoção da sua conta, apenas se limitará nos recursos gerais do sistema.
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src="/img/base.png" className="w-100" />
                    </div>
                </div>
                <div className="pt-space">

                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6">
                            <img src="/img/HOTELL.png" className="w-100 brd-15"/>
                        </div>
                        <div className="col-sm-6">
                            <div className="text-center">
                                <div className="h2 text-blue-bold fw-bold pb-5 ">Administrador</div>
                                <span className="text-center text-muted">Conta especializada na criação de projectos</span>
                                <div className="pt-3 p-5 text-muted">
                                    A conta Developer (desenvolvedor) é epecialmente adquirida quando se pretende desenvolver um projecto integrado,
                                    seja no âmbito tecnologico, comercial ou industrial. <br /><br />

                                    Apenas os estudantes e professores poderam promover suas contas para o modo de desenvolvedor, o usuario base
                                    não tem requisitos suficientes para a promoção da sua conta, apenas se limitará nos recursos gerais do sistema.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-space">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6">
                            <div className="text-center">
                                <div className="h2 text-blue-bold fw-bold pb-5 ">Lider</div>
                                <span className="text-center text-muted">Conta especializada na criação de projectos</span>
                                <div className="pt-3 p-5 text-muted">
                                    A conta Developer (desenvolvedor) é epecialmente adquirida quando se pretende desenvolver um projecto integrado,
                                    seja no âmbito tecnologico, comercial ou industrial. <br /><br />

                                    Apenas os estudantes e professores poderam promover suas contas para o modo de desenvolvedor, o usuario base
                                    não tem requisitos suficientes para a promoção da sua conta, apenas se limitará nos recursos gerais do sistema.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <img src="/img/projecto2.jpg" className="w-100 brd-15" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Goodby}>
                <div className="display-5 fw-bold text-light text-center">aLoren!!</div>
                <h4 className={"fw-light text-light text-center opacity-75"}>Ao serviço e Restauração das suas energias!</h4>
            </div>
            <div className="pb-space">
                <Paralax apparence="paralax_sm" />
            </div>
            <div className="h3 text-dark text-center">
                O que faço?
            </div>
            <section className="footer-site">
                <div className="container">
                    <div className="py-4 text-center">
                        <p className="text-muted">&copy; 2020-2021</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Conta;