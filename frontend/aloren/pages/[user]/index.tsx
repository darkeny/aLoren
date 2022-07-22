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
            <div className="pt-5 p-2">
                <div className="row g-2">
                    <div className="col-sm-3 p-1 shadow brd-5 fixed">
                        <Avatar avatar="big" />
                        <div className="text-center">
                            <div className="mt-4 h4">Darken Machava {<Stamps stamps="active" />}</div>
                        </div>
                        <div className="py-4">
                            <div className="text-center fw-normal dash-bio">Densevolvedor de Aplicações Web | Técnico de Suporte Informático</div>
                            <button className="hidden-focus mt-2 btn btn-sm btn-primary w-100" type="submit" data-bs-toggle="modal" data-bs-target="#show-Profile-Modal">Editar perfil</button>
                        </div>
                        <div className="d-flex flex-column flex-row-lg">
                            <span><img className="me-2" width="16px" src="/img/building.svg" />Aervel</span>
                            <span><img className="me-2" width="16px" src="/img/geo-alt.svg" />Mozambique</span>
                            <span><img className="me-2" width="16px" src="/img/link-45deg.svg" />aervel.com</span>
                        </div>
                    </div>
                    <div className="col-sm-9 p-0 m-0">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="h2 text-center p-2 bg-light brd-5">Gestão do Hotel</div>
                                <hr />
                                <div className="card">
                                    <div className="py-4">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="row">
                                                    <h5>Primeiro turno</h5>
                                                    <div className="col-6">
                                                        <label htmlFor="weeked">Started</label>
                                                        <input className="px-2 form-control hidden-focus" type="time" name="" id="weeked" />
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="week-end">Closed</label>
                                                        <input className="px-2 form-control hidden-focus" type="time" name="" id="week-end" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="row">
                                                    <h5>Segundo turno</h5>
                                                    <div className="col-6">
                                                        <label htmlFor="weeked">Started</label>
                                                        <input className="px-2 form-control hidden-focus" type="time" name="" id="weeked" />
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="week-end">Closed</label>
                                                        <input className="px-2 form-control hidden-focus" type="time" name="" id="week-end" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="row">
                                                    <h5>Terceiro turno</h5>
                                                    <div className="col-6">
                                                        <label htmlFor="weeked">Started</label>
                                                        <input className="px-2 form-control hidden-focus" type="time" name="" id="weeked" />
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="week-end">Closed</label>
                                                        <input className="px-2 form-control hidden-focus" type="time" name="" id="week-end" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="h5 text-dark p-3">Monitoramento dos Quartos</h4>
                                        <form action="#" method="post" className="needs-validation" noValidate>
                                            <div className="row g-2 g-lg-4">
                                                <div className="col-7">
                                                    <select name="" id="" className="p-2 form-select hidden-focus p-0" required>
                                                        <option value="" selected >Selecionar tipo de quarto</option>
                                                        <option value="single-room">Single Room</option>
                                                        <option value="single-room">Double Room</option>
                                                        <option value="single-room">King Double Room</option>
                                                        <option value="single-room">Luxury Double Room</option>
                                                    </select>
                                                </div>
                                                <div className="col-5">
                                                    <input className="form-control hidden-focus" type="file" name="" id="file" accept=".jpg,.svg,.png,.svg" required />
                                                </div>
                                                <div className="col-5">
                                                    <div className="form-floating">
                                                        <input className="form-control hidden-focus" type="number" name="" id="price" required />
                                                        <label htmlFor="price">Preço do Quarto</label>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="form-floating">
                                                        <input maxLength={300} className="form-control hidden-focus" type="text" name="" id="describe" required />
                                                        <label htmlFor="describe">Descrição</label>
                                                    </div>
                                                </div>
                                                <div className="p-2 pt-3 mt-0">
                                                    <button type="submit" className="w-100 btn btn-sm btn-success hidden-focus">Adicionar quarto</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
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
            <Modal style="profile" />
            <Modal style="delete" />
        </>
    )

}

export default Dashboard;

/*
Primeiro Turmo
07:00 - 15:00


Segundo Turno
15:00 - 23:00


Terceiro Turno
23:00 - 07:00
**/