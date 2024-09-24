'use client'

import React from 'react'
import { useResizeStore } from '@/stores/useResizeStore'
import SectionIntroCommon from './components/SectionIntroCommon'
import SectionCategoryCommon from './components/SectionCategoryCommon'
import { uuidv4 } from '@/lib/uuid'

const dataListProducts = [
    {
        id: uuidv4(),
        name: "Bộ lọc không khí",
        description: "Sunfil-filter đại diện cho nhiều loại sản phẩm lọc dành cho dịch vụ hậu mãi ô tô của hầu hết các thương hiệu trên thế giới. Bộ lọc JS kết hợp hiệu suất làm sạch cao, độ tin cậy, độ bền và dễ thay thế và sử dụng.",
        backgroundImage: "/example/products/product5.png"
    },
    {
        id: uuidv4(),
        name: "Bộ lọc dầu",
        description: "Sunfil-filter đại diện cho nhiều loại sản phẩm lọc dành cho dịch vụ hậu mãi ô tô của hầu hết các thương hiệu trên thế giới. Bộ lọc JS kết hợp hiệu suất làm sạch cao, độ tin cậy, độ bền và dễ thay thế và sử dụng.",
        backgroundImage: "/example/products/product2.png"
    },
    {
        id: uuidv4(),
        name: "Bộ lọc dầu trong cabin",
        description: "Sunfil-filter đại diện cho nhiều loại sản phẩm lọc dành cho dịch vụ hậu mãi ô tô của hầu hết các thương hiệu trên thế giới. Bộ lọc JS kết hợp hiệu suất làm sạch cao, độ tin cậy, độ bền và dễ thay thế và sử dụng.",
        backgroundImage: "/example/products/product3.png"
    },
    {
        id: uuidv4(),
        name: "Bộ lọc không khí",
        description: "Sunfil-filter đại diện cho nhiều loại sản phẩm lọc dành cho dịch vụ hậu mãi ô tô của hầu hết các thương hiệu trên thế giới. Bộ lọc JS kết hợp hiệu suất làm sạch cao, độ tin cậy, độ bền và dễ thay thế và sử dụng.",
        backgroundImage: "/example/products/product4.png"
    },
    {
        id: uuidv4(),
        name: "Bộ lọc dầu trong cabin",
        description: "Sunfil-filter đại diện cho nhiều loại sản phẩm lọc dành cho dịch vụ hậu mãi ô tô của hầu hết các thương hiệu trên thế giới. Bộ lọc JS kết hợp hiệu suất làm sạch cao, độ tin cậy, độ bền và dễ thay thế và sử dụng.",
        backgroundImage: "/example/products/product1.png"
    },
]

const Products = () => {
    const { isVisibleMobile } = useResizeStore()
    return (
        <div className=''>
            <SectionIntroCommon
                title="Sản phẩm"
                description="Sunfil-filter đại diện cho nhiều loại sản phẩm lọc dành cho dịch vụ hậu mãi ô tô của hầu hết các thương hiệu trên thế giới. Bộ lọc JS kết hợp hiệu suất làm sạch cao, độ tin cậy, độ bền và dễ thay thế và sử dụng."
            />
            {
                dataListProducts && dataListProducts.map((item, index) => (
                    <React.Fragment key={`product-${item.id}`}>
                        <SectionCategoryCommon
                            backgroundImage={item.backgroundImage}
                            index={index % 2 === 0}
                            title={item.name}
                            description={item.description}
                        />
                    </React.Fragment>
                ))
            }
            {/* <SectionCategoryCommon
                backgroundImage='/example/products/product2.png'
                type="right"
            /> */}
        </div>
    )
}

export default Products