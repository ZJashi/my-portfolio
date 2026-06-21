---
title: "The Attention Mechanism"
date: "2026-06-20"
tags: ["AI", "Math"]
description: "How scaled dot-product attention works, from the query-key-value formulation to multi-head attention."
---

## Why Attention?

RNNs process sequences token by token, making long-range dependencies hard to learn. Attention lets every position in a sequence directly attend to every other position — $O(1)$ path length between any two tokens.

## Scaled Dot-Product Attention

Given queries $Q$, keys $K$, and values $V$:

$$
\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right) V
$$

The $\sqrt{d_k}$ scaling prevents the dot products from growing large in magnitude when $d_k$ is large, which would push softmax into regions with tiny gradients.

### What each matrix does

| Matrix | Shape | Role |
|--------|-------|------|
| $Q$ | $n \times d_k$ | What am I looking for? |
| $K$ | $m \times d_k$ | What do I contain? |
| $V$ | $m \times d_v$ | What do I return if selected? |

The output is a weighted sum of values, where the weight between query $i$ and key $j$ is:

$$
\alpha_{ij} = \frac{\exp(q_i \cdot k_j / \sqrt{d_k})}{\sum_{j'} \exp(q_i \cdot k_{j'} / \sqrt{d_k})}
$$

## Multi-Head Attention

Instead of one attention function, run $h$ attention heads in parallel with separate learned projections:

$$
\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \ldots, \text{head}_h) W^O
$$

where each head is:

$$
\text{head}_i = \text{Attention}(Q W_i^Q,\ K W_i^K,\ V W_i^V)
$$

This lets the model jointly attend to information from different representation subspaces.

## Computational Cost

Self-attention over a sequence of length $n$ costs $O(n^2 d)$ — the full attention matrix is $n \times n$. This is the main bottleneck for long contexts. Sparse attention, linear attention, and FlashAttention all target this.


## Key Insight

The power of attention isn't just the weighted sum — it's that $Q$, $K$, $V$ are all learned linear projections of the same input. The model learns *what to ask*, *what to match against*, and *what to retrieve*.