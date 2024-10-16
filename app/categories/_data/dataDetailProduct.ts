import { uuidv4 } from "@/lib/uuid";
import { IDetailCodeProduct } from "@/types/products/IProducts";

export const dataDetailProduct: IDetailCodeProduct = {
    "id": "29",
    "code": "OE0069",
    "name": "OIL FILTER (ELEMENT) »        OE0069",
    "images": "/example/products/OE0069.png",
    // "images": "http://192.168.1.178/SUNFIL/uploads/products_filter/OE0069.jpg",
    "type_items": "oil",
    "create_by": "0",
    "date_create": "2024-09-11 17:30:25",
    "couple_filter": [
        {
            id: uuidv4(),
            code: "C513J[JS]"
        },
        {
            id: uuidv4(),
            code: "C514J[JS]"
        },
    ],
    "specification": [
        {
            "name": "Outside Diameter",
            "is_value": "74",
            "order_by": "0"
        },
        {
            "name": "O-Ring gasket (mm)",
            "is_value": "82/89/3.5",
            "order_by": "1"
        },
        {
            "name": "Inside Diameter(D)",
            "is_value": "39.2",
            "order_by": "1"
        },
        {
            "name": "Structure Material",
            "is_value": "Plastic",
            "order_by": "3"
        },
        {
            "name": "Inside Diameter",
            "is_value": "39.2",
            "order_by": "4"
        },
        {
            "name": "Length",
            "is_value": "129.5",
            "order_by": "5"
        }
    ],
    "reference": [
        {
            "name": "ISUZU",
            "is_value": "8-94114-585-0",
            "order_by": "0"
        },
        {
            "name": "FORD",
            "is_value": "3254957",
            "order_by": "0"
        },
        {
            "name": "MAZDA",
            "is_value": "PNY1-14-V61",
            "order_by": "0"
        },
        {
            "name": "HYUNDAI / KIA",
            "is_value": "0K71023902A",
            "order_by": "0"
        },
        {
            "name": "HYUNDAI",
            "is_value": "26320-21S00",
            "order_by": "0"
        },
    ],
    "parameter": [
        {
            "id": "810",
            "name": "HYUNDAI   »   Azera",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "0",
            "detail": [
                {
                    "id": "3014",
                    "id_parameter": "810",
                    "id_product": "29",
                    "year": "02.05~12.11",
                    "engine_vol": "3300",
                    "engine_no": "G6DB",
                    "td_body": "FC41",
                    "oil": [
                        {
                            "id": "16949",
                            "id_parameter_detail": "3014",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "16950",
                            "id_parameter_detail": "3014",
                            "id_product": "29",
                            "code_lead": "A0499",
                            "id_product_lead": "36",
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "16951",
                            "id_parameter_detail": "3014",
                            "id_product": "29",
                            "code_lead": "FS1001",
                            "id_product_lead": null,
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "16952",
                            "id_parameter_detail": "3014",
                            "id_product": "29",
                            "code_lead": "AC9313",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ],
                    "transmission": [
                        {
                            "id": "16953",
                            "id_parameter_detail": "3014",
                            "id_product": "29",
                            "code_lead": "JT214K",
                            "id_product_lead": null,
                            "type_view": "transmission"
                        }
                    ]
                }
            ]
        },
        {
            "id": "811",
            "name": "HYUNDAI   »   Entourage",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "1",
            "detail": [
                {
                    "id": "3015",
                    "id_parameter": "811",
                    "id_product": "29",
                    "year": "04.06~02.10",
                    "engine_vol": "3800",
                    "engine_no": "G6DA",
                    "td_body": "VQ",
                    "oil": [
                        {
                            "id": "21273",
                            "id_parameter_detail": "3015",
                            "id_product": "29",
                            "code_lead": "OE0073",
                            "id_product_lead": "22",
                            "type_view": "oil"
                        },
                        {
                            "id": "21274",
                            "id_parameter_detail": "3015",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21275",
                            "id_parameter_detail": "3015",
                            "id_product": "29",
                            "code_lead": "A9612",
                            "id_product_lead": null,
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21276",
                            "id_parameter_detail": "3015",
                            "id_product": "29",
                            "code_lead": "FS13001",
                            "id_product_lead": "31",
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21277",
                            "id_parameter_detail": "3015",
                            "id_product": "29",
                            "code_lead": "AC9301",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ],
                    "transmission": [
                        {
                            "id": "21278",
                            "id_parameter_detail": "3015",
                            "id_product": "29",
                            "code_lead": "JT214K",
                            "id_product_lead": null,
                            "type_view": "transmission"
                        }
                    ]
                }
            ]
        },
        {
            "id": "812",
            "name": "HYUNDAI   »   Grandeur TG",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "2",
            "detail": [
                {
                    "id": "3016",
                    "id_parameter": "812",
                    "id_product": "29",
                    "year": "10.06~12.11",
                    "engine_vol": "3300",
                    "engine_no": "G6DB",
                    "td_body": "TG",
                    "oil": [
                        {
                            "id": "21279",
                            "id_parameter_detail": "3016",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21280",
                            "id_parameter_detail": "3016",
                            "id_product": "29",
                            "code_lead": "A0499",
                            "id_product_lead": "36",
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21281",
                            "id_parameter_detail": "3016",
                            "id_product": "29",
                            "code_lead": "FS6042",
                            "id_product_lead": null,
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21282",
                            "id_parameter_detail": "3016",
                            "id_product": "29",
                            "code_lead": "AC9313",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ]
                }
            ]
        },
        {
            "id": "813",
            "name": "HYUNDAI   »   iX 55",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "3",
            "detail": [
                {
                    "id": "3017",
                    "id_parameter": "813",
                    "id_product": "29",
                    "year": "10.06~01.14",
                    "engine_vol": "3000",
                    "engine_no": "D6EA",
                    "td_body": "EN",
                    "oil": [
                        {
                            "id": "21283",
                            "id_parameter_detail": "3017",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        },
                        {
                            "id": "21284",
                            "id_parameter_detail": "3017",
                            "id_product": "29",
                            "code_lead": "OE0086",
                            "id_product_lead": null,
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21285",
                            "id_parameter_detail": "3017",
                            "id_product": "29",
                            "code_lead": "A9426",
                            "id_product_lead": null,
                            "type_view": "air"
                        },
                        {
                            "id": "21286",
                            "id_parameter_detail": "3017",
                            "id_product": "29",
                            "code_lead": "A9425",
                            "id_product_lead": null,
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21287",
                            "id_parameter_detail": "3017",
                            "id_product": "29",
                            "code_lead": "FC9303",
                            "id_product_lead": "27",
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21288",
                            "id_parameter_detail": "3017",
                            "id_product": "29",
                            "code_lead": "AC0212",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ]
                }
            ]
        },
        {
            "id": "814",
            "name": "HYUNDAI   »   Santa Fe 06",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "4",
            "detail": [
                {
                    "id": "3018",
                    "id_parameter": "814",
                    "id_product": "29",
                    "year": "04.06~07.09",
                    "engine_vol": "3300",
                    "engine_no": "G6DB",
                    "td_body": "CMA06",
                    "oil": [
                        {
                            "id": "21289",
                            "id_parameter_detail": "3018",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        },
                        {
                            "id": "21290",
                            "id_parameter_detail": "3018",
                            "id_product": "29",
                            "code_lead": "OE0073",
                            "id_product_lead": "22",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21291",
                            "id_parameter_detail": "3018",
                            "id_product": "29",
                            "code_lead": "A0458",
                            "id_product_lead": null,
                            "type_view": "air"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21292",
                            "id_parameter_detail": "3018",
                            "id_product": "29",
                            "code_lead": "AC9313",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ],
                    "transmission": [
                        {
                            "id": "21293",
                            "id_parameter_detail": "3018",
                            "id_product": "29",
                            "code_lead": "JT214K",
                            "id_product_lead": null,
                            "type_view": "transmission"
                        }
                    ]
                },
                {
                    "id": "3019",
                    "id_parameter": "814",
                    "id_product": "29",
                    "year": "04.06~07.09",
                    "engine_vol": "3300",
                    "engine_no": "G6DB",
                    "td_body": "PCM06",
                    "oil": [
                        {
                            "id": "21294",
                            "id_parameter_detail": "3019",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21295",
                            "id_parameter_detail": "3019",
                            "id_product": "29",
                            "code_lead": "A0458",
                            "id_product_lead": null,
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21296",
                            "id_parameter_detail": "3019",
                            "id_product": "29",
                            "code_lead": "FS0081",
                            "id_product_lead": null,
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21297",
                            "id_parameter_detail": "3019",
                            "id_product": "29",
                            "code_lead": "AC9313",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ],
                    "transmission": [
                        {
                            "id": "21298",
                            "id_parameter_detail": "3019",
                            "id_product": "29",
                            "code_lead": "JT214K",
                            "id_product_lead": null,
                            "type_view": "transmission"
                        }
                    ]
                }
            ]
        },
        {
            "id": "815",
            "name": "HYUNDAI   »   Sonata 04",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "5",
            "detail": [
                {
                    "id": "3020",
                    "id_parameter": "815",
                    "id_product": "29",
                    "year": "09.04~12.07",
                    "engine_vol": "3300",
                    "engine_no": "G6DB",
                    "td_body": "NF",
                    "oil": [
                        {
                            "id": "21299",
                            "id_parameter_detail": "3020",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21300",
                            "id_parameter_detail": "3020",
                            "id_product": "29",
                            "code_lead": "A2520",
                            "id_product_lead": null,
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21301",
                            "id_parameter_detail": "3020",
                            "id_product": "29",
                            "code_lead": "FS9502",
                            "id_product_lead": null,
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21302",
                            "id_parameter_detail": "3020",
                            "id_product": "29",
                            "code_lead": "AC9313",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ]
                }
            ]
        },
        {
            "id": "816",
            "name": "HYUNDAI   »   Veracruz",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "6",
            "detail": [
                {
                    "id": "3021",
                    "id_parameter": "816",
                    "id_product": "29",
                    "year": "10.06~01.15",
                    "engine_vol": "3800",
                    "engine_no": "G6DA",
                    "td_body": "EN07",
                    "oil": [
                        {
                            "id": "21303",
                            "id_parameter_detail": "3021",
                            "id_product": "29",
                            "code_lead": "OE0073",
                            "id_product_lead": "22",
                            "type_view": "oil"
                        },
                        {
                            "id": "21304",
                            "id_parameter_detail": "3021",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21305",
                            "id_parameter_detail": "3021",
                            "id_product": "29",
                            "code_lead": "A9426",
                            "id_product_lead": null,
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21306",
                            "id_parameter_detail": "3021",
                            "id_product": "29",
                            "code_lead": "FS0110",
                            "id_product_lead": null,
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21307",
                            "id_parameter_detail": "3021",
                            "id_product": "29",
                            "code_lead": "AC0212",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ]
                },
                {
                    "id": "3022",
                    "id_parameter": "816",
                    "id_product": "29",
                    "year": "10.06~01.15",
                    "engine_vol": "3800",
                    "engine_no": "G6DA",
                    "td_body": "EN07 GEN",
                    "oil": [
                        {
                            "id": "21308",
                            "id_parameter_detail": "3022",
                            "id_product": "29",
                            "code_lead": "OE0073",
                            "id_product_lead": "22",
                            "type_view": "oil"
                        },
                        {
                            "id": "21309",
                            "id_parameter_detail": "3022",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21310",
                            "id_parameter_detail": "3022",
                            "id_product": "29",
                            "code_lead": "A9426",
                            "id_product_lead": null,
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21311",
                            "id_parameter_detail": "3022",
                            "id_product": "29",
                            "code_lead": "FS0110",
                            "id_product_lead": null,
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21312",
                            "id_parameter_detail": "3022",
                            "id_product": "29",
                            "code_lead": "AC11004",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ]
                }
            ]
        },
        {
            "id": "817",
            "name": "KIA   »   Opirus",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "7",
            "detail": [
                {
                    "id": "3023",
                    "id_parameter": "817",
                    "id_product": "29",
                    "year": "05.06~05.11",
                    "engine_vol": "3800",
                    "engine_no": "G6DA",
                    "td_body": "GH",
                    "oil": [
                        {
                            "id": "21313",
                            "id_parameter_detail": "3023",
                            "id_product": "29",
                            "code_lead": "OE0073",
                            "id_product_lead": "22",
                            "type_view": "oil"
                        },
                        {
                            "id": "21314",
                            "id_parameter_detail": "3023",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21315",
                            "id_parameter_detail": "3023",
                            "id_product": "29",
                            "code_lead": "A0510",
                            "id_product_lead": null,
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21316",
                            "id_parameter_detail": "3023",
                            "id_product": "29",
                            "code_lead": "FS9305",
                            "id_product_lead": null,
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21317",
                            "id_parameter_detail": "3023",
                            "id_product": "29",
                            "code_lead": "AC9310",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ],
                    "transmission": [
                        {
                            "id": "21318",
                            "id_parameter_detail": "3023",
                            "id_product": "29",
                            "code_lead": "JT214K",
                            "id_product_lead": null,
                            "type_view": "transmission"
                        }
                    ]
                }
            ]
        },
        {
            "id": "820",
            "name": "KIA   »   Sorento (USA)",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "8",
            "detail": [
                {
                    "id": "3027",
                    "id_parameter": "820",
                    "id_product": "29",
                    "year": "04.06~05.09",
                    "engine_vol": "3300",
                    "engine_no": "G6DB",
                    "td_body": "PBL06 US",
                    "oil": [
                        {
                            "id": "21319",
                            "id_parameter_detail": "3027",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        },
                        {
                            "id": "21320",
                            "id_parameter_detail": "3027",
                            "id_product": "29",
                            "code_lead": "OE0073",
                            "id_product_lead": "22",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21321",
                            "id_parameter_detail": "3027",
                            "id_product": "29",
                            "code_lead": "A2519",
                            "id_product_lead": "26",
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21322",
                            "id_parameter_detail": "3027",
                            "id_product": "29",
                            "code_lead": "FS13001",
                            "id_product_lead": "31",
                            "type_view": "diesel"
                        }
                    ],
                    "transmission": [
                        {
                            "id": "21323",
                            "id_parameter_detail": "3027",
                            "id_product": "29",
                            "code_lead": "JT305K",
                            "id_product_lead": "5",
                            "type_view": "transmission"
                        }
                    ]
                },
                {
                    "id": "3028",
                    "id_parameter": "820",
                    "id_product": "29",
                    "year": "04.06~05.09",
                    "engine_vol": "3800",
                    "engine_no": "G6DA",
                    "td_body": "PBL06 US",
                    "oil": [
                        {
                            "id": "21324",
                            "id_parameter_detail": "3028",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21325",
                            "id_parameter_detail": "3028",
                            "id_product": "29",
                            "code_lead": "A2519",
                            "id_product_lead": "26",
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21326",
                            "id_parameter_detail": "3028",
                            "id_product": "29",
                            "code_lead": "FS9315",
                            "id_product_lead": "30",
                            "type_view": "diesel"
                        },
                        {
                            "id": "21327",
                            "id_parameter_detail": "3028",
                            "id_product": "29",
                            "code_lead": "FS13001",
                            "id_product_lead": "31",
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21328",
                            "id_parameter_detail": "3028",
                            "id_product": "29",
                            "code_lead": "AC9320SET",
                            "id_product_lead": "28",
                            "type_view": "cabin"
                        }
                    ],
                    "transmission": [
                        {
                            "id": "21329",
                            "id_parameter_detail": "3028",
                            "id_product": "29",
                            "code_lead": "JT305K",
                            "id_product_lead": "5",
                            "type_view": "transmission"
                        }
                    ]
                }
            ]
        },
        {
            "id": "818",
            "name": "KIA   »   Sedona",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "9",
            "detail": [
                {
                    "id": "3024",
                    "id_parameter": "818",
                    "id_product": "29",
                    "year": "02.05~11.06",
                    "engine_vol": "3800",
                    "engine_no": "G6DA",
                    "td_body": "K4D US",
                    "oil": [
                        {
                            "id": "21330",
                            "id_parameter_detail": "3024",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21331",
                            "id_parameter_detail": "3024",
                            "id_product": "29",
                            "code_lead": "A9612",
                            "id_product_lead": null,
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21332",
                            "id_parameter_detail": "3024",
                            "id_product": "29",
                            "code_lead": "FS13001",
                            "id_product_lead": "31",
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21333",
                            "id_parameter_detail": "3024",
                            "id_product": "29",
                            "code_lead": "AC9301",
                            "id_product_lead": null,
                            "type_view": "cabin"
                        }
                    ],
                    "transmission": [
                        {
                            "id": "21334",
                            "id_parameter_detail": "3024",
                            "id_product": "29",
                            "code_lead": "JT214K",
                            "id_product_lead": null,
                            "type_view": "transmission"
                        }
                    ]
                }
            ]
        },
        {
            "id": "819",
            "name": "KIA   »   Sorento",
            "type_item": "oil",
            "id_product": "29",
            "order_by": "10",
            "detail": [
                {
                    "id": "3025",
                    "id_parameter": "819",
                    "id_product": "29",
                    "year": "04.06~05.09",
                    "engine_vol": "3300",
                    "engine_no": "G6DB",
                    "td_body": "JC",
                    "oil": [
                        {
                            "id": "21335",
                            "id_parameter_detail": "3025",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        },
                        {
                            "id": "21336",
                            "id_parameter_detail": "3025",
                            "id_product": "29",
                            "code_lead": "OE0073",
                            "id_product_lead": "22",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21337",
                            "id_parameter_detail": "3025",
                            "id_product": "29",
                            "code_lead": "A2519",
                            "id_product_lead": "26",
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21338",
                            "id_parameter_detail": "3025",
                            "id_product": "29",
                            "code_lead": "FS9315",
                            "id_product_lead": "30",
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21339",
                            "id_parameter_detail": "3025",
                            "id_product": "29",
                            "code_lead": "AC9320SET",
                            "id_product_lead": "28",
                            "type_view": "cabin"
                        }
                    ],
                    "transmission": [
                        {
                            "id": "21340",
                            "id_parameter_detail": "3025",
                            "id_product": "29",
                            "code_lead": "JT305K",
                            "id_product_lead": "5",
                            "type_view": "transmission"
                        }
                    ]
                },
                {
                    "id": "3026",
                    "id_parameter": "819",
                    "id_product": "29",
                    "year": "04.06~05.09",
                    "engine_vol": "3800",
                    "engine_no": "G6DA",
                    "td_body": "BL06 LHD",
                    "oil": [
                        {
                            "id": "21341",
                            "id_parameter_detail": "3026",
                            "id_product": "29",
                            "code_lead": "OE0073",
                            "id_product_lead": "22",
                            "type_view": "oil"
                        },
                        {
                            "id": "21342",
                            "id_parameter_detail": "3026",
                            "id_product": "29",
                            "code_lead": "OE0069",
                            "id_product_lead": "29",
                            "type_view": "oil"
                        }
                    ],
                    "air": [
                        {
                            "id": "21343",
                            "id_parameter_detail": "3026",
                            "id_product": "29",
                            "code_lead": "A2519",
                            "id_product_lead": "26",
                            "type_view": "air"
                        }
                    ],
                    "diesel": [
                        {
                            "id": "21344",
                            "id_parameter_detail": "3026",
                            "id_product": "29",
                            "code_lead": "FS9315",
                            "id_product_lead": "30",
                            "type_view": "diesel"
                        }
                    ],
                    "cabin": [
                        {
                            "id": "21345",
                            "id_parameter_detail": "3026",
                            "id_product": "29",
                            "code_lead": "AC9320SET",
                            "id_product_lead": "28",
                            "type_view": "cabin"
                        }
                    ],
                    "transmission": [
                        {
                            "id": "21346",
                            "id_parameter_detail": "3026",
                            "id_product": "29",
                            "code_lead": "JT305K",
                            "id_product_lead": "5",
                            "type_view": "transmission"
                        }
                    ]
                }
            ]
        }
    ]
}