---
title: "Hello World: A Complete Markdown Guide"
date: "2026-01-22"
tags:
  - math
  - physics
excerpt: "A comprehensive guide demonstrating all the markdown features available for writing blog posts, including text formatting, code, math, and more."
---

Welcome to my blog! This post demonstrates all the features available for writing content.

## Text Formatting

You can write **bold text**, *italic text*, ***bold and italic***, and ~~strikethrough~~.

You can also use `inline code` for technical terms or short snippets.

For highlighting important text, you can use <mark>marked/highlighted text</mark>.

### Colored Text

You can write <span class="red">red text</span>, <span class="blue">blue text</span>, and <span class="purple">purple text</span>.

Also available: <span class="green">green</span>, <span class="orange">orange</span>, and <span class="gold">gold</span>.

## Headings

Use `#` symbols to create headings (H2-H4 are recommended for blog posts since H1 is the title):

```markdown
## Heading 2
### Heading 3
#### Heading 4
```

## Links

Here's a [link to Google](https://google.com) and here's a [relative link to the blog](/blog).

## Images

Place images in `/public/blog/` and reference them:

```markdown
![Alt text describing the image](/blog/transformers.png)
```

Here's the actual image:

![Transformers architecture](/blog/transformers.png)

## Blockquotes

> "The important thing is not to stop questioning. Curiosity has its own reason for existence."
>
> — Albert Einstein

Nested blockquotes:

> This is the first level.
>
> > This is a nested blockquote.

## Lists

### Unordered Lists

- First item
- Second item
  - Nested item A
  - Nested item B
- Third item

### Ordered Lists

1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Mixed Lists

1. **Mathematics**
   - Linear algebra
   - Probability theory
   - Real analysis
2. **Physics**
   - Quantum mechanics
   - Statistical mechanics
3. **Computer Science**
   - Algorithms
   - Machine learning

## Code Blocks

### Python

```python
def fibonacci(n: int) -> int:
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Example usage
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

### JavaScript/TypeScript

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
};
```

### Bash/Terminal

```bash
# Clone a repository
git clone https://github.com/user/repo.git
cd repo

# Install dependencies and run
npm install
npm run dev
```

### Other Languages

```rust
fn main() {
    let greeting = "Hello, World!";
    println!("{}", greeting);
}
```

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

## LaTeX Mathematics

### Inline Math

The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

Euler's identity: $e^{i\pi} + 1 = 0$ connects five fundamental constants.

The probability density function of a normal distribution is $f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$.

### Block Math (Display Mode)

The Schrödinger equation:

$$
i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r}, t) = \hat{H}\Psi(\mathbf{r}, t)
$$

Maxwell's equations in differential form:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{aligned}
$$

A matrix equation:

$$
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
\begin{pmatrix}
x_1 \\ x_2 \\ x_3
\end{pmatrix}
=
\begin{pmatrix}
b_1 \\ b_2 \\ b_3
\end{pmatrix}
$$

The definition of a derivative:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

An integral:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

A sum:

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

## Tables

| Algorithm | Time Complexity | Space Complexity |
|-----------|-----------------|------------------|
| Binary Search | O(log n) | O(1) |
| Merge Sort | O(n log n) | O(n) |
| Quick Sort | O(n log n) avg | O(log n) |
| Hash Table Lookup | O(1) avg | O(n) |

## Horizontal Rules

Use three dashes, asterisks, or underscores to create a horizontal rule:

---

Content continues after the rule...

## Keyboard Shortcuts

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy and <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste.

On Mac, use <kbd>Cmd</kbd> + <kbd>S</kbd> to save.

## Combining Features

You can combine multiple features for rich content:

> **Theorem (Pythagorean):** For a right triangle with legs $a$ and $b$ and hypotenuse $c$:
>
> $$a^2 + b^2 = c^2$$

Here's a code example with explanation:

The **time complexity** of this algorithm is $O(n \log n)$ because:

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])   # T(n/2)
    right = merge_sort(arr[mid:])  # T(n/2)

    return merge(left, right)      # O(n)
```

---

## Tips for Writing

1. **Keep paragraphs short** — easier to read on screens
2. **Use headings liberally** — helps with navigation
3. **Include code examples** — show, don't just tell
4. **Add visuals** — images and math break up text
5. **Link to resources** — provide further reading

Happy writing!
