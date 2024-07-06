"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ResponsiveLine } from "@nivo/line";
interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Userstats() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <header className="bg-card py-4 px-6 border-b">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">User Status</h1>
          <div className="flex items-center gap-4">
            <SignalIcon className="w-6 h-6 text-muted-foreground" />
            <img
              src="/placeholder.svg"
              width="40"
              height="40"
              className="rounded-full"
              alt="Avatar"
            />
          </div>
        </div>
      </header>
      <main className="flex-1 p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">5GB</div>
                <LineChart className="aspect-[3/2]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Your Plan</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="text-4xl font-bold">Pro</div>
              <div className="text-muted-foreground">
                Unlimited bandwidth, 100GB storage, and priority support.
              </div>
              <Button variant="outline">Upgrade Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="text-4xl font-bold">
                <span>12</span>
                <span className="text-sm text-muted-foreground"> months</span>
              </div>
              <div className="text-muted-foreground">
                Your subscription renews on July 5, 2024.
              </div>
              <Button variant="outline">Manage Subscription</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-card py-4 px-6 border-t">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; NekoTeam 2024. All rights reserved.
          </p>
          <nav className="flex items-center gap-4">
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
        </div>
      </footer>
    </div>
  );
}

// use client
function LineChart(props: LineChartProps) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

// use client
function SignalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}
