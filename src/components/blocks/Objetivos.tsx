import { BlocoProps } from "@/slices/Bloco";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const Objetivos = ({ slice }: BlocoProps) => {
    return (
        <div className="relative">
            <div className="flex inset-0 absolute z-0">
                <div className="flex-1 bg-background"></div>
                <div className="flex-1 bg-foreground"></div>
            </div>
            <div className="container m-auto bg-background text-foreground rounded-[5rem] rounded-tl-none py-16 px-6 md:p-16 relative z-1">
                <div className="flex items-center gap-3 justify-end">
                    <PrismicNextImage
                        alt=""
                        width={40}
                        height={40}
                        className="*:fill-white"
                        field={slice.primary.icone}
                    />
                    <h1
                        className="text-4xl relative
                after:content[''] after:absolute after:-bottom-3 after:left-0 after:h-2 after:bg-foreground after:w-24
                
                "
                    >
                        {slice.primary.titulo}
                    </h1>
                </div>
                <div className="grid items-center gap-3 justify-end  my-16">
                    {slice.items.map((item, k) => (
                        <div
                            key={k}
                            className="text-2xl md:text-3xl lg:text-4xl text-right pr-7 relative
                            after:content[''] after:absolute after:right-0 after:top-3 after:h-3 after:bg-foreground after:w-3"
                        >
                            <PrismicRichText field={item.conteudo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Objetivos;
