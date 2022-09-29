import Image from "next/image";

export interface ServiceCardProps {
    name: string,
    url?: string,
    bannerSrc?: string
}

export default function AppServiceCard(props: ServiceCardProps) {

    const navigateToUrl = () => {
        if(!props.url) return;
        window.open(props.url, "_blank");
    }

    return (
        <div onClick={navigateToUrl} className='inline-flex select-none flex-col gap-2 active:scale-95 transform-gpu will-change-transform transition-all cursor-pointer rounded overflow-hidden'>
            <div className="relative w-48 h-72 rounded bg-body-light overflow-hidden pointer-events-none">
                <Image layout="fill" objectFit={props.bannerSrc ? "cover" : "contain"} src={props.bannerSrc || "/favicon.png"} alt={`${props.name} Logo`} />
            </div>

            <p>{props.name}</p>
        </div>
    );
}