export interface PageMeta {
  slug: string;
  title: string;
  subtitle: string;
}

// Ordered by packet lifecycle: server → network → browser
export const wwwPages: PageMeta[] = [
  {
    slug: "filesystem",
    title: "Filesystem",
    subtitle: "How files are stored on disk — inodes, blocks, and permissions",
  },
  {
    slug: "ethernet",
    title: "Ethernet",
    subtitle: "IEEE 802.3 — the data link layer frame format",
  },
  {
    slug: "routing",
    title: "Routing",
    subtitle: "Network layer path selection — how packets find their way",
  },
  {
    slug: "ip",
    title: "IP",
    subtitle: "Internet Protocol — the network layer",
  },
  {
    slug: "tcp",
    title: "TCP",
    subtitle:
      "Transmission Control Protocol — reliable, ordered, connection-oriented transport",
  },
  {
    slug: "reassembly",
    title: "Packet Reassembly",
    subtitle: "Client-side stream reconstruction — from fragments to data",
  },
  {
    slug: "tls",
    title: "TLS",
    subtitle: "Transport Layer Security — encrypted communication",
  },
  {
    slug: "http",
    title: "HTTP",
    subtitle: "Hypertext Transfer Protocol — the application layer",
  },
  {
    slug: "html-syntax",
    title: "HTML Syntax",
    subtitle: "Hypertext Markup Language — parsing and document structure",
  },
  {
    slug: "parsing",
    title: "Parsing",
    subtitle: "Browser parsing — from bytes to render tree",
  },
  {
    slug: "rendering",
    title: "Rendering",
    subtitle: "Browser rendering pipeline — from DOM to pixels",
  },
  { slug: "html-css", title: "HTML CSS", subtitle: "Browser default styles" },
];

export function getNavigation(slug: string): {
  prev: PageMeta | null;
  next: PageMeta | null;
  current: PageMeta | null;
} {
  const idx = wwwPages.findIndex((p) => p.slug === slug);
  if (idx === -1) {
    return { prev: null, next: null, current: null };
  }
  return {
    prev: idx > 0 ? wwwPages[idx - 1] : null,
    next: idx < wwwPages.length - 1 ? wwwPages[idx + 1] : null,
    current: wwwPages[idx],
  };
}
