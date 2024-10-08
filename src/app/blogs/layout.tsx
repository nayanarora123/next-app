import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning NEXT JS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; }>
) {
  return (
    <>
      <h1 className="p-5">Blogs Page</h1>
      {children}
    </>
  );
}
