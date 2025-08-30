import Link from "next/link";
import Container from "./container";
import header from "@/data/header.data";
import Button from "./button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b border-border border-dashed">
      <Container className="flex justify-between items-center py-5">
        <Link href="/" className="text-xl font-semibold leading-none font-mono">
          {header.title}
        </Link>
        <Button className="flex items-center gap-2">
          <span className="font-sans font-medium text-base leading-[1.2]">
            {header.button.label}
          </span>
          <Image alt="Arrow up right" width={20} height={20} src="/arrow-up-right.svg" />
        </Button>
      </Container>
    </header>
  );
};

export default Header;
