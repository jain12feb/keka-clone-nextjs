import CompanyImage from "@/components/CompanyImage";
import CompanyList from "@/components/CompanyList";
import LandingHero from "@/components/LandingHero";
import Performances from "@/components/Performances";

export default function Home() {
  return (
    <>
      <LandingHero />
      <CompanyImage />
      <CompanyList />
      <Performances />
    </>
  );
}
