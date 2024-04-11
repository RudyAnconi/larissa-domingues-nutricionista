import BemVindo from "@/components/blocks/BemVindo";
import Consulta from "@/components/blocks/Consulta";
import FormaPagamento from "@/components/blocks/FormaPagamento";
import Objetivos from "@/components/blocks/Objetivos";
import Rodape from "@/components/blocks/Rodape";
import TempoConsulta from "@/components/blocks/TempoConsulta";
import Valor from "@/components/blocks/Valor";
import { cn } from "@/lib/utils";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Bloco`.
 */
export type BlocoProps = SliceComponentProps<Content.BlocoSlice>;

/**
 * Component for "Bloco" Slices.
 */
const Bloco = ({ slice }: BlocoProps): JSX.Element => {
    return (
        <section
            className={cn(
                slice.slice_type,
                slice.variation,
                slice.primary.codigo
            )}
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            {slice.variation === "default" &&
                slice.primary.codigo === "bem-vindo" && (
                    <BemVindo slice={slice} />
                )}

            {slice.variation === "default" &&
                slice.primary.codigo === "objetivos" && (
                    <Objetivos slice={slice} />
                )}

            {slice.variation === "default" &&
                slice.primary.codigo === "consulta" && (
                    <Consulta slice={slice} />
                )}

            {slice.variation === "default" &&
                slice.primary.codigo === "tempo-consulta" && (
                    <TempoConsulta slice={slice} />
                )}

            {slice.variation === "blocoValor" && <Valor slice={slice} />}

            {slice.variation === "blocoFormasDePagamento" && (
                <FormaPagamento slice={slice} />
            )}

            {slice.variation === "default" &&
                slice.primary.codigo === "rodape" && (
                    <Rodape slice={slice} />
                )}
        </section>
    );
};

export default Bloco;
