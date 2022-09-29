import Image from "next/image";

export default function AppHeader() {
    return (
        <div className="flex items-center flex-1 gap-4 w-full p-window">
            <div>
                <Image width={32} height={32} src="/img/branding/tsalliance_logo_reduced.svg" alt="TSAlliance Icon" />
            </div>
            <div className="flex-grow"></div>
            <div>
                <ul>
                    <li>
                        <a href="https://github.com/TSAlliance" target="_blank" rel="noreferrer">
                            <Image width={32} height={32} src="/img/socials/github_mark_light_64.png" alt="Github Social Icon" className="cursor-pointer hover:opacity-80 transition-all transform-gpu will-change-transform active:scale-95" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}