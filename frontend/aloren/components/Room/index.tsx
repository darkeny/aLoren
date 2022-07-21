import Head from "next/head";
import Navbar from "../Navbar";

const Rooms = () => {
    return (
        <>
            <main className='container'>
                <div className="max-width-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6">
                            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                                    <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                                    <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>

                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className='brd-15' width="100%" src={"/img/rooms/double_room_1.jpg"} alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='brd-15' width="100%" src="/img/rooms/double_room_3.jpg" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className='brd-15' width="100%" src="/img/rooms/double_room_2.jpg" alt="" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="center-center">
                                <div className="display-6 text-center">SINGLE ROOM <span>110$</span></div>
                                <div className="text-muted text-center">aLoren o lugar perfeito para o seu dia cansativo</div>
                                <p className="text-center text-dark pt-1">
                                    Quarto de solteiro, com mobília simples suficiente para um hóspede, vista lateral esquerda deslubrante com um mar azul, quarto com dois Ar condicionados e internet e direito a refeições
                                </p>
                                <div className="d-flex justify-content-center align-items-center brd-5 shadow-sm">
                                    <span className='me-3'><img className='me-1 pb-1' width="22px" src="/img/bed.png" />Single bed</span>
                                    <span className='me-3'><img className='me-1 pb-1' width="22px" src="/img/wifi.svg" />Wifi</span>
                                    <span className='me-3'><img className='me-1 pb-1' width="22px" src="/img/tv.svg" />Cable TV</span>
                                    <span className='me-3'><img className='me-1 pb-1' width="22px" src="/img/ac.png" />Ac</span>
                                </div>
                                <div className="py-3 text-center">
                                    <button className='hidden-border bg-white' type='submit'><a className="btn btn-sm btn-success text-center" href="hospede">Hosperdar-se</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Rooms;
