---
title: 'JEPA-LLM'
date: '2026-01-22'
tags: 
  - ai
excerpt: "Can language training methods learn a few tricks from vision?"
---


## Introduction


#### **Generative/reconstruction-based methods**

Examples:
* Autoregressive LMs (GPT-style)
* Masked reconstruction (BERT, MAE)

Core property:
- Learn representations by reconstructing input space.

For language:
- Tokens are predicted
- Loss is defined over symbol sequences
- Evaluation strongly tied to generation quality


#### **Joint Embedding Predictive Architectures (JEPAs)**

JEPAs:

- Do not reconstruct inputs
- Learn by predicting representations of one view from another
- Operate entirely in embedding space

Canonical vision example:
- Two images of the same building (different lighting, angles)
- Model predicts one embedding from the other
- Collapse is prevented via architectural / objective constraints

Key sentence:
JEPAs learn representations by ensuring different views of the same object predict each other, while avoiding collapse.


##### Why JEPA is attractive (and risky)

Benefits:
- Less biased representations
- Better abstraction
- Better “knowledge discovery” in perception tasks


Cost:
- Risk of dimensional collapse
- Embeddings can degenerate without care

This tradeoff is well-understood in vision — and mostly solved.


#### Central Motivation of Paper

Despite JEPA success in vision, language still relies almost entirely on reconstruction

LLMs are judged by:

- Text generation
- Token-level likelihood
- Input-space outputs

_Because evaluation itself is generative, it becomes difficult to justify non-generative training objectives for language._

This creates a self-reinforcing loop:
- We train for generation
- We evaluate generation
- We optimize only what we measure

LLM tasks also involve perception and reasoning, where JEPA is already known to be preferable.
Not all language tasks are “pure generation”

Many involve:
- Semantic alignment
- Structural mapping
- Abstract reasoning

So ignoring JEPA in language is likely suboptimal. But paper does not claim that JEPA can be applied everywhere (yet). 
Instead, they focus on datasets with natural multi-view structure, such as:
- Natural language ↔ regular expressions
- Natural language ↔ SQL
- Issue description ↔ code diff


They are not proposing:

- A replacement for autoregressive modeling
- A fully JEPA-trained LLM
- A universal data-augmentation scheme (yet)

They are proposing:

- A hybrid objective
- A proof-of-concept
- Evidence that embedding-space objectives matter in language

**The paper argues that language modeling has overcommitted to reconstruction-based objectives, and proposes LLM-JEPA as a principled way to inject JEPA-style embedding prediction into LLM training without sacrificing generation.**

