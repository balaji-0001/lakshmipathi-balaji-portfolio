import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

export type ProjectMetadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  order?: number;
  summary: string;
  role?: string;
  contribution?: string;
  stack?: string[];
  highlights?: string[];
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
  github?: string;
  hasLiveDemo?: boolean;
};

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: ProjectMetadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt || "",
    order: typeof data.order === "number" ? data.order : undefined,
    summary: data.summary || "",
    role: data.role || "",
    contribution: data.contribution || "",
    stack: Array.isArray(data.stack) ? data.stack : [],
    highlights: Array.isArray(data.highlights) ? data.highlights : [],
    image: data.image || "",
    images: Array.isArray(data.images) ? data.images : [],
    tag: data.tag || "",
    team: Array.isArray(data.team) ? data.team : [],
    link: data.link || "",
    github: data.github || "",
    hasLiveDemo: Boolean(data.hasLiveDemo),
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  // Posts are read at build time. The ignore comment keeps Next from tracing
  // the whole project (images and video included) into every server function.
  const postsDir = path.join(/* turbopackIgnore: true */ process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
