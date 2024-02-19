import HeroImage from "../heroimage/hero-image";
import styles from "./herosection.module.css"

export default function HeroSection() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ width: "100%", height: "70vh", overflow: "hidden", position: "relative" }}>
                    <HeroImage path="/Images/lbr.png" />
                </div>
                <div style={{ width: "100%", height: "30vh", display: "inline-flex", gap: "68px", padding: "0px 68px", alignItems: "center" }}>
                    <div style={{ width: "50%", height: "134px", fontSize: 56, fontWeight: '800' }}>Experience beachside dining at its finest</div>
                    <div style={{ width: "50%", height: "134px", display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: 16, lineHeight: "56px" }}>Indulge in delicious food while enjoying breathtaking views of the ocean.</p>
                        <div style={{ width: "100%", display: "inline-flex", gap: "10px", marginTop: "16px" }}>
                            <div style={{ border: '1px black solid', justifyContent: 'center', alignItems: 'center', padding: "12px 24px", background: 'black', borderRadius: "4px" }}>
                                <p style={{ color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', background: 'black', }}>Explore</p>
                            </div>
                            <div style={{ border: '1px black solid', justifyContent: 'center', alignItems: 'center', padding: "12px 24px", background: 'black', borderRadius: "4px" }}>
                                <p style={{ color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', }}>Contact Management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}