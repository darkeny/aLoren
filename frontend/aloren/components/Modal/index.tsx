import Head from "next/head";

type Style = "profile" | "delete"

type Props = {
    style: Style
}



export default function (props: Props): JSX.Element {
    return modals[props.style](props)
}

const modals = {
    profile: ProfileModal,
    delete: DeleteModal
}


function ProfileModal(props: Props): JSX.Element {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/globals.css" />
               
            </Head>
            <div className={"modal fade"} id={"show-Profile-Modal"} aria-labelledby={"modallabel"} aria-hidden={"true"}>
                <div className={"modal-dialog modal-dialog-centered"}>
                    <div className={"modal-content"}>
                        <div className={"modal-header"}>
                            <h5 className={"modal-title"} id={"modallabel"}>Editar Perfil</h5>
                            <button className={"btn-close"} type="button" data-bs-dismiss={"modal"} aria-label={"Close"}>
                            </button>
                        </div>
                        <div className={"modal-body bg-light"}>
                            <div className={"container"}>
                                <div className={"form-group"}>
                                    <form action={"#"} method={"post"} className={"needs-validation"} noValidate>
                                        <div className="row">
                                            <span className="fw-bold h5">Perfil</span>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control hidden-focus" placeholder="Nome do Perfil" required/>
                                                    <label className="text-muted small" htmlFor="namePerfil">Nome</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className={"form-floating"}>
                                                    <textarea maxLength={100} name={"descPerfil"} id={"descPerfil"} className={"mt-3 hidden-focus form-control"} placeholder={"Descri????o"}
                                                        required></textarea>
                                                    <label htmlFor={"descPerf-il"} className={"text-muted small"}>Descri????o</label>
                                                </div>
                                            </div>
                                            <span className="fw-bold h5 my-3">Organiza????o</span>
                                        </div>
                                        <div className="row">
                                            <div className="col-2">
                                                <img width="20px" src="/img/building.svg" />
                                            </div>
                                            <div className="col-10">
                                                <input type="text" name="nameOrg" id="nameOrg" className="bg-light border-one-line hidden-focus form-control" required />
                                            </div>
                                            <div className="col-2">
                                                <img width="20px" src="/img/geo-alt.svg" />
                                            </div>
                                            <div className="col-10">
                                                <input type="text" name="geoOrg" id="georg" className="bg-light border-one-line hidden-focus form-control" required />
                                            </div>
                                            <div className="col-2">
                                                <img width="20px" src="/img/link-45deg.svg" />
                                            </div>
                                            <div className="col-10">
                                                <input type="text" name="linkOrg" id="linkOrg" className="bg-light border-one-line hidden-focus form-control" required />
                                            </div>
                                        </div>
                                        <span className={"text-muted small"}>Coloque uma descri????o de vo???? para que as pessoas possam saber quem voc?? ?? e o que faz</span>
                                        <div className={"modal-footer"}>
                                            <button type={"submit"} className={"hidden-focus btn-sm btn btn-primary"}>
                                                Atualizar
                                            </button>
                                            <button type={"button"} className={"hidden-focus btn btn-sm btn-dark"} data-bs-dismiss={"modal"}>
                                                Cancelar
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function DeleteModal(props: Props): JSX.Element {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/globals.css" />
            </Head>
            <div className={"modal fade"} id={"show-Delete-Modal"} aria-labelledby={"modallabel"} aria-hidden={"true"}>
                <div className={"modal-dialog modal-dialog-centered"}>
                    <div className={"modal-content"}>
                        <div className={"modal-header"}>
                            <h5 className={"modal-title"} id={"modallabel"}>Tem absoluta certeza?</h5>
                            <button className={"btn-close"} type="button" data-bs-dismiss={"modal"} aria-label={"Close"}>
                            </button>
                        </div>
                        <div className={"modal-body p-0 bg-light"}>
                            <div className="p-4 bg-warning">
                                Coisas ruins inesperadas acotecem se voc?? n??o ler isso!!
                            </div>
                            <p className="p-4 fw-light">
                                Esta a????o <strong>n??o pode</strong> ser desfeita, isso atualizar?? permanentemente as informa????es, as execu????es de fluxo de trabalho ser??o temporariamente suspensas num intervalo de 30 minutos, uma notifica????o ser?? enviada aos h??spedes cadastrados, ap??s a atualiza????o das informa????es.
                            </p>
                            <div className="p-2">
                                <form action="#" method="post" className="needs-validation" noValidate>
                                    <label htmlFor="confirm">Por favor, digite seu nome de usu??rio para confirmar</label>
                                    <input type="text" name="" id="confirm" className="form-control hidden-focus" required />
                                    <div className="pt-1 text-center">
                                        <button type="submit" className="btn btn-outline-primary btn-sm me-3 px-3 hidden-focus">Sim, Compreendo. Atualizar informa????es!!</button>
                                        <button type="submit" className="btn btn-sm btn-outline-danger px-3 hidden-focus">Resetar</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className={"modal-footer"}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}