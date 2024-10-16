import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailCodeSkeleton = () => {
    return (
        <div className='flex flex-col md:gap-6 gap-8 w-full'>
            {/* Skeleton for Product Name */}
            <Skeleton className='h-12 w-3/4 md:w-1/4' />

            <div className='bg-white 3xl:p-12 md:p-10 p-4 grid grid-cols-12 md:gap-0 gap-6'>
                {/* Skeleton for Image */}
                <div className='md:col-span-3 col-span-12 w-full h-auto'>
                    <Skeleton className='w-full h-60' />
                </div>

                {/* Skeleton for Product Details */}
                <div className='md:col-span-9 col-span-12 flex flex-col 3xl:gap-6 gap-4 md:pl-20'>
                    {/* Skeleton for "Thông số kỹ thuật" Title */}
                    <Skeleton className='h-8 w-1/4' />

                    {/* Skeleton for Specifications */}
                    <div className='grid grid-cols-2 gap-y-4 gap-x-2'>
                        {Array(6).fill(0).map((_, index) => (
                            <div key={index} className='flex items-center gap-4'>
                                <Skeleton className='h-8 w-1/2' />
                                <Skeleton className='h-8 w-1/4' />
                            </div>
                        ))}
                    </div>

                    {/* Separator */}
                    <Skeleton className='h-1 w-full my-4' />

                    {/* Skeleton for Couple filter */}
                    <Skeleton className='h-8 w-1/4' />
                    <div className='flex flex-wrap items-center gap-3'>
                        {Array(4).fill(0).map((_, index) => (
                            <Skeleton key={index} className='h-8 w-20' />
                        ))}
                    </div>
                </div>
            </div>

            {/* Skeleton for Cross reference */}
            <div className='bg-white 3xl:p-12 md:p-10 p-4 flex flex-col 3xl:gap-6 gap-4'>
                <Skeleton className='h-10 w-1/4' />
                <div className='grid lg:grid-cols-3 grid-cols-2 w-full gap-2'>
                    {Array(6).fill(0).map((_, index) => (
                        <div key={index} className='flex items-center gap-4'>
                            <Skeleton className='h-8 w-1/2' />
                            <Skeleton className='h-8 w-1/4' />
                        </div>
                    ))}
                </div>
            </div>

            {/* Skeleton for Accordion */}
            <div className='bg-white'>
                <div className='grid grid-cols-9 gap-1'>
                    {Array(9).fill(0).map((_, index) => (
                        <Skeleton key={index} className='h-8 w-full col-span-1' />
                    ))}
                </div>
                <div className='space-y-1'>
                    {Array(5).fill(0).map((_, index) => (
                        <div key={index} className=''>
                            <Skeleton className='h-10 w-full' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailCodeSkeleton;
