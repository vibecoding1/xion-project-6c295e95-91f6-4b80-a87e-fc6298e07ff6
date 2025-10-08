import { ReactNode } from "react";
interface LayoutProps {
    children: ReactNode;
}
declare const LandingLayout: ({ children }: LayoutProps) => React.JSX.Element;
declare const DashboardLayout: ({ children }: LayoutProps) => React.JSX.Element;
declare const AuthLayout: ({ children }: LayoutProps) => React.JSX.Element;
declare const MinimalLayout: ({ children }: LayoutProps) => React.JSX.Element;
declare const FullLayout: ({ children }: LayoutProps) => React.JSX.Element;
export declare const LayoutVariants: {
    Landing: ({ children }: LayoutProps) => React.JSX.Element;
    Dashboard: ({ children }: LayoutProps) => React.JSX.Element;
    Auth: ({ children }: LayoutProps) => React.JSX.Element;
    Minimal: ({ children }: LayoutProps) => React.JSX.Element;
    Full: ({ children }: LayoutProps) => React.JSX.Element;
};
export {};
