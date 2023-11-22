import '@/app/ui/global.css';
import { figtree } from './ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${figtree.className} antialiased`}>{children}</body>
        </html>
    );
}
