import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  SkillsSection,
} from "@/components";
import { Projects } from "@/components/work/Projects";
import { about, baseURL, home, person, resume, social } from "@/resources";
import {
  Avatar,
  Badge,
  Button,
  Column,
  Heading,
  Line,
  Meta,
  RevealFx,
  Row,
  Schema,
  StatusIndicator,
  Text,
} from "@once-ui-system/core";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="80" paddingY="24" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero Section */}
      <Column
        as="section"
        id="home"
        fillWidth
        horizontal="center"
        align="center"
        gap="24"
        paddingY="24"
        style={{ scrollMarginTop: "5.5rem" }}
      >
        <Column maxWidth="s" horizontal="center" align="center" gap="16">
          {home.featured.display && (
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
              href={home.featured.href}
            >
              <Row gap="8" vertical="center" paddingY="2">
                <StatusIndicator color="green" ariaLabel="Available" />
                <Text variant="label-default-s">{home.featured.title}</Text>
              </Row>
            </Badge>
          )}

          <Row gap="12" vertical="center" horizontal="center" wrap>
            <Avatar value={person.initials} size="m" statusIndicator={{ color: "green" }} />
            <Column gap="0" align="left">
              <Text variant="label-strong-m" onBackground="neutral-strong">
                {person.name}
              </Text>
              <Text variant="code-default-xs" onBackground="brand-medium">
                {person.role}
              </Text>
            </Column>
          </Row>

          <Heading as="h1" wrap="balance" variant="display-strong-l" align="center">
            {home.headline}
          </Heading>

          <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l" align="center">
            {home.subline}
          </Text>

          <Row gap="12" wrap horizontal="center" paddingTop="8">
            <Button href="#projects" variant="primary" size="m" arrowIcon className="touch-target">
              Explore My Work
            </Button>
            <Button
              href={resume.path}
              download={resume.filename}
              variant="secondary"
              size="m"
              prefixIcon="download"
              className="touch-target"
            >
              Download Resume
            </Button>
            <Button
              href="#contact"
              variant="tertiary"
              size="m"
              prefixIcon="email"
              className="touch-target"
            >
              Contact Me
            </Button>
          </Row>

          <Row gap="12" wrap horizontal="center" paddingTop="8">
            {social.map((item) => (
              <Button
                key={item.name}
                href={item.link}
                variant="ghost"
                size="s"
                prefixIcon={item.icon}
                suffixIcon={item.link.startsWith("http") ? "arrowUpRight" : undefined}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="touch-target"
              >
                {item.name === "Email" ? person.email : item.name}
              </Button>
            ))}
          </Row>
        </Column>
      </Column>

      <Line background="neutral-alpha-weak" />

      {/* About Section */}
      <RevealFx speed="fast" translateY={1}>
        <AboutSection />
      </RevealFx>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Featured Projects Section */}
      <Column as="section" id="projects" fillWidth gap="24" style={{ scrollMarginTop: "5.5rem" }}>
        <Row
          fillWidth
          horizontal="between"
          vertical="end"
          gap="16"
          s={{ direction: "column", horizontal: "start", vertical: "start" }}
        >
          <Column gap="8" maxWidth={40}>
            <Text variant="label-default-s" onBackground="brand-medium">
              FEATURED PROJECTS
            </Text>
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Systems architecture, autonomous agents, and multi-tenant platforms
            </Heading>
          </Column>
          <Button href="/work" variant="secondary" size="s" arrowIcon>
            All Case Studies
          </Button>
        </Row>
        <Projects />
      </Column>

      {/* Technical Skills Section */}
      <SkillsSection />

      {/* Education, Certifications & Resume Section */}
      <EducationSection />

      {/* Contact Section */}
      <ContactSection />
    </Column>
  );
}
