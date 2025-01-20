import { FaClock, FaDollarSign, FaFileSignature, FaShieldAlt, FaUniversity, FaUserTie } from "react-icons/fa";

const Reason = () => {
    const reasons = [
        {
            icon: <FaUserTie className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: 'Tim Profesional',
            description: 'Penulis berpengalaman yang siap membantu Anda meraih hasil terbaik.',
        },
        {
            icon: <FaFileSignature className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: '100% Original',
            description: 'Semua karya dijamin asli dan tingkat plagiarisme rendah.',
        },
        {
            icon: <FaDollarSign className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: 'Harga Terjangkau',
            description: 'Kami menawarkan harga yang kompetitif tanpa mengurangi kualitas.',
        },
        {
            icon: <FaClock className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: 'Tepat Waktu',
            description: 'Kami selalu menyelesaikan tugas sesuai tenggat waktu.',
        },
        {
            icon: <FaShieldAlt className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: 'Proses Mudah dan Aman',
            description: 'Anda dapat memesan layanan kami hanya dalam beberapa langkah, serta data dan informasi Anda akan kami jaga kerahasiaannya.',
        },
        {
            icon: <FaUniversity className="text-blue-500 text-4xl mx-auto mb-4" />,
            title: 'Penyesuaian Sesuai Panduan Kampus',
            description: 'Kami memastikan semua tugas sesuai dengan pedoman dan format kampus Anda.',
        },
    ];
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-green text-center mb-6">Mengapa Memilih Layanan Kami?</h1>
                <p className="text-lg text-gray-700 text-center mb-12">
                    Solusi Profesional untuk Tugas Kuliah Anda
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Alasan 1 */}
                    {reasons.map((reason, index) => (
                        <div key={index} className="p-3 md:p-6 text-center">
                            {reason.icon}
                            <h2 className="text-xl font-semibold text-green mb-2">{reason.title}</h2>
                            <p className="text-gray-600">{reason.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://wa.me/6285174321086" className="bg-green text-white px-6 py-3 rounded-lg hover:bg-lime-500 no-underline">
                        Pesan Sekarang
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Reason;