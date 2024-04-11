import { BlocoProps } from "@/slices/Bloco";
import { PrismicNextImage } from "@prismicio/next";

const Valor = ({ slice }: BlocoProps) => {
    return (
        <div className="">
            <div className="container m-auto bg-foreground text-background rounded-[5rem] rounded-bl-none px-6 pt-16 pb-0 md:p-16 md:pb-0 relative z-1">
                <h1 className="text-4xl font-bold flex gap-4 justify-center md:justify-start relative
                [ after:content[''] after:absolute after:-bottom-4 after:left-0 after:h-2 after:bg-background after:w-24 ]">
                    {slice.primary.titulo}
                    <PrismicNextImage
                        className="invert"
                        width={40}
                        height={40}
                        field={slice.primary.icone}
                    />
                </h1>
                <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:w-[90%] lg:w-[50%] m-auto md:justify-center md:items-stretch my-16 gap-10">
                    {slice.items.map((item, k) => (
                        <div
                            key={k}
                            className="relative"
                        >
                            <div className="text-center text-3xl px-8 py-2 bg-foreground rounded-full -mb-7 relative z-10 w-fit mx-auto">
                                {item.tipo}
                            </div>
                            <div className="grid items-start justify-center text-center bg-background text-foreground p-6 pt-12 rounded-2xl h-full">
                                <div>{item.titulo}</div>
                                <div className="-mt-2">
                                    {item.com_retorno ? "(com 1 retorno)" : ""}
                                </div>
                                <div className="flex gap-1 justify-center items-center mt-3 font-bold">
                                    <span className="text-sm">R$</span>
                                    <span className="text-4xl">
                                        {item.valor}
                                    </span>
                                    <span className="self-start">,00</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>&nbsp;</div>
            </div>
        </div>
    );
};

export default Valor;
