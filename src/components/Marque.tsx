import Link from "next/link";
import Marquee from "react-fast-marquee";

export interface IHeadLine {
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

const Marque = async () => {
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/news");

    if (!res.ok) {
      return (
        <div className="py-3 text-center text-sm text-red-600">
          খবর লোড করা যাচ্ছে না।
        </div>
      );
    }

    const resData = await res.json();

    const headline: IHeadLine[] = resData.data;

    return (
      <div className="bg-red-700 text-white">
        <div className="mx-auto flex w-[80%] items-center">
          <span className="bg-red-800 p-2 px-5 text-white">সর্বশেষ</span>

          <Marquee speed={110}>
            {headline.slice(0, 10).map((n) => (
              <div key={n.id}>
                <Link className="hover:underline" href={`/article/${n.id}`}>
                  {n.title}
                </Link>

                <span className="mx-5">⬩</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    );
  } catch (error) {
    console.error("News API Error:", error);

    return (
      <div className="py-3 text-center text-sm text-red-600">
        খবর লোড করা যাচ্ছে না।
      </div>
    );
  }
};

export default Marque;
