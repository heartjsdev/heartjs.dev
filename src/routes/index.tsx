import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { Copy, Check } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export const Route = createFileRoute("/")({
  component: Home,
});

const images = [
  { src: "/h.png", alt: "Hono" },
  { src: "/e.png", alt: "Expo" },
  { src: "/a.png", alt: "AI SDK" },
  { src: "/r.png", alt: "React" },
  { src: "/t.png", alt: "Tanstack Router" },
];

// Some constants to make adjustments easier
const ORBIT_RADIUS = 150; // The radius of the orbit in pixels for lg screens
const IMAGE_SIZE = 64; // The size of the orbiting images in pixels

const animationKeyframes = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes reverse-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
`;

const OrbitingEmoji = () => {
  return (
    <>
      {/* Inject the keyframes into the document head via a style tag */}
      <style>{animationKeyframes}</style>

      <div className="flex flex-1 items-center justify-center">
        <div className="relative h-64 w-64 lg:h-96 lg:w-96">
          {/*
            Orbiting Container
            - We apply the 'spin' animation using Tailwind's arbitrary value syntax.
            - `motion-safe` ensures it only runs for users who haven't disabled animations.
          */}
          <div className="absolute h-full w-full motion-safe:animate-[spin_40s_linear_infinite]">
            {images.map((image, index) => {
              const angle = (index / images.length) * 2 * Math.PI;
              const x = Math.cos(angle) * ORBIT_RADIUS;
              const y = Math.sin(angle) * ORBIT_RADIUS;

              return (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    // Apply the 'reverse-spin' animation to keep the image upright
                    className="shadow-lg motion-safe:animate-[reverse-spin_40s_linear_infinite] lg:h-16 lg:w-16"
                    style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
                  />
                </div>
              );
            })}
          </div>

          {/*
            Central Emoji
            - Apply the 'float' animation using the same arbitrary value syntax.
            - Kept the slow speed and accessibility modifier.
          */}
          <div className="absolute inset-0 motion-safe:animate-[float_10s_ease-in-out_infinite] rounded-2xl  transition-transform duration-300 hover:scale-105 hover:rotate-[-2deg]">
            <div className="flex h-full w-full items-center justify-center text-8xl">
              🫰
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function TypewriterText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Light Weight",
    "Super Fast",
    "Cross Platform",
    "Model Agnostic",
    "AI Ready",
    "Huge Ecosystem",
    "Platform Agnostic",
    "Type Safe",
  ];

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          if (text === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : text === currentWord ? 2000 : 100,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="inline-block min-w-[300px] text-left lg:min-w-[400px]">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Home() {
  const [currentPM, setCurrentPM] = useState("npm");
  const [copied, setCopied] = useState(false);

  const commands = {
    npm: "npm create heartjs@latest",
    yarn: "yarn create heartjs",
    pnpm: "pnpm create heartjs@latest",
    bun: "bun create heartjs@latest",
  };

  const copyCommand = () => {
    navigator.clipboard.writeText(commands[currentPM]).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <div className="w-[95vw] mx-12 items-center flex py-8 justify-between">
        <p className="text-2xl">
          🫰 heartjs<span className="text-[#f34]">.</span>dev
        </p>
        <AnimatedThemeToggler />
      </div>
      <div className="relative">
        {/* Hero Section */}
        <section className="container relative py-12 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-6 font-serif text-5xl font-semibold leading-tight tracking-tight lg:text-7xl">
                <TypewriterText />
              </h1>

              <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground lg:mx-0 lg:text-xl">
                Heartjs.dev is a modular TypeScript starter that runs
                <br />
                <span className="font-semibold text-foreground">
                  Hono, Expo, AI SDK, React, and TanStack Router
                </span>{" "}
                together without tying your frontend and backend into one
                runtime.
              </p>

              {/* Command Box */}
              <div className="mx-auto mb-6 flex max-w-2xl flex-col items-center gap-4 sm:flex-row lg:mx-0">
                <div className="flex w-full items-center gap-2 rounded-lg border bg-muted/50 px-4 py-3 font-mono text-sm sm:text-base">
                  <span className="flex-1 text-left">
                    {commands[currentPM]}
                  </span>
                  <button
                    onClick={copyCommand}
                    className="rounded-md p-2 hover:bg-muted transition-colors"
                    aria-label="Copy command"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Package Manager Buttons */}
              <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
                <span>Also works with</span>
                {(["npm", "yarn", "pnpm", "bun"] as const).map((pm) => (
                  <button
                    key={pm}
                    onClick={() => setCurrentPM(pm)}
                    className={`rounded-md px-3 py-1 font-mono transition-colors ${
                      currentPM === pm
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {pm}
                  </button>
                ))}
              </div>

              {/* Docs Button */}
              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/docs/$"
                  params={{ _splat: "" }}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View Documentation
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex flex-1 items-center justify-center">
              <div className="relative h-64 w-64 lg:h-96 lg:w-96">
                <div className="absolute inset-0 animate-float rounded-2xl transition-transform hover:scale-105 hover:rotate-[-2deg]">
                  <div className="flex h-full w-full items-center justify-center text-8xl">
                    <OrbitingEmoji></OrbitingEmoji>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              What's Inside
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Hono */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 text-4xl">🔥</div>
                <h3 className="mb-3 text-2xl font-bold">Hono</h3>
                <p className="mb-4 text-muted-foreground">
                  Edge-ready, ultrafast web framework for APIs and
                  microservices. Hono powers your backend and runs everywhere
                  Node, Bun, Deno, or Cloudflare.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    ⚡ Fast & Lightweight
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    🌐 Edge Ready
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    🔗 Hono RPC
                  </span>
                </div>
              </div>

              {/* React + TanStack Router */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 text-4xl">⚛️</div>
                <h3 className="mb-3 text-2xl font-bold">
                  React + TanStack Router
                </h3>
                <p className="mb-4 text-muted-foreground">
                  React powered by Vite and TanStack Router for typed routing,
                  loaders, and actions. Includes shadcn/ui out of the box for a
                  beautiful design system.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    🎯 Type Safe
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    ⚡ Vite Builds
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    🎨 shadcn/ui
                  </span>
                </div>
              </div>

              {/* Expo */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 text-4xl">📱</div>
                <h3 className="mb-3 text-2xl font-bold">
                  Expo + React Native Reusables
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Cross-platform apps made simple. Expo comes pre-integrated
                  with react native reusables — unstyled, accessible primitives
                  for UI consistency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    📱 Cross Platform
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    ♿ Accessible
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    🚀 Fast Dev
                  </span>
                </div>
              </div>

              {/* AI SDK */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 text-4xl">🤖</div>
                <h3 className="mb-3 text-2xl font-bold">AI SDK</h3>
                <p className="mb-4 text-muted-foreground">
                  Optional, but powerful. Integrate AI quickly using Vercel's AI
                  SDK. Stream responses, handle embeddings, and connect to
                  OpenAI or Anthropic instantly.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    🧠 Multiple Providers
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    🌊 Streaming
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    💬 Chat Ready
                  </span>
                </div>
              </div>

              {/* Docker */}
              <div className="group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:shadow-lg md:col-span-2">
                <div className="mb-4 text-4xl">🐳</div>
                <h3 className="mb-3 text-2xl font-bold">Docker Ready</h3>
                <p className="mb-4 text-muted-foreground">
                  The create-heartjs CLI can set up your choice of database
                  automatically with Docker Compose. Spin up PostgreSQL, MySQL,
                  MongoDB, or Redis in seconds with environment variables wired
                  up in your Hono API.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    🐘 PostgreSQL
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    🐬 MySQL
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    🍃 MongoDB
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs">
                    ⚡ Redis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Heart.js Section */}
        <section className="container py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Why Heart.js?
            </h2>

            <div className="prose prose-neutral dark:prose-invert mx-auto">
              <p className="text-lg text-muted-foreground">
                I've always loved full-stack frameworks like SvelteKit and
                Next.js — they're amazing for building fast, connected apps. But
                when it comes time to add a{" "}
                <strong className="text-foreground">mobile app</strong> or an{" "}
                <strong className="text-foreground">external API</strong>,
                things start to get messy. The frontend and backend are too
                intertwined, and separating them feels like un-weaving a
                sweater.
              </p>

              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">Heart.js</strong> is my
                answer to that. A clean separation where each layer can still
                share code, types, and structure without getting in each other's
                way. One command sets up:
              </p>

              <ul className="space-y-2 text-muted-foreground">
                <li>
                  🧩 A <strong className="text-foreground">Hono</strong> backend
                  that runs anywhere with RPC for type-safe APIs
                </li>
                <li>
                  📱 An <strong className="text-foreground">Expo</strong> app
                  powered by react-native-reusables
                </li>
                <li>
                  🤖 Optional{" "}
                  <strong className="text-foreground">AI SDK</strong>{" "}
                  integration when you need intelligent features
                </li>
                <li>
                  ⚛️ A{" "}
                  <strong className="text-foreground">
                    React + TanStack Router
                  </strong>{" "}
                  frontend built with Vite and shadcn/ui
                </li>
                <li>
                  🐳 Easy <strong className="text-foreground">Docker</strong>{" "}
                  setup for your databases when you're ready to scale
                </li>
              </ul>

              <p className="text-lg text-muted-foreground">
                No magic, no lock-in — just tools that play well together.
                Because I wanted a stack that feels <em>modular</em>,{" "}
                <em>type-safe</em>, and <em>fun</em> to build with again.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Compose Your Stack. Keep It Yours.
            </h2>

            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 sm:flex-row">
              <div className="flex w-full items-center gap-2 rounded-lg border bg-muted/50 px-4 py-3 font-mono text-sm sm:text-base">
                <span className="flex-1 text-left">{commands[currentPM]}</span>
                <button
                  onClick={copyCommand}
                  className="rounded-md p-2 hover:bg-muted transition-colors"
                  aria-label="Copy command"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="container text-center text-sm text-muted-foreground">
            <div className="mt-4 flex items-center justify-center gap-6 mb-8">
              <p>
                Built with 🫰 by{" "}
                <a
                  href="https://youtube.com/anirudhisonline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4 hover:text-foreground"
                >
                  anirudhisonline
                </a>
              </p>
              <a
                href="https://github.com/heartjsdev/create-heartjs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/create-heartjs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                npm
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

<Link
  to="/docs/$"
  params={{
    _splat: "",
  }}
  className="px-3 py-2 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm mx-auto"
>
  Go to Docs
</Link>;
