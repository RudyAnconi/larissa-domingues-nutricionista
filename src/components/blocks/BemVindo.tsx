import { BlocoProps } from "@/slices/Bloco";
import { PrismicRichText } from "@prismicio/react";

const BemVindo = ({ slice }: BlocoProps) => {
    return (
        <div className="">
            <div className="container m-auto bg-foreground text-background rounded-[5rem] rounded-tl-none py-16 px-6 md:p-16 relative z-1">
                <h1
                    className="text-4xl relative 
                    [ after:content[''] after:absolute after:-bottom-3 after:left-0 after:h-2 after:bg-background after:w-24 ]"
                >
                    {slice.primary.titulo}
                </h1>
                {slice.items.map((item, k) => (
                    <div key={k} className="text-2xl lg:text-4xl my-16">
                        <PrismicRichText field={item.conteudo} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BemVindo;
