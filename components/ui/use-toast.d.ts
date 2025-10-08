import type { ToastProps } from "@/components/ui/toast";
type ToasterToast = ToastProps & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: React.ReactNode;
};
type Action = {
    type: "ADD_TOAST";
    toast: ToasterToast;
} | {
    type: "UPDATE_TOAST";
    toast: Partial<ToasterToast>;
} | {
    type: "DISMISS_TOAST";
    toastId?: ToasterToast["id"];
} | {
    type: "REMOVE_TOAST";
    toastId?: ToasterToast["id"];
};
interface State {
    toasts: ToasterToast[];
}
export declare const reducer: (state: State, action: Action) => State;
type Toast = Omit<ToasterToast, "id">;
declare function toast({ ...props }: Toast): {
    id: string;
    update: (props: ToasterToast) => void;
    dismiss: () => void;
};
declare function useToast(): State & {
    toast: typeof toast;
};
export { useToast, toast };
