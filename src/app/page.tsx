import HomepageCard from "@/components/HomepageCard";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ISection {
  title: string;
  count: number;
  articles: {
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
  }[];
}

export interface IReadData {
  id: string;
  title: string;
}

const date = (d: string) => {
  const date = new Date(d);

  const formatted = new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);

  return formatted;
};

export default async function Home() {
  let article: ISection[] = [];
  let readData: { data: IReadData[] } = { data: [] };

  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

    if (!res.ok) {
      notFound();
    }

    const resData = await res.json();

    article = resData.data;
    article = article.filter((n) => n.count !== 1 && n.count !== 6);
  } catch (error) {
    console.error("News sections API Error:", error);
    notFound();
  }

  try {
    const resRead = await fetch(
      "https://news-api-v2.vercel.app/api/news/most-read",
    );

    if (!resRead.ok) {
      notFound();
    }

    readData = await resRead.json();
  } catch (error) {
    console.error("Most read API Error:", error);
    notFound();
  }

  const [mainNews, ...othersNews] = article;

  const firstCard = mainNews.articles[0];
  const otherCard = mainNews.articles.slice(1, 6);

  return (
    <div className="grid grid-cols-3 gap-3 w-[80%] mx-auto my-5">
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-5">
          {/* first News */}
          <Link href={`/article/${firstCard.id}`}>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              <Image
                className="h-40 w-full object-cover"
                src={firstCard.imageUrl}
                alt={firstCard.imageAlt}
                width={600}
                height={400}
              />

              <div className="p-5">
                <p className="mb-2 text-sm font-semibold text-red-700">
                  {mainNews.title}
                </p>

                <h1 className="text-md font-bold leading-tight text-gray-900 transition hover:text-red-700">
                  {firstCard.title}
                </h1>

                <p className="mt-3 line-clamp-2 text-[12px] leading-6 text-gray-600">
                  {firstCard.description}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-xs text-gray-500">
                    {date(firstCard.firstPublished)}
                  </span>

                  <span className="text-sm font-semibold text-red-700">
                    বিস্তারিত →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* second News */}
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="border-b-2 border-red-700 px-5 py-1">
              <h1 className="text-lg font-bold text-gray-900">
                {mainNews.title}
              </h1>
            </div>

            <div>
              {otherCard.map((n, index) => (
                <div
                  key={n.id}
                  className={`px-5 py-3 transition hover:bg-red-50 ${
                    index !== otherCard.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <Link
                    className="block text-[14px] font-medium leading-6 text-gray-700 transition hover:text-red-700"
                    href={`/article/${n.id}`}
                  >
                    {n.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-5">
          {othersNews.map((n) => (
            <div key={n.title}>
              <h1 className="py-2 text-2xl font-bold text-red-700">
                {n.title}
              </h1>

              <div className="border-b-2 border-b-red-700"></div>

              <div>
                <HomepageCard homepageCard={n.articles} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 self-start rounded-lg border border-gray-200 bg-white">
        <div className="border-b-2 border-red-700 px-5 py-1">
          <h1 className="text-lg font-bold text-gray-900">সর্বাধিক পঠিত</h1>
        </div>

        {readData.data.map((n) => (
          <div
            key={n.id}
            className="border-b border-gray-100 px-3 py-3 hover:bg-red-50"
          >
            <Link href={`/article/${n.id}`}>{n.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
