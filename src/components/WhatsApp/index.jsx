import { Image, Nav } from "react-bootstrap"

const WhatsApp = () => {
    return (
        <Nav.Link href="#action2" style={{ position: "fixed", backgroundColor: "#25D366", marginTop: "80vh", marginLeft: "80vw", zIndex: "990", borderRadius: "50%" }}>
            <Image src="logo-whatsapp-removebg-preview.png" style={{ height: "7vh", width: "7vh", padding: "7px" }} />
        </Nav.Link>
    )
}

export default WhatsApp;