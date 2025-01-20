import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Assets/Images/IMG_20250114_002503-removebg.png'
import { useCallback, useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

function TopBar() {
    const [showNavbar, setShowNavbar] = useState('translate-y-0 bg-none');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);

    // Gunakan useCallback untuk stabilitas fungsi
    const controlNavbar = useCallback(() => {
        const currentScrollY = window.scrollY;

        // Menampilkan navbar jika scroll ke atas
        if (currentScrollY < lastScrollY && currentScrollY === 0) {
            setShowNavbar('translate-y-0 bg-none');
        } else if (currentScrollY < lastScrollY && currentScrollY !== 0) {
            setShowNavbar('translate-y-0 bg-custom-radial');
        }
        // Menyembunyikan navbar jika scroll ke bawah dan posisi sudah lebih dari 50px
        else if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setShowNavbar('-translate-y-full');
        }

        // Update posisi scroll terakhir
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        // Menambahkan event listener saat komponen dimount
        window.addEventListener('scroll', controlNavbar);

        // Membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [controlNavbar]); // Tambahkan controlNavbar sebagai dependensi

    return (
        <Navbar expanded={expanded} onToggle={handleToggle} expand="lg" className={`!fixed top-0 w-screen transition-transform duration-300 z-50 ${showNavbar}`}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="jasa tugas kampus"
                        src={Logo}
                        width="57"
                        className="d-inline-block align-top"
                    />
                    <h1 className='text-2xl font-bold -mt-7 ms-[40px] text-green font'>TUGAS</h1>
                    <h2 className='text-2xl font-monospace -mt-5 ms-[39px] text-green'>KAMPUS</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleToggle} className='focus:!shadow-none !border-none' />
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} className='lg:px-16 z-50 mb-2 !text-gray-500'
                    style={{ width: '170px', maxWidth: '80%', padding: '10px' }}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Nav
                        className="md:my-2 md:gap-3 md:justify-end"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link onClick={() => { setExpanded(false) }} href="#home">Home</Nav.Link>
                        <Nav.Link onClick={() => { setExpanded(false) }} href="#service">Service</Nav.Link>
                        <Nav.Link onClick={() => { setExpanded(false) }} href="#order">Cara Order</Nav.Link>
                        <Nav.Link onClick={() => { setExpanded(false) }} href="#testimonials">Testimonial</Nav.Link>
                        <Nav.Link onClick={() => { setExpanded(false) }} href="https://wa.me/6285174321086">Pesan Sekarang</Nav.Link>
                    </Nav>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default TopBar;