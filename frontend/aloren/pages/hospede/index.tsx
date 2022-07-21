import Head from "next/head";
import Navbar from "../../components/Navbar";

const Hospede = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/globals.css" />
                <title>Hospede-se</title>
            </Head>
            <header>
                <Navbar theme="light" apperence="full" />
            </header>
            <main className="content-center w-100">
                <div className="container-md">
                    <h1 className="pt-5 mt-5 text-center">Marcar Hospedagem</h1>
                    <form action="#" method="post" className="py-3 needs-validation" noValidate>
                        <div className="row g-2 g-lg-3">
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="datetime-local" name="" id="date" className="form-control hidden-focus" required />
                                    <label htmlFor="date">Data de Marcação</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="email" name="" id="email" className="form-control hidden-focus" required />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-floating">
                                    <select name="" id="" className="p-2 form-select hidden-focus p-0" required>
                                        <option selected value="">Selecionar tipo de quarto</option>
                                        <option value="single-room">Single Room</option>
                                        <option value="single-room">Double Room</option>
                                        <option value="single-room">King Double Room</option>
                                        <option value="single-room">Luxury Double Room</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="number" name="guest" id="email" className="form-control hidden-focus" required />
                                    <label htmlFor="guest">Convidada</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="number" name="guest" id="child" className="form-control hidden-focus" required />
                                    <label htmlFor="child">Crianças</label>
                                </div>
                            </div>
                        </div>
                        <div className="pt-5">
                            <div className="text-center">
                                <button className="btn btn-sm btn-success w-100 hidden-focus" type="submit">Submeter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Hospede;