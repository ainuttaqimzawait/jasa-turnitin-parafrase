import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

const PaketHarga = () => {
    return (
        <div>
            <h2>Jasa Cek (%) Turnitin</h2>
            <div style={{display:"grid", placeItems:"center", width:"100vw"}}>
                <Card style={{ width: '250px', background:"rgba(76, 175, 80, 0.1)",marginTop:"3vh", marginBottom:"2vh"}}>
                    <Card.Header as="h5">Paket Cek Turnitin</Card.Header>
                    <Card.Body>
                        <Card.Title style={{fontSize:"40px"}}>Rp. 5000,-</Card.Title>
                        <Card.Text>/File</Card.Text>
                        <Button style={{backgroundColor:"green", border:"none", boxShadow:"5px 5px 10px 4px #25D366 inset"}} href="https://wa.me/+6285904277619">ORDER SEKARANG</Button>
                        <Card.Text style={{padding:"13px"}}>Note: hanya melakukan pengecekan turnitin tidak termasuk jasa penurunan turnitin</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '250px', background:"rgba(76, 175, 80, 0.1)", marginBottom:"5vh"}}>
                    <Card.Header as="h5">Paket Promo Cek Turnitin</Card.Header>
                    <Card.Body>
                        <Card.Title style={{fontSize:"40px"}}>Rp. 10.000,-</Card.Title>
                        <Card.Text>/3 File</Card.Text>
                        <Button style={{backgroundColor:"green", border:"none", boxShadow:"5px 5px 10px 4px #25D366 inset"}} href="https://wa.me/+6285904277619">ORDER SEKARANG</Button>
                        <Card.Text style={{padding:"13px"}}>Note: hanya melakukan pengecekan turnitin tidak termasuk jasa penurunan turnitin</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <h2>Jasa Penurunan (%) Turnitin</h2>
            <div style={{display:"grid", placeItems:"center", width:"100vw"}}>
            <Card style={{ width: '250px', background:"rgba(76, 175, 80, 0.1)", marginTop:"3vh", marginBottom:"4vh"}}>
                <Card.Header as="h5">Paket Penurunan Turnitin Turnitin</Card.Header>
                <Card.Body>
                    <Card.Title style={{fontSize:"30px"}}>Harga Berdasarkan 3 poin dibawah</Card.Title>
                    <ul>
                      <li>Persentase penuruna</li>
                      <li>Jumlah Halaman</li>
                      <li>Deadline</li>
                    </ul>
                    <Button style={{backgroundColor:"green", border:"none", boxShadow:"5px 5px 10px 4px #25D366 inset"}} href="https://wa.me/+6285904277619">ORDER SEKARANG</Button>
                    <Card.Text style={{padding:"13px"}}>Note: untuk lebih lengkapnya silahkan chat whatsapp admin</Card.Text>
                </Card.Body>
            </Card>
            </div>
            <h2>Metode Pembayaran</h2>
            <div className="pembayaran">
                <img src="ShopeePay-removebg-preview.png" alt="" style={{ height: "15vh", margin:" -50px 5px 0px 0px" }} />
                <img src="logo-gpay-removebg-preview.png" alt="" style={{ height: "23vh", margin:" -50px 0px 0px 5px" }} />
                <img src="logo-ovo-removebg-preview.png" alt="" style={{ height: "7vh", margin:" -70px 0px 0px -30px" }} />
                <img src="logo-dana-removebg-preview.png" alt="" style={{ height: "5vh", margin:" -70px 0px 0px 20px" }} />
            </div>
        </div>
    )
}

export default PaketHarga;