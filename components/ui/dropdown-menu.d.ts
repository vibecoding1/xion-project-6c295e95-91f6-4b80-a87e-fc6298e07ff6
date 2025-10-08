import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { VariantProps } from "class-variance-authority";
declare const DropdownMenu: typeof DropdownMenuPrimitive.Root;
declare const DropdownMenuTrigger: typeof DropdownMenuPrimitive.Trigger;
declare const DropdownMenuGroup: typeof DropdownMenuPrimitive.Group;
declare const DropdownMenuPortal: typeof DropdownMenuPrimitive.Portal;
declare const DropdownMenuSub: typeof DropdownMenuPrimitive.Sub;
declare const DropdownMenuRadioGroup: typeof DropdownMenuPrimitive.RadioGroup;
declare const DropdownMenuSubTrigger: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>, "type"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>, "type"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>, "type"> & {
    sideOffset?: number;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>, "type"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>, "type"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>, "type"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>, "type"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>, "type"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => React.JSX.Element;
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup, };
