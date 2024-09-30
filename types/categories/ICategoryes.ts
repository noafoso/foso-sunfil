export interface IListCategories {
    id: string;
    name: string;
    key_items: string;
    images: string;
    description: string | null;
    content: string | null;
    images_items: string | null;
    images_items_detail: string | null;
    title: string;
}
export interface IResponCategoriesHome {
    data: IListCategories[];
    result: boolean;
}
