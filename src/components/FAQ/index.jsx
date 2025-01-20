import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Apa Itu Tugas Kampus.com?",
            answer:
                "Jasa Tugas Kampus.com adalah layanan profesional yang membantu mahasiswa menyelesaikan berbagai jenis tugas akademik, seperti makalah, jurnal, skripsi, tesis, parafrase dokumen, presentasi PowerPoint, proposal penelitian, dan lainnya.",
        },
        {
            question: "Apa Saja Jenis Tugas yang Bisa Dikerjakan?",
            answer:
                "Kami melayani berbagai jenis tugas kuliah, seperti makalah, jurnal, skripsi, tesis, parafrase hingga perbaiki format penulisan dan layout.",
        },
        {
            question: "Bagaimana Proses Pemesanan Jasa Joki Tugas?",
            answer:
                "1. Konsultasi Awal\n2. Pengisian Formulir\n3. Penawaran Harga\n4. Pembayaran DP\n5. Pengerjaan Tugas\n6. Revisi (Jika Diperlukan)\n7. Pengiriman Final",
        },
        {
            question: "Bagaimana Jika Saya Membutuhkan Revisi?",
            answer:
                "Kami menyediakan layanan revisi gratis sebanyak 1-2 kali sesuai kesepakatan awal. Revisi yang kami terima adalah revisi dalam lingkup tugas yang telah dikerjakan, bukan perubahan besar pada topik atau instruksi awal.",
        },
        {
            question: "Bagaimana Cara Pembayaran?",
            answer:
                "Kami menerima pembayaran melalui transfer bank dan e-wallet seperti OVO, GoPay, Dana, dan ShopeePay.",
        },
    ];

    return (
        <section className=' py-20'>
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-6 text-green">
                    FAQ
                </h1>
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center text-left font-medium text-lg p-4 bg-gray-100 rounded-md border border-gray-200 hover:bg-gray-200"
                        >
                            {faq.question}
                            <span>
                                <FaPlus />
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div className="mt-2 p-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-md">
                                <p className="whitespace-pre-line">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ;