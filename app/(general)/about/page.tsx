import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO title',
    description: 'SEO description',
    keywords: ['About page', 'information']
}

export default function AboutPage () {
    return (
        <>
            <h1 className="text-7xl">About</h1>
        </>
    )
}