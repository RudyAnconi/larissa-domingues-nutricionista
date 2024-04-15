import Image from "next/image";
import Link from "next/link";

const Whatsapp = () => {
    return (
        <div className="fixed bottom-10 right-3 md:right-20 lg:right-[21.2rem] w-10 h-10 rounded-full p-2 bg-foreground border border-background z-50 transition-all hover:scale-110">
            <Link className="decoration-none"
                href={
                    "https://wa.me/5562992916766?text=Ol%C3%A1.+Gostaria+de+saber+mais+sobre+a+consulta+nutricional."
                }
                target="_blank"
            >
                <Image className="invert"
                    src={
                        "https://larissa-domingues-nutricionista.cdn.prismic.io/larissa-domingues-nutricionista/Zh2IBjjCgu4jz1ad_whatsapp-svgrepo-com.svg"
                    }
                    alt="Whatsapp"
                    width={48}
                    height={48}
                />
            </Link>
        </div>
    );
};

export default Whatsapp;
