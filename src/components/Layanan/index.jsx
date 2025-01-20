import { AiOutlineFileText } from "react-icons/ai";
import { BsJournalText } from "react-icons/bs";
import { FaEdit, FaRegNewspaper } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
// import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { IoMdOptions } from "react-icons/io";
import { MdOutlineArrowForward } from "react-icons/md";

const Layanan = () => {
    const services = [
        { icon: <AiOutlineFileText />, title: 'Pembuatan Makalah', description: 'Penulisan makalah akademik dengan riset mendalam dan tata bahasa profesional.' },
        { icon: <FaRegNewspaper />, title: 'Penulisan Artikel Akademik', description: 'Artikel berkualitas tinggi, 100% original, dan sesuai standar akademik.' },
        { icon: <BsJournalText />, title: 'Penulisan Jurnal Ilmiah', description: 'Penulisan jurnal siap submit dengan referensi terkini.' },
        { icon: <GiGraduateCap />, title: 'Bantuan Skripsi', description: 'Dari bab 1 hingga bab 5, kami siap membantu penyusunan skripsi Anda.' },
        { icon: <FaEdit />, title: 'Parafrase dan Editing', description: 'Hindari plagiarisme dengan layanan parafrase dan editing profesional kami.' },
        { icon: <IoMdOptions />, title: 'Layanan Lainnya', description: 'Pengetikan Ulang, Editing Format Penulisan, layout, dan Lain-lain' },
    ];
    return (
        <section className="bg-gray-50 py-16" id="service">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-green mb-6">Layanan Kami</h1>
                <p className="text-lg text-gray-700 mb-12">
                    Solusi Terbaik untuk Semua Kebutuhan Tugas Kuliah Anda
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card Layanan */}
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center bg-white p-6 shadow rounded-lg">
                            <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full text-blue-600 text-2xl">
                                {service.icon}
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-green">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                            <a className="flex text-blue-600 font-semibold no-underline hover:cursor-pointer" href="https://wa.me/6285174321086" >
                                <div className="">Pesan Layanan</div>
                                <p className="mt-[6px] ml-2">
                                    <MdOutlineArrowForward />
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Layanan;