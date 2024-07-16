import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface Props extends React.PropsWithChildren {}

export default function layout({ children }: Props) {
  return (
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="py-12 flex items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
}
