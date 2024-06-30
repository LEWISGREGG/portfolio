

import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";
import Link from "next/link";



async function getData() {
    const query = `*[_type == 'project'] | order(_createdAt desc)  {
        title,
        _id,
        _createdAt,
        link,
        description,
        tags,
        "imageUrl": image.asset->url
    }`;

    const data = await client.fetch(query, {}, {next: {revalidate: 30}});

    return data;
}

export default async function ProjectsPage() {
    const data: ProjectsCard[] = await getData();
return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
        <div className="divide-y divide-slate-200 dark:divide-gray-700">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight lg:text-5xl pt-5 sm:leading-9 dark:text-slate-100">My projects</h1>
        <p className="text-muted-foreground leading-7 mt-2">Check out my projects</p>
        </div>
    <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1 ">
        {data.map((item) => (
            <a href={item.link} key={item._id} className="group black" target="_blank">
                <p className="text-base font-medium leading-6 text-red-500">
                    {new Date(item._createdAt).toISOString().split("T")[0]}
                </p>
                <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative shadow-lg hover:shadow-md hover:shadow-blue-700">
                <Image src={item.imageUrl} alt="Image Description" fill className="border border-slate-300 object-cover group-hover:scale-95 transition-transform duration-500 ease-in-out rounded-2xl"/>
                </div>
                <div className="mt-4">
                <h2 className="font-md text-lg hover:underline">{item.title}</h2>
                <p className="mt-1 text-muted-foreground line-clamp-2">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tagItem, index) => (
                    <span key={index} className="inline-flex items-center rounded-md bg-primary/10 px-3 py-2 text-xs sm:text-sm
                    font-medium text-primary ring-2 ring-inset ring-primary/20">
                        {tagItem}
                    </span>
                ))}
                </div>
                </div>
            </a>
        ))}
    </div>
    </section>
)
}