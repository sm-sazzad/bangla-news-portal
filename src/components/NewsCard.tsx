import { IData } from "@/app/category/[slug]/page";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ categoryData }: { categoryData: IData[] }) => {
  return (
    <div className=" mx-auto my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categoryData.map((news) => (
        <Link
          key={news.id}
          href={`/article/${news.id}`}
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Image */}
          <div className="relative aspect-video overflow-hidden bg-gray-100">
            <Image
              src={news.imageUrl}
              alt={news.imageAlt || news.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Category */}
            <div className="absolute left-3 top-3">
              <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {news.category}
              </span>
            </div>

            {/* Live Badge */}
            {news.isLive && (
              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                LIVE
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Type & Source */}
            <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
              <span className="font-medium uppercase">{news.type}</span>
              <span>•</span>
              <span>{news.source}</span>
            </div>

            {/* Title */}
            <h2 className="line-clamp-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600">
              {news.title}
            </h2>

            {/* Description */}
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
              {news.description}
            </p>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-xs text-gray-500">
                {new Date(news.firstPublished).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>

              <span className="text-sm font-semibold text-blue-600 transition-transform group-hover:translate-x-1">
                Read More →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsCard;
