import HeroImage from "../Assets/Images/Heroes_work_project.png"

const Heroes = () => {
    return (
        <section className="bg-blue-50 py-20" id="home">
            <div className="container mx-auto flex flex-col lg:flex-row items-center pt-10 lg:pt-0">
                {/* <!-- Teks Hero --> */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold title-gradient max-lg:text-center text-green">
                        Jasa Joki Tugas Kuliah Profesional
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        Solusi Cepat dan Terpercaya untuk Makalah, Artikel, Jurnal, Skripsi, & Parafrase
                    </p>
                    <p className="mt-2 text-md text-gray-500">
                        Bebaskan Waktumu, Tingkatkan Nilai Akademikmu! Kami siap membantu menyelesaikan tugas dengan hasil berkualitas tinggi, tepat waktu, dan harga terjangkau.
                    </p>
                    <div className="mt-6 flex space-x-4 justify-center lg:justify-start">
                        <a href="https://wa.me/6285174321086" className="px-6 py-3 bg-green text-white rounded-lg shadow-lg hover:bg-lime-500 no-underline">
                            Pesan Sekarang
                        </a>
                        <a href="https://wa.me/6285174321086" className="px-6 py-3 border border-green text-green rounded-lg shadow-lg hover:bg-blue-50 no-underline">
                            Konsultasi Gratis
                        </a>
                    </div>
                </div>
                {/* <!-- Gambar Hero --> */}
                <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                    <img src={HeroImage} alt="Ilustrasi Jasa Tugas Kuliah" className="w-3/4 lg:w-full" />
                </div>
            </div>
        </section>
    )
}

export default Heroes