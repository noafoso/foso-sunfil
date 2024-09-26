'use client'

import React from 'react'
import { useResizeStore } from '@/stores/useResizeStore'
import SystemDeveloping from '@/components/system/SystemDeveloping'


const Categories = () => {
    const { isVisibleMobile } = useResizeStore()
    return (
        <SystemDeveloping />
    )
}

export default Categories