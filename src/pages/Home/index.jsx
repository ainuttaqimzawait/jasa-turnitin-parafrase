import Wave from "../../components/Wave";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div style={{ height: "100vh", padding: "13vh 10vw 10vh 10vw" }}>
            <Wave />
            <div>
                <h1 style={{ paddingBottom: "5vh" }}>Jasa Turnitin dan Parafrase atau Cek Plagiasi (Plagiarism Checker)</h1>
                <p style={{ paddingBottom: "5vh", textAlign:" left" }}>Kenapa menggunakan jasa cek dan penurunan Turnitin di Jasaturnitin.id?
                    Ada banyak keuntungan ketika menggunakan jasa cek plagiarisme Turnitin di Jasaturnitin.id:
                    Bebas tanpa batasan halaman, proses cepat hanya 5 menit untuk cek turnitin, deadline sesuai request customer,
                    no repository</p>
                <h3>Harga cek Turnitin Rp5.000-an/file*</h3>
                {/* <h2>Stopwatch untuk promo harga cek turnitin</h2> */}
                {/*<div>
                <div style={{}}>
                  <span class="digit" id="hr">
                00</span>
            <span class="txt">Hari</span>
            </div>
            <span class="digit" id="min">
                00</span>
            <span class="txt">Menit</span>
            <span class="digit" id="sec">
                00</span>
            <span class="txt">Detik</span>
                </div>*/}
                <Button style={{width:"300px", height:"50px", backgroundColor:"#1c8211", border:"none", borderRadius:"6px", fontSize:"25px", margin:"0px 0px 10px 0px"}} href="https://wa.me/+6285904277619">Cek Turnitin</Button>
                <Button style={{width:"300px", height:"50px", backgroundColor:"#269aff", border:"none", borderRadius:"6px", fontSize:"25px", margin:"10px 0px 0px 0px"}} href="https://wa.me/+6285904277619">Jasa Parafrase</Button>
            </div>
        </div>
    )
}

export default Home;