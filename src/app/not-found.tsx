import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Page not found",
    description: "Generated by create next app",
};

export default function NotFound() {
    return (
        <main>Page not Found | 404</main>
    );
}