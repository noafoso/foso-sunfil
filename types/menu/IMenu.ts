interface IMenuHeader {
    id: string,
    name: string,
    link: string,
    children: boolean,
    visible: boolean,
}

interface IMenuSidebar {
    id: string,
    icon: string,
    name: string,
    link: string,
    parent_link: string,
}

export type {
    IMenuHeader,
    IMenuSidebar
}