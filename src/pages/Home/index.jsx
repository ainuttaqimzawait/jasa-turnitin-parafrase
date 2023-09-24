import Wave from "../../components/Wave";

const Home = () => {
    return (
        <div style={{ height: "100vh", padding: "15vw 10vw 10vw 10vw" }}>
            <Wave />
            <div>
                <h1 style={{ paddingBottom: "5vh" }}>Jasa Turnitin dan Parafrase atau Cek Plagiasi (Plagiarism Checker)</h1>
                <h4 style={{ paddingBottom: "5vh" }}>Kenapa menggunakan jasa cek dan penurunan Turnitin di Jasaturnitin.id?
                    Ada banyak keuntungan ketika menggunakan jasa cek plagiarisme Turnitin di Jasaturnitin.id:
                    Bebas tanpa batasan halaman, proses cepat hanya 5 menit untuk cek turnitin, deadline sesuai request customer,
                    no repository</h4>
                <h3>Harga cek Turnitin Rp5.000-an/file*</h3>
                {/* <h2>Stopwatch untuk promo harga cek turnitin</h2> */}
            </div>
        </div>
    )
}

export default Home;