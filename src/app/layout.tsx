import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./styles.css";
import Navbar from "@/components/Navbar";
import Whatsapp from "@/components/Whatsapp";

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
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Tenor+Sans&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-background text-foreground tenor-sans-regular relative">
                <div className="flex inset-0 absolute z-0">
                    <div className="flex-1 bg-background"></div>
                    <div className="flex-1 bg-foreground"></div>
                </div>
                <Navbar />
                <Whatsapp />
                {children}
            </body>
            <PrismicPreview repositoryName={repositoryName} />
        </html>
    );
}
