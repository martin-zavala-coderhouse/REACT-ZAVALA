import Bannerhel from "../assets/bannerhel.png";
import Bannerbre from "../assets/bannerbre.png";
import Bannercac from "../assets/bannercac.png";
import Bannerbon from "../assets/bannerbon.png";
import Bannerham from "../assets/bannerham.png";
import Bannerque from "../assets/bannerque.png";





const Banner = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src={Bannerhel} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Helados Orgánicos</h4>
                            <p>Helados de Yoghurt de Sabor Vainilla, Frambuesa, Arandanos</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={Bannercac} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Chocolates Orgánicos</h4>
                            <p>Chocolates de 100% Cacae, 85% Cacao y 70% Cacao</p>
                        </div>
                    </div>
                </div>
            </div>

            



            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src={Bannerbre} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Panadería Orgánica</h4>
                            <p>Panes de masa madre.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={Bannerque} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Quesos Orgánicos</h4>
                            <p>Quesos Hechos con leche de cabra orgánica</p>
                        </div>
                    </div>
                </div>
            </div>









            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src={Bannerbon} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>BoneBroth Orgánico</h4>
                            <p>BoneBroth de Pollo y Vacuno Orgánico Mezclados con Ajo, Cebolla, Romero, Salvia, Sal De Himalaya, Orégano</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={Bannerham} className="img-fluid" alt="..." />
                        <div className="card-body text-center">
                            <h4>Hamburguesas Orgánicas</h4>
                            <p>Hamburguesas de Pollo y Vacuno Orgánico con Chucrut y Salsa de Ajo y Jengibre   </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;