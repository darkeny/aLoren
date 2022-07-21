import Head from 'next/head';
import Navbar from '../Navbar';

const Account_Type = () => {
    return (
        <>
            <main className="container">
                <div className="max-width-5">
                    <div className="row d-flex align-items-center g-5 g-lg-5 py-5">
                        <div className="col-sm-6">
                            <div className="center-center">
                                <div className="text-center pt-2 ">
                                    <div className="h2 text-blue-bold fw-bold">Usuário Base</div>
                                    <span className="text-center text-muted">Conta de Baixa Responsabilidade</span>
                                    <div className="text-muted">
                                        A conta "User Basic" é adquirida quando se dá inicio ao sistema, com os dados de sua conta (Google, Github, Twitter)
                                        <p>Esta conta tem menos responsabilidades, pois não despõe de recursos avançandos do sistema</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <img src="/img/base.png" className="w-100" />
                        </div>
                        <div className="col-sm-6">
                            <img src="/img/HOTELL.png" className="w-100 brd-15" />
                        </div>
                        <div className="col-sm-6">
                            <div className="center-center">
                                <div className="text-center pt-2">
                                    <div className="h2 text-blue-bold fw-bold">Administrador</div>
                                    <span className="text-center text-muted">Conta especializada na criação de projectos</span>
                                    <div className="text-muted">
                                        A conta Developer (desenvolvedor) é epecialmente adquirida quando se pretende desenvolver um projecto integrado,
                                        seja no âmbito tecnologico, comercial ou industrial. <br /><br />

                                        Apenas os estudantes e professores poderam promover suas contas para o modo de desenvolvedor, o usuario base
                                        não tem requisitos suficientes para a promoção da sua conta, apenas se limitará nos recursos gerais do sistema.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="center-center">
                                <div className="text-center pt-2">
                                    <div className="h2 text-blue-bold fw-bold">Lider</div>
                                    <span className="text-center text-muted">Conta especializada na criação de projectos</span>
                                    <div className="text-muted">
                                        A conta Developer (desenvolvedor) é epecialmente adquirida quando se pretende desenvolver um projecto integrado,
                                        seja no âmbito tecnologico, comercial ou industrial. <br /><br />

                                        Apenas os estudantes e professores poderam promover suas contas para o modo de desenvolvedor, o usuario base
                                        não tem requisitos suficientes para a promoção da sua conta, apenas se limitará nos recursos gerais do sistema.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <img src="/img/projecto2.jpg" className="w-100 brd-15" />
                        </div>
                        <div className="col-sm-6">
                            <img src="/img/selos.png" className="w-100 brd-15" />
                        </div>
                        <div className="col-sm-6">
                            <div className="center-center">
                                <div className="text-gradient-small">Verified Account</div>
                                <div>
                                    <span className="h4 text-blue-bold writing-animation-suffix"></span>
                                    <span className="h3 c-orange writing-animation-cursor pb-1 "> |</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Account_Type;