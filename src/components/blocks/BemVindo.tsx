import { KeyTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { BlocoSliceDefaultItem, Simplify } from "../../../prismicio-types";

interface BemVindoProps {
    titulo: KeyTextField;
    items: Simplify<BlocoSliceDefaultItem>[];
}

const BemVindo = ({ titulo, items }: BemVindoProps) => {
    return (
        <div className="">
            <div className="container m-auto bg-foreground text-background rounded-[5rem] rounded-tl-none py-16 px-6 md:p-16 relative z-1">
                <h1
                    className="text-4xl relative 
                    [ after:content[''] after:absolute after:-bottom-3 after:left-0 after:h-2 after:bg-background after:w-24 ]"
                >
                    {titulo}
                </h1>
                {items.map((item, k) => (
                    <div
                        key={k}
                        className="text-2xl lg:text-4xl my-16"
                    >
                        <PrismicRichText field={item.conteudo} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BemVindo;
