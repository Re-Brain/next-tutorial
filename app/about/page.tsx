"use client"

import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata : Metadata = {
    title: "About Page",
    description: "This is the about page of our Next.js application",
    keywords: ["about", "next.js", "metadata"],
    twitter : {
        card : "summary_large_image",
        title : "About Page",
        description : "This is the about page of our Next.js application",
        image : "https://example.com/image.jpg"
    }
}


export default function About() {
    console.log("Is this in the server or client?");
    return <div>About Page</div>
}