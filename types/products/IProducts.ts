interface IDetailProductParameter {
    id: string | null,
    id_parameter_detail: string | null,
    id_product: string | null,
    code_lead: string | null,
    id_product_lead: string | null,
    type_view: string | null
}

interface IDetailCodeProduct {
    id: string | null,
    code: string | null,
    name: string | null,
    images: string | null,
    type_items: string | null,
    create_by: string | null,
    date_create: string | null,
    specification: {
        name: string | null,
        is_value: string | null,
        order_by: string | null
    }[],
    reference: {
        name: string | null,
        is_value: string | null,
        order_by: string | null
    }[],
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

export type {
    IDetailCodeProduct
}