import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Testimony = () => {
    return (
        <div style={{marginTop:"5vh", display:"grid", placeItems:"center"}}>
            <h2>Testimonial Pengguna Jasa Cek dan Penurunan Turnitin</h2>
            <Carousel style={{ width: "300px", height: "500px" }}>
                <Carousel.Item>
                    <div style={{ height: "500px", width: "300px", backgroundColor: "lightgreen" }}></div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ height: "500px", width: "300px", backgroundColor: "lightgreen" }}></div>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <Image src="holder.js/171x180" rounded /> */}
                    <div style={{ height: "500px", width: "300px", backgroundColor: "lightgreen" }}></div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="jumlah-customer" style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ margin: "5vw 5vw 0vw 5vw" }}>
                    <h5>Cek Turnitin</h5>
                    <h1>500+</h1>
                    <h6>File</h6>
                </div>
                <div style={{ margin: "5vw 5vw 0vw 5vw" }}>
                    <h5>Parafrase</h5>
                    <h1>200+</h1>
                    <h6>File</h6>
                </div>
            </div>
        </div>
    )
}

export default Testimony