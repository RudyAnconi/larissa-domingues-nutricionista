import { HeroProps } from "@/slices/Hero";
import { PrismicNextImage } from "@prismicio/next";
import Navbar from "./Navbar";

const HeroComponent = ({ slice }: HeroProps) => {
    return (
        <>
            <div className="relative md:-mt-14">
                <div className="flex inset-0 absolute z-0">
                    <div className="flex-1 bg-background"></div>
                    <div className="flex-1 bg-foreground"></div>
                </div>
                <div className="container m-auto bg-background text-background rounded-r-[5rem] relative z-1 overflow-hidden">
                    <PrismicNextImage
                        field={slice.primary.foto}
                        alt=""
                    />
                    {/* <div className="absolute bottom-5 right-14 grid text-center text-black blur-sm opacity-40">
                        <div className="flex justify-center mb-3">
                            <PrismicNextImage
                                field={slice.primary.logo}
                                alt=""
                            />
                        </div>
                        <h3 className="text-2xl">{slice.primary.nome}</h3>
                        <p className="tracking-widest">{slice.primary.profissao}</p>
                    </div> */}
                    <div
                        className="absolute grid text-center
                                    [ -bottom-6 -right-3 scale-[55%] ]
                                    [ md:bottom-6 md:right-14 md:scale-100 ]
                                    [ lg:bottom-14 lg:right-48 lg:scale-125 ]"
                    >
                        <div className="flex justify-end md:justify-center mb-3">
                            <PrismicNextImage
                                className="invert"
                                field={slice.primary.logo}
                                alt=""
                            />
                        </div>
                        <h3 className="text-2xl">{slice.primary.nome}</h3>
                        <p className="tracking-widest">
                            {slice.primary.profissao}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroComponent;
