export interface NavLink {
    label: string;
    href: string;
    isRoute?: boolean;
}

export interface Feature {
    icon: React.ElementType;
    title: string;
    desc: string;
    color: string;
    Preview: () => React.ReactElement;
}

export interface CodeLine {
    tokens: { text: string; color: string }[];
    highlight?: boolean;
}

export interface CodeBlockProps {
    tsCode: CodeLine[];
    jsCode?: CodeLine[];
    title?: string;
}