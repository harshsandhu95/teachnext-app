import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props extends React.PropsWithChildren {
  features: React.ReactNode;
  pricing: React.ReactNode;
}

export default function layout({ children, features, pricing }: Props) {
  return (
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main>
        {children}
        {features}
        {pricing}
      </main>
      <Footer />
    </div>
  );
}
