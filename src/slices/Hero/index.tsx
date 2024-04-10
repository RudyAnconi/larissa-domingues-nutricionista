import HeroComponent from "@/components/Hero";
import { cn } from "@/lib/utils";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
    className={cn(
        slice.slice_type,
        slice.variation,
        "hero"
    )}
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
>
      <HeroComponent slice={slice} />
    </section>
  );
};

export default Hero;
