const Layanan = () => {
    return (
        <div style={{paddingBottom:"5vh"}}>
            <h2 style={{ paddingBottom: "3vh" }}>Layanan Kami</h2>
            <div className="layanan">
                    <div style={{padding:"5vw"}}>
                        <img src="images-checklist.jpeg" alt="" style={{ height: "30px" }} />
                        <p>TURNITIN CHEK</p>
                        <p>Kami memastikan score turnitin awal sebelum kami kerjakan.</p>
                    </div>
                    <div style={{padding:"5vw"}}>
                        <img src="images-parafrase.png" alt="" style={{ height: "30px" }} />
                        <p>PARAFRASE</p>
                        <p>Menulis ulang bagian yang terdeteksi turnitin (blok merah) dengan bahasa yang unik tanpa menghilangkan maksud dan tujuannya.</p>
                    </div>
                    <div style={{padding:"5vw"}}>
                        <img src="images-double-check.jpeg" alt="" style={{ height: "30px" }} />
                        <p>DOUBLE CHECK</p>
                        <p>Melakukan pengecekan ulang memastikan score turnitin sudah sesuai dengan yang anda butuhkan.</p>
                    </div>
                    <div style={{padding:"5vw"}}>
                        <img src="images-repot-pdf.png" alt="" style={{ height: "30px" }} />
                        <p>REPORT PDF</p>
                        <p>Melakukan laporan hasil parafrase dan bukti chek final score terakhir berupa file pdf.</p>
                    </div>
            </div>


        </div>
    )
}

export default Layanan;