import { BlocoProps } from "@/slices/Bloco";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const TempoConsulta = ({ slice }: BlocoProps) => {
    return (
        <div className="">
            <div className="container m-auto bg-background text-foreground rounded-[5rem] rounded-tl-none pt-80 px-6 md:p-16 md:pt-0 md:pb-0 relative z-1">
                <PrismicNextImage
                    alt=""
                    className="[ md:-ml-24 md:h-[550px] md:w-auto ] 
                    [ lg:-ml-12 lg:scale-100 ]"
                    field={slice.primary.imagem}
                />
                <div
                    className="absolute left-8 right-8 top-6 
                [ md:left-auto md:right-14 md:top-1/2 md:-translate-y-1/2 ]"
                >
                    <div className="flex items-center gap-3 justify-end">
                        <PrismicNextImage
                            alt=""
                            width={40}
                            height={40}
                            field={slice.primary.icone}
                        />
                        <h1
                            className="text-4xl relative
                after:content[''] after:absolute after:-bottom-3 after:left-0 after:h-2 after:bg-foreground after:w-24"
                        >
                            {slice.primary.titulo}
                        </h1>
                    </div>
                    <div className="flex justify-end">
                        <div className="grid items-end gap-3 justify-end my-16 md:w-[52%] lg:w-[50%]">
                            {slice.items.map((item, k) => (
                                <div
                                    key={k}
                                    className="text-2xl md:text-2xl lg:text-4xl text-right pr-7 relative 
                            after:content[''] after:absolute after:right-0 after:top-3 after:h-3 after:bg-foreground after:w-3"
                                >
                                    <PrismicRichText field={item.conteudo} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TempoConsulta;
