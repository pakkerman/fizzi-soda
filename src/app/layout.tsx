import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
