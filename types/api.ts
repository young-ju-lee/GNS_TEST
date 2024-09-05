
export interface SubSubMenu {
    title: string;
    link: string;
    show: boolean;
}

export interface SubMenu {
    title: string;
    link: string;
    show: boolean;
    subMenu: SubSubMenu[];
}

export interface NavMenu {
    title: string;
    link: string;
    show: boolean;
    intro: string;
    subMenu: SubMenu[];
}