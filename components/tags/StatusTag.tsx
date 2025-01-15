import React from 'react'
import { cn } from "@/lib/utils"
import { CheckCircle, XCircle } from 'lucide-react'

interface StatusTagProps {
    status: 'received' | 'not_received'
    className?: string
}

const StatusTag: React.FC<StatusTagProps> = ({ status, className }) => {
    const isReceived = status === 'received'

    return (
        <div
            className={cn(
                "inline-flex items-center justify-center text-center px-3 py-1.5 rounded-full 3xl:!text-sm xl:!text-xs lg:!text-[11px] md:!text-sm text-xs !tracking-[1%] font-medium",
                isReceived
                    ? "bg-green-100 text-green-500"
                    : "bg-red-50 text-red-500",
                className
            )}
        >
            {/* {
                isReceived ? (
                    <CheckCircle className="w-4 h-4 mr-1.5" />
                ) : (
                    <XCircle className="w-4 h-4 mr-1.5" />
                )
            } */}
            {isReceived ? "Received" : "Not Received"}
        </div>
    )
}

export default StatusTag

