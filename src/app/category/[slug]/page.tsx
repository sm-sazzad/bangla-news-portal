import NewsCard from "@/components/NewsCard";

export interface IData {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${slug}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const resData = await res.json();
  const categoryData: IData[] = resData.data;
  return (
    <div className="w-[80%] mx-auto">
      <NewsCard categoryData={categoryData} />
    </div>
  );
};

export default page;
