import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Image from 'next/image'

type Props = {
    classNameContainer?: string
    avatar?: string
}

const AvatarCustom = ({ classNameContainer, avatar }: Props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <Avatar className={`${classNameContainer} rounded-full`}>
            <AvatarImage
                width={200}
                height={200}
                src={avatar}
                alt="@avatar"
                className={`object-cover size-full rounded-full`}
            />
            <AvatarFallback >
                <Image
                    width={200}
                    height={200}
                    // src='/avatar/avatar_default.png'
                    src={avatar || '/avatar/avatar_default.png'}
                    alt="@avatar"
                    className={`${isLoaded ? 'blur-0' : 'blur-md'}  object-cover size-full rounded-full`}
                    onLoad={() => setIsLoaded(true)}
                />
            </AvatarFallback>
        </Avatar>
    )
}

export default AvatarCustom