import Head from "next/head";
import Navbar from "../../components/Navbar";



const Email = () => {

    return (
        <>
            <Head>
                <link rel={"stylesheet"} href={"/css/globals.css"} />
                <title>Login</title>
            </Head>

            <Navbar theme="light" apperence="full"/>

            <form action="/account/new" method={"POST"} className={"w-100 needs-validation"} noValidate>
                <div className="bg-white container content-center container-login-small">
                    
                        <input type="email" name="email" id="email" className="form-control hidden-focus border-simple" placeholder="Email" required />
                    
                    <button className={"mt-4 w-100 btn-submit"} type={"submit"}>Continuar</button>
                </div>
            </form>
        </>

    )
}

export default Email;