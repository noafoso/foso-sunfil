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
            gasoline?: IDetailProductParameter[]
            fuel_water?: IDetailProductParameter[]
            hydraulic_oil?: IDetailProductParameter[]
            air_purifier?: IDetailProductParameter[]
            hvac?: IDetailProductParameter[]
            other?: IDetailProductParameter[]
        }[] | []
    }[],
    couple_filter: {
        id: string,
        code: string
    }[]
}

interface IDetailCodeApplication {
    id: string,
    year: string,
    year_start: string,
    year_end: string,
    engine_vol: string,
    engine_no: string,
    td_body: string,
    manufacturer: string,
    model: string,
    oil?: IDetailProductParameter[],
    air?: IDetailProductParameter[],
    air_dryer?: IDetailProductParameter[], //
    air_oil_separator?: IDetailProductParameter[], //
    air_purifier?: IDetailProductParameter[]
    coolant_filter?: IDetailProductParameter[], //
    filter_bag?: IDetailProductParameter[], //
    filter_cartridges?: IDetailProductParameter[], //
    fuel_pump?: IDetailProductParameter[], //
    fuel_water?: IDetailProductParameter[],
    gas_filter?: IDetailProductParameter[], //
    hvac?: IDetailProductParameter[],
    hydraulic_oil?: IDetailProductParameter[]
    urea_filter?: IDetailProductParameter[], //
    diesel?: IDetailProductParameter[],
    cabin?: IDetailProductParameter[],
    transmission?: IDetailProductParameter[]
    other?: IDetailProductParameter[]
}

interface IFullCodeProduct {
    data: ICodeProduct[]
    data_active: IDetailCodeProduct,
    success: boolean
}

export type {
    IDetailCodeProduct,
    IDetailCodeApplication,
    ICodeProduct,
    IFullCodeProduct,
}