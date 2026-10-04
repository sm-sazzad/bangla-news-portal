import Link from "next/link";

interface ICategory {
  slug: string;
  title: string;
  topicId: string;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const resData = await res.json();
    console.log(resData.data);
    const nav: ICategory[] = resData.data;

    const navs = nav.filter((n) => n.scrapable);
    console.log(navs);

    return (
      <div className="flex items-center justify-center gap-6 border-t border-gray-100 py-1 text-[14px] font-medium text-gray-700">
        <Link
          className="border-b-2 border-transparent hover:border-red-700 pb-1 hover:text-red-700"
          href={`/`}
        >
          হোম
        </Link>

        {navs.map((n) => (
          <Link
            className="border-b-2 border-transparent pb-1 transition-colors hover:border-red-700 hover:text-red-700"
            key={n.topicId}
            href={`/category/${n.slug}`}
          >
            {n.title}
          </Link>
        ))}
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

export default NavLinks;
