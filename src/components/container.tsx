import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

interface IContainer extends PropsWithChildren {
  className?: string;
  parentClassName?: string;
}

const Container = ({ children, className, parentClassName }: IContainer) => {
  return (
    <div
      className={cn(
        "container mx-auto px-20 max-w-[680px] w-full border-x border-dashed border-border",
        parentClassName,
      )}
    >
      {className ? <div className={cn("container-inner", className)}>{children}</div> : children}
    </div>
  );
};

export default Container;
