const Layanan = () => {
    return (
        <div style={{ height: "100vh", padding: "10vw" }}>
            <h2 style={{ paddingBottom: "5vh" }}>Layanan Kami</h2>
            <div className="layanan">
                <ul>
                    <li>
                        <img src="images-checklist.jpeg" alt="" style={{ height: "30px" }} />
                        <p>Kami memastikan score turnitin awal sebelum kami kerjakan.</p>
                    </li>
                    <li>
                        <img src="images-parafrase.png" alt="" style={{ height: "30px" }} />
                        <p>Menulis ulang bagian yang terdeteksi turnitin (blok merah) dengan bahasa yang unik tanpa menghilangkan maksud dan tujuannya.</p>
                    </li>
                    <li>
                        <img src="images-double-check.jpeg" alt="" style={{ height: "30px" }} />
                        <p>Melakukan pengecekan ulang memastikan score turnitin sudah sesuai dengan yang anda butuhkan.</p>
                    </li>
                    <li>
                        <img src="images-repot-pdf.png" alt="" style={{ height: "30px" }} />
                        <p>Melakukan laporan hasil parafrase dan bukti chek final score terakhir berupa file pdf.</p>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Layanan;