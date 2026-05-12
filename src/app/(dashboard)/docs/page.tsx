"use client";

import {
  useMemo,
  useState,
} from "react";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import jsPDF from "jspdf";

import markdownContent from "@/data/docs";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Input,
} from "@/components/ui/input";

import {
  Button,
} from "@/components/ui/button";

import {
  Download,
} from "lucide-react";

const headings = [
  "Introduction",
  "Features",
  "API Example",
  "Usage",
  "Notes",
  "Contact",
];

export default function DocsPage() {

  const [search, setSearch] =
    useState("");

  const filteredMarkdown =
    useMemo(() => {

      if (!search)
        return markdownContent;

      return markdownContent
        .split("\n")
        .filter((line) =>
          line
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        )
        .join("\n");

    }, [search]);

  function downloadPDF() {

    const pdf =
      new jsPDF();

    pdf.text(
      markdownContent,
      10,
      10
    );

    pdf.save(
      "titan-docs.pdf"
    );
  }

  return (
    <div className="flex gap-8">

      {/* TOC */}
      <aside className="sticky top-24 hidden h-fit w-[240px] shrink-0 rounded-3xl border border-border bg-background/80 p-6 xl:block">

        <h2 className="mb-4 text-xl font-black">

          Contents

        </h2>

        <div className="space-y-3">

          {headings.map(
            (heading) => (

              <a
                key={heading}
                href={`#${heading
                  .toLowerCase()
                  .replaceAll(
                    " ",
                    "-"
                  )}`}
                className="block text-sm text-muted-foreground transition hover:text-primary"
              >

                {heading}

              </a>
            )
          )}

        </div>

      </aside>

      {/* Main */}
      <div className="flex-1 space-y-6">

        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-5xl font-black">

              Documentation

            </h1>

            <p className="mt-3 text-muted-foreground">

              Titan AI platform
              documentation and
              API references.

            </p>

          </div>

          <Button
            onClick={
              downloadPDF
            }
          >

            <Download className="mr-2 h-4 w-4" />

            Download PDF

          </Button>

        </div>

        {/* Search */}
        <Input
          placeholder="Search documentation..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        {/* Markdown */}
        <Card className="border-border bg-background/80">

          <CardContent className="
            prose
            prose-invert
            max-w-none
            p-10
            leading-8

            prose-headings:mb-6
            prose-headings:mt-10

            prose-p:my-5

            prose-li:my-2

            prose-table:my-8
            prose-th:p-3
            prose-td:p-3

            prose-h1:text-5xl
            prose-h2:text-3xl
            prose-h3:text-2xl

            dark:prose-invert
        ">

            <ReactMarkdown
              remarkPlugins={[
                remarkGfm,
              ]}
            >

              {
                filteredMarkdown
              }

            </ReactMarkdown>

          </CardContent>

        </Card>

      </div>

    </div>
  );
}