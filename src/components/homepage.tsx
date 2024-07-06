import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <NetworkIcon className="h-6 w-6" />
          <span className="sr-only">BlackPath VPN Service</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/adminpanel"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            AdminPanel
          </Link>
          <Link
            href="/userstats"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            UserStats
          </Link>
          <Link
            href="/aboutus"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Signup
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Secure Your Online Privacy with Our VPN Plans
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Protect your online activities and keep your data safe with
                    our reliable VPN service. Choose from our flexible plans to
                    find the perfect fit for your needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="VPN"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Choose the Perfect VPN Plan for You
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our VPN plans offer a range of features and benefits to ensure
                  your online privacy and security. Compare the plans below and
                  find the one that best fits your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="rounded-lg border bg-background p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Bronze</h3>
                  <p className="text-muted-foreground">
                    Basic VPN protection for your online activities.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <span>Traffic Cap</span>
                    <span>5GB/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Servers</span>
                    <span>10 locations</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>1 month</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href="/signup">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Silver</h3>
                  <p className="text-muted-foreground">
                    Enhanced VPN protection with more features.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <span>Traffic Cap</span>
                    <span>20GB/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Servers</span>
                    <span>25 locations</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>6 months</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href="/signup">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Gold</h3>
                  <p className="text-muted-foreground">
                    Premium VPN protection with advanced features.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <span>Traffic Cap</span>
                    <span>Unlimited</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Servers</span>
                    <span>50 locations</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>12 months</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href="/signup">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; NekoTeam 2024 VPN Service. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function NetworkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}
