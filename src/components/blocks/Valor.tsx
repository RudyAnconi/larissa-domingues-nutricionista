import { BlocoProps } from "@/slices/Bloco";
import { PrismicNextImage } from "@prismicio/next";

const Valor = ({ slice }: BlocoProps) => {
    return (
        <div className="relative">
            <div className="flex inset-0 absolute z-0">
                <div className="flex-1 bg-background"></div>
                <div className="flex-1 bg-foreground"></div>
            </div>
            <div className="container m-auto bg-foreground text-background rounded-[5rem] rounded-bl-none px-6 pt-16 pb-0 md:p-16 md:pb-0 relative z-1">
                <h1 className="text-4xl font-bold flex gap-4 justify-center md:justify-start">
                    {slice.primary.titulo}
                    <PrismicNextImage
                        className="invert"
                        width={40}
                        height={40}
                        field={slice.primary.icone}
                    />
                </h1>
                <div className="grid grid-rows-2 md:grid-cols-2 md:w-[90%] m-auto md:justify-center md:items-stretch my-16 gap-10 relative">
                    {slice.items.map((item, k) => (
                        <div
                            key={k}
                            className="h-full"
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
            </div>
        </div>
    );
};

export default Valor;