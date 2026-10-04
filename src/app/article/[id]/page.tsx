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
  return (
    <div className="w-[80%] mx-auto">
      {data.title}{" "}
      <Image
        src={data.imageUrl}
        alt={data.title}
        width={400}
        height={400}
      ></Image>
      <p>{data.text}</p>
    </div>
  );
};

export default page;
