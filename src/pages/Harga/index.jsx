import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

const PaketHarga = () => {
    return (
        <div style={{ backgroundColor: "red", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 >Jasa Cek (%) Turnitin</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card style={{ width: '300px', margin: "2vw" }}>
                    <Card.Header as="h5">Paket Cek Turnitin</Card.Header>
                    <Card.Body>
                        <Card.Title>Rp. 5000,-</Card.Title>
                        <Card.Text>/File</Card.Text>
                        <Button variant="primary">ORDER SEKARANG</Button>
                        <Card.Text>Note: hanya melakukan pengecekan turnitin tidak termasuk jasa penurunan turnitin</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '300px', margin: "2vw" }}>
                    <Card.Header as="h5">Paket Promo Cek Turnitin</Card.Header>
                    <Card.Body>
                        <Card.Title>Rp. 10.000,-</Card.Title>
                        <Card.Text>/3 File</Card.Text>
                        <Button variant="primary">ORDER SEKARANG</Button>
                        <Card.Text>Note: hanya melakukan pengecekan turnitin tidak termasuk jasa penurunan turnitin</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <h2>Jasa Penurunan (%) Turnitin</h2>
            <Card style={{ width: '18rem', display: "flex" }}>
                <Card.Header as="h5">Paket Penurunan Turnitin Turnitin</Card.Header>
                <Card.Body>
                    <Card.Title>Harga Berdasarkan 4 poin dibawah</Card.Title>
                    <Card.Text>Persentase penurunan</Card.Text>
                    <Card.Text>Jumlah Halaman</Card.Text>
                    <Card.Text>Deadline</Card.Text>
                    <Button variant="primary">ORDER SEKARANG</Button>
                    <Card.Text>Note: untuk lebih lengkapnya silahkan chat whatsapp admin</Card.Text>
                </Card.Body>
            </Card>
            <h2>Metode Pembayaran</h2>
            <div className="pembayaran">
                <img src="ShopeePay-removebg-preview.png" alt="" style={{ height: "20vh" }} />
                <img src="logo-gpay-removebg-preview.png" alt="" style={{ height: "20vh" }} />
                <img src="logo-dana-removebg-preview.png" alt="" style={{ height: "20vh" }} />
                <img src="logo-ovo-removebg-preview.png" alt="" style={{ height: "20vh" }} />
            </div>
        </div>
    )
}

export default PaketHarga;