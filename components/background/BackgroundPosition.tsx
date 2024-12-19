import React from 'react'
import Image from 'next/image'
import { useResizeStore } from '@/stores/useResizeStore'

type Props = {
    image: string
    onComplete?: () => void; // Thêm callback để thông báo hoàn tất
}

const BackgroundPosition = ({ image, onComplete }: Props) => {
    const { isVisibleTablet } = useResizeStore()

    return (
        <React.Fragment>
            <div className='absolute top-0 left-0 size-full overflow-hidden'>
                <Image
                    alt="bg"
                    src={image}
                    width={1920}
                    height={1080}
                    priority
                    className='size-full object-cover group-hover:scale-[1.01] custom-transition'
                    onLoad={() => {
                        if (onComplete) onComplete(); // Gọi callback khi hình ảnh đã tải xong
                    }}
                />
            </div>
        </React.Fragment>
    )
}

export default BackgroundPosition