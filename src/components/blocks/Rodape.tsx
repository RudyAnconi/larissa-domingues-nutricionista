import { KeyTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { BlocoSliceDefaultItem, Simplify } from "../../../prismicio-types";

interface RodapeProps {
    titulo: KeyTextField;
    items: Simplify<BlocoSliceDefaultItem>[];
}

const Rodape = ({ titulo, items }: RodapeProps) => {
    return (
        <div className="">
            <div className="container m-auto bg-background text-foreground rounded-[5rem] rounded-tl-none py-16 px-6 md:p-16 relative z-1">
                {items.map((item, k) => (
                    <div
                        key={k}
                        className="text-2xl lg:text-4xl mb-16"
                    >
                        <PrismicRichText field={item.conteudo} />
                    </div>
                ))}
                <h1
                    className="text-4xl relative 
                    [ after:content[''] after:absolute after:-bottom-3 after:left-0 after:h-2 after:bg-background after:w-24 ]"
                >
                    {titulo}
                </h1>
            </div>
        </div>
    );
};

export default Rodape;
