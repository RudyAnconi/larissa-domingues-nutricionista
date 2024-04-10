import { BlocoProps } from "@/slices/Bloco";

const FormaPagamento = ({ slice }: BlocoProps) => {
    return (
        <div className="relative">
            <div className="flex inset-0 absolute z-0">
                <div className="flex-1 bg-background"></div>
                <div className="flex-1 bg-foreground"></div>
            </div>
            <div className="container m-auto bg-foreground text-background rounded-[5rem] rounded-tl-none p-16 relative z-1">
                <h1 className="text-4xl font-bold">{slice.primary.titulo}</h1>
                <p>{slice.primary.codigo}</p>
            </div>
        </div>
    );
};

export default FormaPagamento;
