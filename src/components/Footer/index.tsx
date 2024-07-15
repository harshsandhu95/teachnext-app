import { CopyrightIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted">
      <div className="py-12 min-h-64 container grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
        <div className="max-w-prose space-y-2">
          <p className="text-2xl font-bold">TeachNext</p>
          <p>
            TeachNext is a AI-powered teaching assistant to help teachers in
            achieving daily tasks.
          </p>
          <p className="flex items-center gap-2">
            <CopyrightIcon size={16} />
            {currentYear} TeachNext. All rights reserved.
          </p>
        </div>

        <div className="md:place-self-center md:self-start">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">Services</span>
            <nav className="flex flex-col gap-2">
              <Link href="/pricing" className="text-sm font-medium">
                Pricing
              </Link>
              <Link href="/features" className="text-sm font-medium">
                Features
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="md:place-self-center md:self-start">
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-lg font-bold">Contact</span>
            <Link href="" className="flex items-center gap-2">
              <MailIcon size={16} />
              support@teachnext.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
