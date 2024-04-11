import { KeyTextField } from "@prismicio/client";
import {
    BlocoSliceBlocoFormasDePagamentoItem,
    Simplify,
} from "../../../prismicio-types";

interface FormaPagamentoProps {
    titulo: KeyTextField;
    items: Simplify<BlocoSliceBlocoFormasDePagamentoItem>[];
}

const FormaPagamento = ({ titulo, items }: FormaPagamentoProps) => {
    return (
        <div className="">
            <div className="container m-auto bg-foreground text-background rounded-[5rem] rounded-tl-none p-16 relative z-1">
                <h1
                    className="text-4xl font-bold relative 
                [ after:content[''] after:absolute after:-bottom-4 after:left-0 after:h-2 after:bg-background after:w-24 ]"
                >
                    {titulo}
                </h1>
                <div className="grid items-center gap-3 my-16">
                    {items.map((item, k) => (
                        <div
                            key={k}
                            className="text-2xl md:text-2xl lg:text-4xl pl-7 relative
                            after:content[''] after:absolute after:left-0 after:top-3 after:h-3 after:bg-background after:w-3"
                        >
                            {item.tipo}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FormaPagamento;
