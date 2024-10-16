interface IDetailProductParameter {
    id: string | null,
    id_parameter_detail: string | null,
    id_product: string | null,
    code_lead: string | null,
    id_product_lead: string | null,
    type_view: string | null
}

interface ICodeProduct {
    id: string | null,
    code: string | null,
    code_leads: string | null,
    name: string | null,
    images: string | null,
    type_items: string | null,
    create_by: string | null,
    date_create: string | null,
    is_website: string | null,
    tag_code: string
    type_code: string,
    filter_type: string
}
interface IDetailCodeProduct {
    id: string | null,
    code: string | null,
    name: string | null,
    images: string | null,
    type_items: string | null,
    create_by: string | null,
    date_create: string | null,
    tag_code: string[] | []
    specification: {
        name: string | null,
        is_value: string | null,
        order_by: string | null
    }[],
    reference: {
        name: string | null,
        is_value: string | null,
        order_by: string | null
    }[] | [],
    parameter: {
        id: string | null,
        name: string | null,
        type_item: string | null,
        id_product: string | null,
        order_by: string | null,
        detail: {
            id: string | null,
            id_parameter: string | null,
            id_product: string | null,
            year: string | null,
            engine_vol: string | null,
            engine_no: string | null,
            td_body: string | null,
            oil?: IDetailProductParameter[],
            air?: IDetailProductParameter[],
            diesel?: IDetailProductParameter[],
            cabin?: IDetailProductParameter[],
            transmission?: IDetailProductParameter[]
        }[] | []
    }[],
    couple_filter: {
        id: string,
        code: string
    }[]
}

interface IFullCodeProduct {
    data: ICodeProduct[]
    data_active: IDetailCodeProduct,
    success: boolean
}

export type {
    IDetailCodeProduct,
    IFullCodeProduct
}