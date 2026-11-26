import { notFound } from "next/navigation";
import "katex/dist/katex.min.css";
import { CustomMDX, ScrollToHash } from "@/components";
import { Projects } from "@/components/work/Projects";
import { about, baseURL, person, work } from "@/resources";
import { canViewPath } from "@/utils/pageAccessServer";
import { getPosts } from "@/utils/utils";
import {
  Button,
  Column,
  Heading,
  Line,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import type { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((p) => p.slug === slugPath);

  if (!post) return {};

  const metadata = Meta.generate({
    title: `${post.metadata.title} — ${person.name}`,
    description: post.metadata.summary,
    baseURL: baseURL,
    image:
      post.metadata.image ||
      post.metadata.images[0] ||
      `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`,
    path: `${work.path}/${post.slug}`,
  });
  return { ...metadata, alternates: { canonical: metadata.openGraph.url } };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find((p) => p.slug === slugPath);

  if (!post) {
    notFound();
  }

  if (!(await canViewPath(`${work.path}/${post.slug}`))) {
    return null;
  }

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="24" paddingY="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image ||
          post.metadata.images[0] ||
          `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Row gap="4" vertical="center">
            <Text variant="label-strong-m">← All Projects</Text>
          </Row>
        </SmartLink>

        {post.metadata.tag && <Tag size="s">{post.metadata.tag}</Tag>}

        <Heading as="h1" variant="display-strong-m" align="center">
          {post.metadata.title}
        </Heading>

        {post.metadata.subtitle && (
          <Text variant="heading-default-l" onBackground="brand-medium" align="center">
            {post.metadata.subtitle}
          </Text>
        )}

        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
          {post.metadata.summary}
        </Text>

        {post.metadata.stack && post.metadata.stack.length > 0 && (
          <Row gap="8" wrap horizontal="center">
            {post.metadata.stack.map((tech) => (
              <Tag key={tech} size="s">
                {tech}
              </Tag>
            ))}
          </Row>
        )}

        <Row gap="12" wrap horizontal="center" paddingTop="8">
          {post.metadata.github ? (
            <Button
              href={post.metadata.github}
              variant="secondary"
              size="s"
              prefixIcon="github"
              suffixIcon="arrowUpRight"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Button>
          ) : (
            <Tag size="m" prefixIcon="github">
              GitHub Repo · Link Pending
            </Tag>
          )}

          {post.metadata.link ? (
            <Button
              href={post.metadata.link}
              variant="primary"
              size="s"
              prefixIcon="openLink"
              suffixIcon="arrowUpRight"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          ) : (
            post.metadata.hasLiveDemo && (
              <Tag size="m" prefixIcon="openLink">
                Live Demo · Link Pending
              </Tag>
            )
          )}
        </Row>
      </Column>

      {post.metadata.images.length > 0 && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="l"
          border
          enlarge
          alt={`${post.metadata.title} architecture diagram`}
          src={post.metadata.images[0]}
        />
      )}

      {post.metadata.contribution && (
        <Column maxWidth="s" background="surface" border radius="l" padding="24" gap="8">
          <Text variant="label-strong-s" onBackground="brand-medium">
            Role &amp; Direct Engineering Contribution
          </Text>
          {post.metadata.role && (
            <Text variant="code-default-xs" onBackground="neutral-weak">
              {post.metadata.role}
            </Text>
          )}
          <Text
            variant="body-default-m"
            onBackground="neutral-medium"
            style={{ lineHeight: "1.65" }}
          >
            {post.metadata.contribution}
          </Text>
        </Column>
      )}

      <Column style={{ margin: "auto" }} as="article" maxWidth="s">
        <CustomMDX source={post.content} />
      </Column>

      <Column fillWidth gap="24" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="8">
          Other Projects
        </Heading>
        <Projects exclude={[post.slug]} range={[1, 2]} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
