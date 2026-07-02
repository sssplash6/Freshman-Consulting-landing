import { Nav } from "@/components/sections/Nav";
import { VideoHero } from "@/components/sections/VideoHero";
import { Stakes } from "@/components/sections/Stakes";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
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
        <CaseStudies content={content} />
        <Process content={content} />
        <FinalCTA content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
