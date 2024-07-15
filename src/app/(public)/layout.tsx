import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props extends React.PropsWithChildren {
  features: React.ReactNode;
}

export default function layout({ children, features }: Props) {
  return (
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main>
        {children}
        {features}
      </main>
      <Footer />
    </div>
  );
}
