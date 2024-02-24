import Apple from "../assets/app_store_3x_d293084ca1.png";
import Android from "../assets/disponible_google_play_3x_c977cae3bc.png";
import LogoMc from "./LogoMc";
import PreFooter from "./PreFooter";

const Footer = () => {
    return (
        <>
            <PreFooter />
            <div className="container my-3">
                <hr />
                <div className="row my-3">
                    <div className="col-md-10">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Proveedores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Delivery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Preguntas Frecuentes</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <p className="font"><LogoMc tamano={40} /> © La Five 2023</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;