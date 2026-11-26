import { Projects } from "@/components/work/Projects";
import { about, baseURL, person, work } from "@/resources";
import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  const metadata = Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingY="24" gap="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth={40} gap="8" horizontal="center" align="center" marginBottom="16">
        <Text variant="label-default-s" onBackground="brand-medium">
          ENGINEERING CASE STUDIES
        </Text>
        <Heading as="h1" variant="display-strong-m" align="center">
          {work.title}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
          {work.description}
        </Text>
      </Column>
      <Projects />
    </Column>
  );
}
