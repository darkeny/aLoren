import Head from "next/head";
import Navbar from "../../components/Navbar";



let Person = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/globals.css" />
                <title>Person</title>
            </Head>

            <Navbar theme="light" apperence="full" />
            <form action="/user" method="POST" className={"w-100 needs-validation"} noValidate>
                <div className="container content-center container-login-small">
                    <div className="pt-5 form-group">
                        <div className="pt-5 row">
                        </div>
                        <div className="mt-2 col-12">
                            <div className="form-floating">
                                <input type="text" name="name" id="setElement" className="form-control hidden-focus" required />
                                <label htmlFor="name">Nome</label>
                            </div>
                        </div>
                        <div className="mt-2 col-12">
                            <div className="form-floating">
                                <input type="date" name="birth-day" id="birth-day" className="form-control hidden-focus" required />
                                <label htmlFor="birth-day">Data de nascimento</label>
                            </div>
                        </div>
                        <div className="mt-2 0col-12">
                            <div className="form-floating">
                                <select name="sel" id="sel" className="form-control hidden-focus" required>
                                    <option></option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Femenino</option>
                                </select>
                                <label htmlFor="sel">Sexo</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="w-100 my-3 btn-submit text-muted">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Person;