import Head from "next/head";
import Avatar from "../../components/Avatar";
import Modal from "../../components/Modal";
import Navbar from "../../components/Navbar";
import Stamps from "../../components/Stamps";

let Dashboard = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/globals.css" />
                <title>Painel de control</title>
            </Head>

            <header>
                <Navbar theme="light" apperence="dashboard" />
            </header>
            <div className="p-4 pt-5">
                <div className="row">
                    <div className="col-sm-3 p-2 shadow brd-5 fixed">
                        <Avatar avatar="big" />
                        <div className="text-center">
                            <div className="mt-4 h4">Darken Machava {<Stamps stamps="active" />}</div>
                        </div>
                        <div className="my-4">
                            <div className="fw-normal dash-bio">Densevolvedor de Aplicações Web | Técnico de Suporte Informático</div>
                            <button className="mt-2 btn btn-secondary w-100" type="submit" data-bs-toggle="modal" data-bs-target="#show-Profile-Modal">Editar perfil</button>
                        </div>
                        <div className="my-4">
                            <div className="d-flex flex-column flex-row-lg">
                                <span><img className="me-2" width="16px" src="/img/building.svg" />Aervel</span>
                                <span><img className="me-2" width="16px" src="/img/geo-alt.svg" />Mozambique</span>
                                <span><img className="me-2" width="16px" src="/img/link-45deg.svg" />aervel.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="padding-border">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="h2 text-center p-2 bg-light maneger brd-5">Gestão do Hotel</div>
                                    <hr />
                                    <div className="card">
                                        <div className="p-2 py-4">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <div className="row">
                                                        <h5>Primeiro turno</h5>
                                                        <div className="col-6">
                                                            <label htmlFor="weeked">Started</label>
                                                            <input value={"07:00"} className="form-control hidden-focus" type="time" name="" id="weeked" />
                                                        </div>
                                                        <div className="col-6">
                                                            <label htmlFor="week-end">Closed</label>
                                                            <input value={"15:00"} className="form-control hidden-focus" type="time" name="" id="week-end" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="row">
                                                        <h5>Segundo turno</h5>
                                                        <div className="col-6">
                                                            <label htmlFor="weeked">Started</label>
                                                            <input value={"15:00"} className="form-control hidden-focus" type="time" name="" id="weeked" />
                                                        </div>
                                                        <div className="col-6">
                                                            <label htmlFor="week-end">Closed</label>
                                                            <input value={"23:00"} className="form-control hidden-focus" type="time" name="" id="week-end" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="row">
                                                        <h5>Terceiro turno</h5>
                                                        <div className="col-6">
                                                            <label htmlFor="weeked">Started</label>
                                                            <input value={"23:00"} className="form-control hidden-focus" type="time" name="" id="weeked" />
                                                        </div>
                                                        <div className="col-6">
                                                            <label htmlFor="week-end">Closed</label>
                                                            <input value={"07:00"} className="form-control hidden-focus" type="time" name="" id="week-end" />
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                            <div className="pt-5 mt-5" />
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="p-2">
                                                        <div className="h4 text-dark fw-bold">Atualizar informações</div>
                                                        <div className="fw-light pt-2">
                                                            <div className="row">
                                                                <div className="col-lg-9">
                                                                    Depois de atualizar ou resetar as informações, não há como reverter a ação. Por favor, tenha certeza!
                                                                </div>
                                                                <div className="col-lg-3 text-center">
                                                                    <button className="btn btn-sm btn-outline-warning" data-bs-toggle="modal" data-bs-target="#show-Delete-Modal" type="submit">Prosseguir</button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Modal style="profile" />
            <Modal style="delete" />
        </>
    )

}

export default Dashboard;