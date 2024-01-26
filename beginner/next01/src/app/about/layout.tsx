export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page',
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>About Navbar</nav>
      <main>{children}</main>
    </>
  );
}
