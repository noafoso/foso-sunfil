import Image from "next/image";

export default function NotFound() {
    return (
        <div className={`w-full h-screen flex flex-col gap-8 items-center justify-center`} >
            {/* <div className={`w-full h-[calc(100vh_-_96px)] flex flex-col gap-8 items-center justify-center`} > */}
            <div className="h-auto">
                <Image
                    src={'/system/404-error.svg'}
                    width={1280}
                    height={1024}
                    alt="error"
                    className="size-full object-cover"
                />
            </div>
            <div className="text-center flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-[#545454] leading-6">
                    Không tìm thấy trang 404
                </h1>
                <h5 className="italic text-sm leading-5 font-light">
                    The page could not be found 404
                </h5>
            </div>
        </div>
    )
}