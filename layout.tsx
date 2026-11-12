import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Quantum Chemistry Virtual Lab',
  description: 'Interactive particle-in-a-box quantum chemistry learning laboratory'
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
