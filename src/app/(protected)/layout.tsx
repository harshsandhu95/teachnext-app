import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";
import { LoaderCircleIcon } from "lucide-react";
import NotAuthorised from "@/components/NotAuthorised";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

interface Props extends React.PropsWithChildren {}

export default function layout({ children }: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <ClerkLoading>
        <div className="flex-1 flex items-center justify-center">
          <LoaderCircleIcon className="animate-spin" />
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <SignedOut>
          <NotAuthorised />
        </SignedOut>

        <SignedIn>
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Sidebar />
            <Topbar />
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              {children}
            </main>
          </div>
        </SignedIn>
      </ClerkLoaded>
    </div>
  );
}
