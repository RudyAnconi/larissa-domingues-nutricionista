import { BlocoProps } from "@/slices/Bloco";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const Consulta = ({ slice }: BlocoProps) => {
    return (
        <div className="">
            <div className="container m-auto bg-foreground text-background rounded-[5rem] py-16 px-6 md:p-16 relative z-1">
                <div className="flex justify-start gap-2 mb-10">
                    <PrismicNextImage
                        className="invert"
                        field={slice.primary.icone}
                    />
                    <h1
                        className="text-2xl md:text-4xl relative
                    [ after:content[''] after:absolute after:-bottom-4 after:left-0 after:h-2 after:bg-background after:w-24 ]"
                    >
                        {slice.primary.titulo}
                    </h1>
                </div>
                <div className="grid items-center gap-3 justify-end my-16">
                    {slice.items.map((item, k) => (
                        <div
                            key={k}
                            className="text-xl pl-7 relative [&_a]text-blue-500
                            [ md:text-xl ] [ lg:text-2xl ] 
                            [ after:content[''] after:absolute after:left-0 after:top-3 after:h-3 after:bg-background after:w-3 ]"
                        >
                            <PrismicRichText field={item.conteudo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Consulta;
