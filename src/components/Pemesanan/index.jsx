import chattingImage from "../Assets/Images/chatting.png"
import detailProject from "../Assets/Images/detail_project.png"
import paymentProject from "../Assets/Images/payment-project.png"
import workingProject from "../Assets/Images/working-project.png"
import doneWork from "../Assets/Images/workdone.png"
import { useEffect, useRef, useState } from "react"

const Pemesanan = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const Pemesanan = [
        { icon: chattingImage, title: 'Chat Kami di Whatsapp', description: 'WA: 085904277619' },
        { icon: detailProject, title: 'Kirimkan Detail Tugas', description: 'Berikan informasi lengkap tentang jenis tugas, topik, dan tenggat waktu.' },
        { icon: paymentProject, title: 'Lakukan Pembayaran', description: 'Selesaikan pembayaran menggunakan metode yang Anda pilih.' },
        { icon: workingProject, title: 'Tugas Diproses', description: 'Tugas Anda akan dikerjakan oleh tim profesional kami.' },
        { icon: doneWork, title: 'Tugas Selesai', description: 'Hindari plagiarisme dengan layanan parafrase dan editing profesional kami.' },
    ];


    useEffect(() => {
        const currentSection = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);
    return (
        <section id="order" className="bg-gray-50 py-16">
            <div className="container mx-auto flex md:gap-14 lg:gap-28 flex-col md:flex-row">
                <div className="w-full md:pt-24">
                    <div className="lg:sticky lg:top-1/2">
                        <h1 className="text-4xl font-bold text-green text-center mb-6">Cara Pemesanan Jasa Joki Tugas Kuliah</h1>
                        <p className="text-lg text-gray-700 text-center mb-12">Proses Mudah dan Cepat untuk Mendapatkan Bantuan Akademik</p>
                    </div>
                </div>
                {/* <!-- Langkah-Langkah --> */}
                <div className="w-full relative md:mt-20">
                    <div
                        ref={sectionRef}
                        className={`grid grid-cols-1 ml-10 relative ${isVisible ? 'bookingstep' : ''}`}>
                        {Pemesanan.map((service, index) => (
                            <div key={index} className="flex lg:mt-20 ml-10 lg:ml-28 border-solid border-2 bg-white shadow rounded-lg">
                                <img src={service.icon}
                                    alt={service.icon}
                                    className="w-16 lg:w-28 h-16 lg:h-28  -left-8 lg:-left-14 -mt-4 flex items-center justify-center rounded-full absolute z-10 bg-blue-100" />
                                <div className="text-left mx-4">
                                    <h2 className="text-xl font-semibold text-green">{service.title}</h2>
                                    <p className="text-gray-600 text-sm">{service.description}</p>
                                </div>
                                <span className="absolute border-r-[12px] border-y-[12px] border-r-white border-y-transparent -ml-3 mt-1 z-[1]"></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pemesanan;