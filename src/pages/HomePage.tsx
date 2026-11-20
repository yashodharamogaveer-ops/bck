import { Language } from '../data/content';
import { SeoHead } from '../components/SeoHead';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { AboutSection } from '../components/AboutSection';
import { ProgramsSection } from '../components/ProgramsSection';
import { PrincipalSection } from '../components/PrincipalSection';
import { CampusLifeSection } from '../components/CampusLifeSection';
import { NewsSection } from '../components/NewsSection';
import { RankHoldersSection } from '../components/RankHoldersSection';
import { MediaSection } from '../components/MediaSection';
import { GallerySection } from '../components/GallerySection';
import { QuickAccessSection } from '../components/QuickAccessSection';
import { AdmissionsSection } from '../components/AdmissionsSection';

interface HomePageProps {
  lang: Language;
}

export function HomePage({ lang }: HomePageProps) {
  return (
    <>
      <SeoHead
        title="Bhandarkars' Arts and Science College, Kundapura | Est. 1963"
        description="Bhandarkars' Arts and Science College, Kundapura — Shaping Futures Since 1963. Re-accredited by NAAC with 'A' Grade and affiliated to Mangalore University."
      />
      <Hero lang={lang} />
      <StatsStrip lang={lang} />
      <AboutSection lang={lang} />
      <ProgramsSection lang={lang} />
      <PrincipalSection lang={lang} />
      <CampusLifeSection lang={lang} />
      <NewsSection lang={lang} />
      <RankHoldersSection lang={lang} />
      <MediaSection lang={lang} />
      <GallerySection lang={lang} />
      <QuickAccessSection lang={lang} />
      <AdmissionsSection lang={lang} preselectedCourse="" />
    </>
  );
}
