import { Nav } from "@/components/sections/Nav";
import { VideoHero } from "@/components/sections/VideoHero";
import { Stakes } from "@/components/sections/Stakes";
import { About } from "@/components/sections/About";
import { Difference } from "@/components/sections/Difference";
import { Credentials } from "@/components/sections/Credentials";
import { Clients } from "@/components/sections/Clients";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Guides } from "@/components/sections/Guides";
import { Process } from "@/components/sections/Process";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { getContent } from "@/lib/content";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getContent(locale);

  return (
    <>
      <Nav content={content} locale={locale} />
      <main>
        <VideoHero content={content} />
        <Stakes content={content} />
        <About content={content} />
        <Difference content={content} />
        <Credentials content={content} />
        <Clients content={content} />
        <CaseStudies content={content} />
        <Guides content={content} />
        <Process content={content} />
        <Team content={content} />
        <FAQ content={content} />
        <FinalCTA content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
