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
            objectFit="cover"
            layout="fill"
            quality={100}
            alt="Background image - Lavinia beach resort - Mount Lavinia"
        />
    );
}