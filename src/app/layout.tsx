import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./styles.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-background text-foreground tenor-sans-regular">
                {children}
            </body>
            <PrismicPreview repositoryName={repositoryName} />
        </html>
    );
}
