import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import Paralax from '../components/Paralax';
import styles from '../styles/Home.module.css';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/globals.css" />
        <link rel="stylesheet" href="/css/home.css" />
        <title>Home</title>
      </Head>


      <main className={styles.page_layout}>
        <header>
          <Navbar theme='light' apperence='full' />
        </header>
        <div className={styles.container_size}>
          <div className="row py-lg-3">
            <div className="col-lg-4">
              <div className={styles.welcome}>
                <div>Bem Vindo!</div>
                <h5 className='fw-normal'>Restaure as suas energias com o melhor conforto</h5>
                <div className="btn btn-sm c-welcome c-white brd-15 p-2 fw-bold">Marcar Hospedagem</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text-center">
                <div className={styles.welcome_img}>
                  <img className='w-100' src="/img/HOTELL.png" />
                </div>

              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
export default Home;