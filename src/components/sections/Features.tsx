import { Container } from "@/components/ui-kit/Container";
import { SectionWrapper } from "@/components/ui-kit/SectionWrapper";
import { Heading } from "@/components/ui-kit/Heading";
import { Card } from "@/components/ui-kit/Card";
import { features } from "@/mock/data";
import { featureIcons } from "@/components/ui-kit/icons";

export const Features = () => (
  <SectionWrapper id="features">
    <Container>
      <Heading
        eyebrow="Platform"
        title="Northwind Edge"
        subtitle="A modular suite of building blocks that replaces a dozen point tools."
        align="center"
      />
      <div className="mt-8 flex justify-center">
        <img
          src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
          alt="Northwind Edge highlights"
          className="h-auto w-full max-w-4xl"
          loading="lazy"
          decoding="async"
        />
      </div>
      
    </Container>
  </SectionWrapper>
);
