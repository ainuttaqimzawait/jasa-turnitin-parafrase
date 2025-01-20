import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#395144] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Kolom 1: Logo dan Deskripsi */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Tugas Kampus</h1>
                        <p className="text-sm text-gray-400">
                            Kami menyediakan layanan profesional untuk membantu Anda
                            menyelesaikan tugas kuliah dengan cepat dan mudah. Kepuasan Anda
                            adalah prioritas kami.
                        </p>
                    </div>

                    {/* Kolom 2: Layanan */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Layanan Kami</h2>
                        <div className='flex justify-center'>
                            <ul className="space-y-2 text-left w-72">
                                <li className="text-gray-400">📄 Penulisan Makalah</li>
                                <li className="text-gray-400">📊 Pembuatan Skripsi</li>
                                <li className="text-gray-400">📘 Parafrase Karya Ilmiah</li>
                                <li className="text-gray-400">📑 Editing Penulisan Karya Tulis</li>
                            </ul>
                        </div>
                    </div>

                    {/* Kolom 3: Kontak */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Hubungi Kami</h2>
                        <p className="text-sm text-gray-400 mb-2">
                            Untuk informasi lebih lanjut atau konsultasi tugas, hubungi kami melalui WhatsApp:
                        </p>
                        <a
                            href="https://wa.me/6285174321086"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-600 no-underline"
                        >
                            WhatsApp: +6285174321086
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
                    © 2023 TugasKampus All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
