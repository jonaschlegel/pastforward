import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 mt-8 font-heading text-gray-900 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-4 mt-8 font-heading text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mb-3 mt-6 font-heading text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold mb-3 mt-6 font-heading text-gray-900">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-bold mb-2 mt-4 font-heading text-gray-900">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-bold mb-2 mt-4 font-heading text-gray-900">
        {children}
      </h6>
    ),
    p: ({ children }) => (
      <p className="mb-6 font-body text-gray-700 leading-relaxed text-lg">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-indigo-700 hover:text-indigo-900 underline transition-colors font-medium"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc font-body text-gray-700 text-lg space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal font-body text-gray-700 text-lg space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-indigo-200 pl-6 py-4 italic mb-6 text-gray-600 bg-gray-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-t border-gray-300 my-8" />,
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-[0px_24px_20px_-20px_#2d3748] mb-6 w-full h-auto"
      />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
    tbody: ({ children }) => <tbody className="bg-white">{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b border-gray-200">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-bold text-gray-900 font-heading">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-gray-700 font-body">{children}</td>
    ),
    ...components,
  };
}
