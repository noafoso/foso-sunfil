import { IMAGES } from '@/constants/Images'
import BlogCardVerticalBig from "@/components/card/blog/BlogCardVerticalBig";
import Image from 'next/image';

const mockData = [
  {
    id: "1",
    title: "Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động",
    featured_image: "/example/blogs/b1.png",
    name_category: "Thiết bị",
    color_category: "#FF592C",
    date: "2023-05-15",
  },
  {
    id: "2",
    title: "Check Valve là gì? 4 loại Check Valve phổ biến nhất hiện nay",
    featured_image: "/example/blogs/b2.png",
    name_category: "Công nghệ",
    color_category: "#2E8FFA",
    date: "2023-06-20",
  },
  {
    id: "3",
    title: "Bảng đơn vị đo áp suất thông dụng nhất hiện nay",
    featured_image: "/example/blogs/b3.png",
    name_category: "Kỹ thuật",
    color_category: "#FFAC05",
    date: "2023-07-08",
  },
  {
    id: "4",
    title: "Bật mí các loại ống thủy lực phổ biến nhất hiện nay",
    featured_image: "/example/blogs/b4.png",
    name_category: "Thiết bị",
    color_category: "#FF592C",
    date: "2023-08-12",
  },
];

const FeaturedPosts = () => {
  return (
    <div className="relative 3xl:p-12 2xl:p-10 xl:p-8 p-4 w-full rounded-md">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <Image src={IMAGES.star} alt="" width={40} height={40} />
          <h2 className="text-[32px]/[32px] font-bold text-[#1C252E] capitalize">
            Bài viết nổi bật
          </h2>
        </div>
       
        <div className="grid grid-cols-4 gap-8 h-full">
          {mockData.map((item) => (
            <BlogCardVerticalBig
              key={item.id}
              id={item.id}
              title={item.title}
              featured_image={item.featured_image}
              name_category={item.name_category}
              color_category={item.color_category}
              date={item.date}
              className="bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
