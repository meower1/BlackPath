import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Aboutus() {
  return (
    <div className="flex flex-col gap-12 w-full">
      <section className="px-4 md:px-6 py-12 md:py-20 bg-muted">
        <div className="container max-w-4xl mx-auto space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About <span style={{ color: "#ec4899" }}>Neko</span>
              Team
            </h1>
            <p className="text-muted-foreground md:text-xl">
              NekoTeam is a two-man development team dedicated to creating
              full-stack web applications. We are currently working in the
              freelancing field and are open to new opportunities.
            </p>
            <p className="text-muted-foreground md:text-xl">
              Contact us at{" "}
              <a href="#" className="text-primary underline">
                mail@meower1.tech
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-6 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">MohammadAmin Adeli</h3>
                <p className="text-muted-foreground">Full-stack Developer</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">About MohammadAmin</h4>
              <p className="text-muted-foreground">
                MohammadAmin is a passionate full-stack developer with a strong
                background in Fastapi, Docker, nginx and Linux. He is dedicated
                to creating high-quality, user-friendly web applications that
                solve real-world problems.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">MohammadReza Rahimi</h3>
                <p className="text-muted-foreground">Full-stack Developer</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">About MohammadReza</h4>
              <p className="text-muted-foreground">
                MohammadReza is a skilled full-stack developer with a focus on
                building scalable and efficient web applications. He has a
                strong understanding of modern web technologies and is always
                eager to learn and implement new techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
