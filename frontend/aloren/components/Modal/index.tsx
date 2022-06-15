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
                            <form id="profileForm" action={"#"} method={"post"} className={"needs-validation"} noValidate>
                                <div className={"container"}>
                                    <div className={"form-group"}>
                                        <div className="row">
                                            <span className="fw-bold h5">Perfil</span>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" name="namePerfil" id="namePerfil" className="form-control hidden-focus" required placeholder="Nome do Perfil" />
                                                    <label className="text-muted small" htmlFor="namePerfil">Nome</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className={"form-floating"}>
                                                    <textarea name={"descPerfil"} id={"descPerfil"} className={"mt-3 hidden-focus form-control"} placeholder={"Descrição"}
                                                        required></textarea>
                                                    <label htmlFor={"descPerfil"} className={"text-muted small"}>Descrição</label>
                                                </div>
                                            </div>
                                            <span className="fw-bold h5 my-3">Organização</span>
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
                                    </div>
                                    <span className={"text-muted small"}>Coloque uma descrição de voçê para que as pessoas possam saber quem você é e o que faz</span>
                                </div>
                            </form>
                        </div>
                        <div className={"modal-footer"}>
                            <button onClick={() => { document.forms.namedItem("profileForm")?.submit() }} type={"button"} className={"btn btn-primary"}>
                                Atualizar
                            </button>
                            <button type={"button"} className={"btn btn-dark"} data-bs-dismiss={"modal"}>
                                Cancelar
                            </button>
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
                                Coisas ruins inesperadas acotecem se você não ler isso!!
                            </div>
                            <p className="p-4 fw-light">
                                Esta ação <strong>não pode</strong> ser desfeita, isso atualizará permanentemente as informações, as execuções de fluxo de trabalho serão temporariamente suspensas num intervalo de 30 minutos, uma notificação será enviada aos hóspedes cadastrados, após a atualização das informações.
                            </p>
                            <div className="p-2">
                                <label htmlFor="confirm">Por favor, digite seu nome de usuário para confirmar</label>
                                <input type="text" name="" id="confirm" className="form-control hidden-focus" />
                                <div className="pt-1 text-center">
                                    <button type="submit" className="btn btn-outline-primary btn-sm me-3 px-3">Sim, Compreendo. Atualizar informações!!</button>
                                    <button type="submit" className="btn btn-sm btn-outline-danger px-3">Resetar</button>
                                </div>
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