import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { VariantProps } from "class-variance-authority";
import { sheetVariants } from "./sheet";
declare const Sheet: typeof SheetPrimitive.Root;
declare const SheetTrigger: typeof SheetPrimitive.Trigger;
declare const SheetClose: typeof SheetPrimitive.Close;
declare const SheetPortal: typeof SheetPrimitive.Portal;
declare const SheetOverlay: React.ForwardRefExoticComponent<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> & React.RefAttributes<HTMLDivElement>>;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
declare const SheetFooter: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => React.JSX.Element;
declare const SheetTitle: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>, "type"> & React.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>, "type"> & React.RefAttributes<HTMLParagraphElement>>;
export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, };
