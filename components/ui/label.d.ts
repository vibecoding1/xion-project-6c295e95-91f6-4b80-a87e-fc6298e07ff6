import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { VariantProps } from "class-variance-authority";
declare const Label: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>, "type"> & VariantProps<((props: {
    variant?: null | undefined;
}) => string) | ((options?: ({
    variant?: null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string)> & React.RefAttributes<HTMLLabelElement>>;
export { Label };
