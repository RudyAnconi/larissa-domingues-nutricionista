import { PrismicNextImage } from "@prismicio/next";
import { ImageField, KeyTextField } from "@prismicio/client";

interface HeroComponentProps {
    foto: ImageField;
    logo: ImageField;
    nome: KeyTextField;
    profissao: KeyTextField;
}

const HeroComponent = ({ foto, logo, nome, profissao }: HeroComponentProps) => {
    return (
        <>
            <div className="relative md:-mt-14">
                <div className="flex inset-0 absolute z-0">
                    <div className="flex-1 bg-background"></div>
                    <div className="flex-1 bg-foreground"></div>
                </div>
                <div className="container m-auto bg-background text-background rounded-r-[5rem] relative z-1 overflow-hidden">
                    <PrismicNextImage
                        field={foto}
                        alt=""
                    />
                    <div
                        className="absolute grid text-center
                                    [ -bottom-6 -right-3 scale-[55%] ]
                                    [ md:bottom-6 md:right-14 md:scale-100 ]
                                    [ lg:bottom-14 lg:right-48 lg:scale-125 ]"
                    >
                        <div className="flex justify-end md:justify-center mb-3">
                            <PrismicNextImage
                                className="invert"
                                field={logo}
                                alt=""
                            />
                        </div>
                        <h3 className="text-2xl">{nome}</h3>
                        <p className="tracking-widest">
                            {profissao}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroComponent;
