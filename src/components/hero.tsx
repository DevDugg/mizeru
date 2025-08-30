import hero from "@/data/hero.data";
import Container from "./container";
import Button from "./button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero border-b border-border border-dashed">
      <Container className="flex flex-col items-center gap-12 px-[15%]" parentClassName="py-20">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-[28px] font-mono font-semibold leading-none text-center">
            {hero.title}
          </h1>
          <p className="text-base font-sans leading-[1.2] text-center text-text-secondary">
            {hero.description}
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <span className="font-sans font-medium text-base leading-[1.2]">{hero.button.label}</span>
          <Image alt="Arrow up right" width={20} height={20} src="/arrow-up-right.svg" />
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
