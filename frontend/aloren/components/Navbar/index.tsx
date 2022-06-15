import Link from "next/link"
import Head from 'next/head';
import { useEffect } from "react";
import router from "next/router";

<Head>
    <link rel="stylesheet" href="/css/globals.css" />
</Head>

type Theme = 'dark' | 'light'

type Apparence = 'full' |  'dashboard'

type Props = {
    theme: Theme
    apperence: Apparence
}

/**
 * 
 * @param props The navabr Props
 * @returns JSX Element navbar. The returned navbar changes according wiht configurations in props.
 */
 export default function Navbar(props: Props): JSX.Element {
    useEffect(focus)

    return navbars[props.apperence](props)
}

/**
 * Focus the nav-link of this route.
 */
function focus() {

    const path = router.pathname.replace("/", "")
    const link = document.getElementById(path === "" ? "overview" : path)

    if (link) {
        link.setAttribute("aria-checked", "true")
    }
}

/**
 * Stores the navbars according with its apparence.
 */
const navbars = {
    full: FullNavbar,
    dashboard: DashboardNavbar
}

/**
 * 
 * @param props The Props.
 * @returns A full navbar.
 */
function FullNavbar(props: Props): JSX.Element {

    const NAV_LINK = "nav-link px-lg-4 py-lg-3" // for nav-link

    return (
        <div className={`navbar ${props.theme} navbar-expand-lg navbar-floating navbar-sticky navbar-${props.theme} pb-lg-0`}>

            <div className={"container-fluid"}>

                <button className={"navbar-toggler border-0"} type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={"navbar-toggler-icon"} />
                </button>

                <a href={"/"} className={"illustrative-logo me-lg-4 p-2"}>
                    <img src={`/img/aervel-logo-${props.theme}.png`} width={"38px"} alt={"Aervel"} />
                </a>

                <Link href={"/login"}><a type={"button"} href={"/login"} className={"btn btn-primary order-lg-3 btn-login"}>Entrar</a></Link>

                <nav className={"collapse navbar-collapse"} id={"navbar"}>
                    <ul className={"navbar-nav"}>
                        <li>
                            <Link href={"/"}><a href={"#"} className={NAV_LINK} id={"overview"}>Geral</a></Link>
                        </li>
                        <li>
                            <Link href={"/account"}><a href={"/account"} className={NAV_LINK} id={"account"}>Conta</a></Link>
                        </li>
                        <li>
                            <Link href={"/bedroom"}><a href={"/bedroom"} className={NAV_LINK} id={"bedroom"}>Quartos</a></Link>
                        </li>
                        <li>
                            <Link href={"/support"}><a href={"/support"} className={NAV_LINK} id={"support"}>Suporte</a></Link>
                        </li>
                        <li>
                            <Link href={"/about"}><a href={"/about"} className={NAV_LINK} id={"about"}>Sobre</a></Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}




function DashboardNavbar(props: Props): JSX.Element {

    const NAV_LINK = "nav-link px-lg-4 py-lg-3" // for nav-link

    return (
        <>
            <div className={`navbar ${props.theme} navbar-expand-lg navbar-floating navbar-sticky navbar-${props.theme} pb-lg-0`}>

                <div className={"container-fluid"}>

                    <button className={"navbar-toggler border-0"} type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={"navbar-toggler-icon"} />
                    </button>

                    <a href={"/"} className={"illustrative-logo me-lg-4 p-2"}>
                        <img src={`/img/aervel-logo-${props.theme}.png`} width={"38px"} alt={"Aervel"} />
                    </a>


                    <nav className={"collapse navbar-collapse"} id={"navbar"}>
                        <ul className={"navbar-nav"}>
                            <li>
                                <Link href={"/"}><a href={"#"} className={NAV_LINK} id={"overview"}>Geral</a></Link>
                            </li>
                            <li>
                                <Link href={"/user"}><a href={"/dashboard"} className={NAV_LINK} id={"[user]"}>Painel de controle</a></Link>
                            </li>
                            <li>
                                <Link href={"/account"}><a href={"/account"} className={NAV_LINK} id={"account"}>Conta</a></Link>
                            </li>
                            <li>
                                <Link href={"/support"}><a href={"/suppor"} className={NAV_LINK} id={"support"}>Suporte</a></Link>
                            </li>
                            <li>
                                <Link href={"/about"}><a href={"#"} className={NAV_LINK} id={"about"}>Sobre</a></Link>
                            </li>

                        </ul>
                    </nav>

                </div>

            </div>
        </>
    )
}