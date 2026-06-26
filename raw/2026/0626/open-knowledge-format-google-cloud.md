---
source: https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing
date: 2026-06-26
topic: AI, Knowledge Management, LLM Wiki, Open Format
---

# How the Open Knowledge Format can improve data sharing

As foundation models continue to improve, the lack of relevant context often limits what they can do, especially as they are used to build agentic systems. While these models can help you write code, summarize documents, or analyze a dataset, they still need the right information to produce accurate and actionable results.

That's why today, we're introducing the Open Knowledge Format (OKF), an open specification that formalizes the LLM-wiki pattern (Karpathy) into a portable, interoperable format. This is a vendor-neutral, agent- and human-friendly standard for representing the metadata, context, and curated knowledge that modern AI systems need.

As published, OKF v0.1 represents knowledge as a directory of markdown files with YAML frontmatter, with a small set of agreed-upon conventions that let wikis written by different producers be consumed by different agents without translation.

That's it. No complex compression scheme, no new runtime, no required SDK. A bundle of OKF documents is:

- Just markdown — readable in any editor, renderable on GitHub, indexable by any search tool
- Just files — shippable as a tarball, hostable in any git repo, mountable on any filesystem
- Just YAML frontmatter — for the small set of structured fields that need to be queryable: type, title, description, resource, tags, and timestamp

If you've used Obsidian, Notion, Hugo, or any of the LLM wiki patterns that have emerged over the past year, the shape will feel familiar. OKF formalizes the small set of conventions needed to make these patterns interoperable.

## A fragmented context landscape

In most organizations, the information that foundation models use is overwhelmingly internal knowledge: the schema of a table, your business' meaning of a metric, the runbook for an incident, the join paths between two systems, the deprecation notice for an old API, etc.

Today, these atoms of knowledge live in a variety of highly fragmented systems:

- Metadata catalogs with their own APIs
- Wikis, third-party systems, or in shared drives
- Code comments, docstrings, or notebook cells
- The heads of a few senior engineers

When an AI agent needs to answer "How do I compute weekly active users from our event stream?" it has to assemble the answer from these scattered, mutually incompatible surfaces. Every vendor offers its own catalog, its own SDK, its own knowledge-graph schema, and none of the knowledge is easily portable across products or organizations.

## Knowledge as a living wiki

Developer teams are changing how they build AI agents. Instead of using models to search the same documents for the same facts over and over, you can give your agents a shared markdown library that grows more useful over time. This lets your agents take on the drudgery of reading and updating their own files, while your team curates the content and manages it like code.

Andrej Karpathy articulates this idea most crisply in his LLM Wiki gist. "LLMs don't get bored, don't forget to update a cross-reference, and can touch 15 files in one pass," he writes. The bookkeeping that causes humans to abandon personal wikis is exactly what LLMs are good at.

Similar knowledge-as-wiki pattern keeps reappearing under different names: Obsidian vaults wired to coding agents, the AGENTS.md / CLAUDE.md family of convention files, repos full of index.md and log.md artifacts that agents consult before doing real work, and "metadata as code" repositories inside data teams.

The pattern is compelling and powerful, but each instance is bespoke. Karpathy's wiki and your team's wiki and a vendor's catalog export may all look alike (markdown, frontmatter, cross-links), but none of them are intentionally designed to cooperate.

## What's missing is a format, not another service

The answer to this problem isn't another knowledge service. You need a format, a way to represent knowledge that:

- Anyone can produce, without an SDK
- Anyone can consume, without an integration
- Survives moving between systems, organizations, and tools
- Lives in version control alongside the code it describes
- Is readable by humans and parseable by agents: the same file, no translation layer

By design, OKF is that format.

## How OKF works: The design in one screen

An OKF bundle is a directory of markdown files representing concepts: anything you want to capture, including tables, datasets, metrics, playbooks, runbooks, and APIs. Each concept is one file. The file path is the concept's identity.

Each concept document has a small block of YAML front matter for structured fields and a markdown body for everything else.

Concepts link to each other with normal markdown links, turning the directory into a graph of relationships that is richer than the parent/child links implied by the file system. Bundles can optionally include index.md files (for progressive disclosure as agents navigate the hierarchy) and log.md files (for chronological history of changes).

## Three principles behind the design

1. **Minimally opinionated.** OKF requires exactly one thing of every concept: a type field. Everything else (e.g., what types exist, what other fields to include, what sections the body has) is left to the producer. The spec defines the interoperability surface, not the content model.

2. **Producer/consumer independence.** OKF cleanly separates who writes the knowledge from who consumes it. A bundle hand-authored by a human can be consumed by an AI agent. A bundle generated by a metadata export pipeline can be browsed in a visualizer. A bundle synthesized by one LLM can be queried by another. The format is the contract; the tooling at each end is independently swappable.

3. **Format, not platform.** OKF is not tied to any specific cloud, database, model provider, or agent framework. It will never require a proprietary account or SDK to read, write, or serve. We're publishing it as an open standard because the value of a knowledge format comes from how many parties speak it, not from who owns it.

## What Google shipped with the spec

- An **enrichment agent** that walks a BigQuery dataset, drafts an OKF concept document for every table and view, then runs a second LLM pass that crawls authoritative documentation and enriches each concept with citations, schemas, and join paths.
- A static **HTML visualizer** that turns any OKF bundle into an interactive graph view in a single self-contained file; no backend, no install on the viewing side, no data leaves the page.
- Three ready-to-browse **sample bundles**: GA4 e-commerce, Stack Overflow, and Bitcoin public datasets, produced by the reference agent and committed to the repo.

## Where OKF goes from here

OKF v0.1 is a starting point, not a finished standard. The format will evolve as more producers and consumers emerge.

The repo, the spec, and the sample bundles are available on GitHub: https://github.com/GoogleCloudPlatform/knowledge-catalog/tree/main/okf

Google Cloud has also updated their Knowledge Catalog to be able to ingest OKF and serve it to their agents.