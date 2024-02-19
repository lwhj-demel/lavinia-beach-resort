import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";


export default function HeroImage({
    path
}: {
    path: string;
}) {
    return (
        <Image
            src={path}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Background image - Lavinia beach resort - Mount Lavinia"
        />
    );
}