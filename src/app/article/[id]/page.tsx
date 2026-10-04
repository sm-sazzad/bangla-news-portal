import { url } from "inspector";
import Image from "next/image";

export interface IDataType {
  id: string;
  title: string;
  firstPublished: string;
  byline: {
    name: string;
    role: any;
  }[];
  topics: {
    id: string;
    name: string;
  }[];
  tags: string[];
  imageUrl: string;
  body: {
    type: string;
    url?: string;
    width?: number;
    height?: number;
    caption?: string;
    altText?: string;
    copyrightHolder?: string;
    text?: string;
  }[];
  text: string;
  wordCount: number;
}
// export interface Byline {
//   name: string;
//   role: any;
// }
// export interface Topic {
//   id: string;
//   name: string;
// }

// export interface Body {
//   type: string;
//   url?: string;
//   width?: number;
//   height?: number;
//   caption?: string;
//   altText?: string;
//   copyrightHolder?: string;
//   text?: string;
// }

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const resData = await res.json();
  // console.log(resData, "from id");
  const data: IDataType = resData.data;
  console.log(data, "details");
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-3xl font-bold my-5 mb-20">{data.title}</h1>
      {data.body.map((n, indx) => (
        <div key={indx}>
          {n.url && (
            <Image
              className="w-full h-auto my-5"
              src={n.url!}
              alt={n.altText!}
              width={n.width}
              height={n.height}
            ></Image>
          )}
          <h1
            className={`${n.type === "subheading" ? "text-2xl font-bold text-red-600 my-4" : "my-2"}`}
          >
            {n.text}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default page;
