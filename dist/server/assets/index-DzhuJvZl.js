import { jsx, Fragment, jsxs } from "react/jsx-runtime";
let frontmatter = {
  "title": "Introduction",
  "description": "The Modular Full-Stack You’ll Love.",
  "icon": "Heart"
};
let extractedReferences = [];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Welcome to Heart.js! It's a modular TypeScript starter that brings together Hono, Expo, AI SDK, React, and TanStack Router without tightly coupling your frontend and backend into a single runtime."
  }, {
    "heading": void 0,
    "content": "Full-stack frameworks like SvelteKit and Next.js are excellent for building connected apps. However, adding a mobile app or an external API can become complicated because the frontend and backend are often too intertwined."
  }, {
    "heading": void 0,
    "content": "Heart.js is the answer to this problem. It establishes a clean separation where each layer can share code, types, and structure without obstructing the others."
  }, {
    "heading": "whats-inside",
    "content": "Heart.js provides a curated collection of leading web development technologies, ready to be composed into your ideal stack."
  }, {
    "heading": "key-principles",
    "content": "Heart.js is built on a few core ideas:"
  }, {
    "heading": "key-principles",
    "content": "Principle"
  }, {
    "heading": "key-principles",
    "content": "Description"
  }, {
    "heading": "key-principles",
    "content": "Modular"
  }, {
    "heading": "key-principles",
    "content": "Each part of your stack (API, web, mobile) is independent, making it easy to manage, scale, or replace."
  }, {
    "heading": "key-principles",
    "content": "Type-Safe"
  }, {
    "heading": "key-principles",
    "content": "With TypeScript at its core, you can share types between your backend and frontend, ensuring end-to-end type safety."
  }, {
    "heading": "key-principles",
    "content": "No Lock-in"
  }, {
    "heading": "key-principles",
    "content": "The setup uses the official CLIs for each technology (hono init, etc.), so you're not tied to a proprietary system. It’s just tools that play well together."
  }, {
    "heading": "key-principles",
    "content": "Developer-First"
  }, {
    "heading": "key-principles",
    "content": "An interactive CLI, modern tooling, and optional integrations are designed to make the development experience fun and productive."
  }],
  "headings": [{
    "id": "whats-inside",
    "content": "What's Inside?"
  }, {
    "id": "key-principles",
    "content": "Key Principles"
  }]
};
const toc = [{
  depth: 2,
  url: "#whats-inside",
  title: jsx(Fragment, {
    children: "What's Inside?"
  })
}, {
  depth: 3,
  url: "#key-principles",
  title: jsx(Fragment, {
    children: "Key Principles"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, { Card, Cards } = _components;
  if (!Card) _missingMdxReference("Card");
  if (!Cards) _missingMdxReference("Cards");
  return jsxs(Fragment, {
    children: [jsxs(_components.p, {
      children: ["Welcome to Heart.js! It's a modular TypeScript starter that brings together ", jsx(_components.strong, {
        children: "Hono, Expo, AI SDK, React, and TanStack Router"
      }), " without tightly coupling your frontend and backend into a single runtime."]
    }), "\n", jsx(_components.p, {
      children: "Full-stack frameworks like SvelteKit and Next.js are excellent for building connected apps. However, adding a mobile app or an external API can become complicated because the frontend and backend are often too intertwined."
    }), "\n", jsx(_components.p, {
      children: "Heart.js is the answer to this problem. It establishes a clean separation where each layer can share code, types, and structure without obstructing the others."
    }), "\n", jsx(_components.h2, {
      id: "whats-inside",
      children: "What's Inside?"
    }), "\n", jsx(_components.p, {
      children: "Heart.js provides a curated collection of leading web development technologies, ready to be composed into your ideal stack."
    }), "\n", jsxs(Cards, {
      children: [jsx(Card, {
        title: "Hono",
        description: "An edge-ready, ultrafast web framework for your APIs and microservices."
      }), jsx(Card, {
        title: "React + TanStack Router",
        description: "A powerful combination for building type-safe, modern web frontends with Vite and shadcn/ui."
      }), jsx(Card, {
        title: "Expo",
        description: "Create cross-platform mobile applications with react-native-reusables for consistent UI."
      }), jsx(Card, {
        title: "AI SDK",
        description: "Optionally integrate AI features with Vercel’s AI SDK for streaming and multi-provider support."
      }), jsx(Card, {
        title: "Docker Ready",
        description: "Easily spin up databases like PostgreSQL, MySQL, MongoDB, or Redis with Docker Compose."
      })]
    }), "\n", jsx(_components.h3, {
      id: "key-principles",
      children: "Key Principles"
    }), "\n", jsx(_components.p, {
      children: "Heart.js is built on a few core ideas:"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Principle"
          }), jsx(_components.th, {
            children: "Description"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.strong, {
              children: "Modular"
            })
          }), jsx(_components.td, {
            children: "Each part of your stack (API, web, mobile) is independent, making it easy to manage, scale, or replace."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.strong, {
              children: "Type-Safe"
            })
          }), jsx(_components.td, {
            children: "With TypeScript at its core, you can share types between your backend and frontend, ensuring end-to-end type safety."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.strong, {
              children: "No Lock-in"
            })
          }), jsxs(_components.td, {
            children: ["The setup uses the official CLIs for each technology (", jsx(_components.code, {
              children: "hono init"
            }), ", etc.), so you're not tied to a proprietary system. It’s just tools that play well together."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: jsx(_components.strong, {
              children: "Developer-First"
            })
          }), jsx(_components.td, {
            children: "An interactive CLI, modern tooling, and optional integrations are designed to make the development experience fun and productive."
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
export {
  MDXContent as default,
  extractedReferences,
  frontmatter,
  structuredData,
  toc
};
