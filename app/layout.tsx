import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Particle in a 1-D & 3-D Box: Solving and Visualizing Wavefunctions',
  description: 'Interactive 1-D and 3-D particle-in-a-box laboratory for solving and visualizing wavefunctions'
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
