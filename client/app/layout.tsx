import { Header } from "@core/header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
