---
title: "Markdown & LaTeX Reference"
date: "2026-06-20"
tags: ["CS", "Web"]
description: "Everything you can use when writing notes — headings, math, code blocks, tables, and more."
---

## Headings

```
## H2 — main section
### H3 — subsection
#### H4 — sub-subsection
```

---

## Text Formatting

```
**bold**          → **bold**
*italic*          → *italic*
~~strikethrough~~ → ~~strikethrough~~
**_bold italic_** → **_bold italic_**
`inline code`     → `inline code`
```

Renders as: **bold**, *italic*, ~~strikethrough~~, **_bold italic_**, `inline code`

---

## Math — Inline

Wrap with single `$`:

```
The softmax temperature is $\tau \in (0, \infty)$.
Loss is $\mathcal{L} = -\sum_i y_i \log \hat{y}_i$.
```

Renders: The softmax temperature is $\tau \in (0, \infty)$. Loss is $\mathcal{L} = -\sum_i y_i \log \hat{y}_i$.

---

## Math — Display Block

Wrap with `$$` on its own lines:

```
$$
\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^\top
$$
```

$$
\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^\top
$$

More examples:

$$
\nabla_\theta \mathcal{L} = \frac{1}{N} \sum_{i=1}^{N} \nabla_\theta \ell(f_\theta(x_i), y_i)
$$

$$
P(A \mid B) = \frac{P(B \mid A)\, P(A)}{P(B)}
$$

$$
e^{i\pi} + 1 = 0
$$

---

## Code Blocks

Open with triple backtick and the language name. Supported: `rust`, `python`, `typescript`, `javascript`, `cpp`, `c`, `go`, `bash`, `sql`, `json`, `yaml`, `toml`, `markdown`, and many more.

````
```rust
fn fibonacci(n: u64) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}
```
````

Renders as:

```rust
fn fibonacci(n: u64) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}
```

```python
import numpy as np

def softmax(x: np.ndarray) -> np.ndarray:
    e = np.exp(x - x.max())
    return e / e.sum()
```

```typescript
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) return { ok: false, error: "division by zero" };
  return { ok: true, value: a / b };
}
```

```bash
# Build and run
npm run build
npm start
```

---

## Lists

**Unordered:**
```
- Item one
- Item two
  - Nested item
  - Another nested
- Item three
```

- Item one
- Item two
  - Nested item
  - Another nested
- Item three

**Ordered:**
```
1. First
2. Second
3. Third
```

1. First
2. Second
3. Third

**Task list (GitHub Flavored Markdown):**
```
- [x] Completed task
- [ ] Pending task
- [ ] Another pending
```

- [x] Completed task
- [ ] Pending task
- [ ] Another pending

---

## Tables

```
| Symbol | Name       | Domain        |
|--------|------------|---------------|
| $\nabla$ | Gradient | $\mathbb{R}^n \to \mathbb{R}^n$ |
| $\partial$ | Partial derivative | scalar |
| $\oint$ | Contour integral | complex plane |
```

| Symbol | Name | Domain |
|--------|------|--------|
| $\nabla$ | Gradient | $\mathbb{R}^n \to \mathbb{R}^n$ |
| $\partial$ | Partial derivative | scalar |
| $\oint$ | Contour integral | complex plane |

---

## Blockquotes

```
> The purpose of abstraction is not to be vague, but to create
> a new semantic level in which one can be absolutely precise.
>
> — Dijkstra
```

> The purpose of abstraction is not to be vague, but to create
> a new semantic level in which one can be absolutely precise.
>
> — Dijkstra

---

## Horizontal Rule

Three or more dashes on their own line:

```
---
```

---

## Links

```
[OpenAI](https://openai.com)
[Attention Is All You Need](https://arxiv.org/abs/1706.03762)
```

---

## Mixing Math and Code

You can freely mix math and code in the same note. For example, describing the backward pass:

Given loss $\mathcal{L}$ and parameters $\theta$, the update rule is:

$$
\theta \leftarrow \theta - \eta \nabla_\theta \mathcal{L}
$$

Implemented as:

```python
optimizer.zero_grad()
loss.backward()          # computes ∇L
optimizer.step()         # θ ← θ - η∇L
```

---

## KaTeX Quick Reference

| Syntax | Output |
|--------|--------|
| `$x^2$` | $x^2$ |
| `$x_i$` | $x_i$ |
| `$\frac{a}{b}$` | $\frac{a}{b}$ |
| `$\sqrt{x}$` | $\sqrt{x}$ |
| `$\sum_{i=0}^{n}$` | $\sum_{i=0}^{n}$ |
| `$\int_a^b$` | $\int_a^b$ |
| `$\lim_{x \to \infty}$` | $\lim_{x \to \infty}$ |
| `$\mathbb{R}$` | $\mathbb{R}$ |
| `$\mathcal{L}$` | $\mathcal{L}$ |
| `$\hat{y}$` | $\hat{y}$ |
| `$\vec{v}$` | $\vec{v}$ |
| `$\mathbf{A}$` | $\mathbf{A}$ |
| `$\alpha, \beta, \gamma$` | $\alpha, \beta, \gamma$ |
| `$\nabla, \partial, \infty$` | $\nabla, \partial, \infty$ |
| `$\in, \subset, \cup, \cap$` | $\in, \subset, \cup, \cap$ |
| `$\leq, \geq, \neq, \approx$` | $\leq, \geq, \neq, \approx$ |
| `$\Rightarrow, \iff$` | $\Rightarrow, \iff$ |
