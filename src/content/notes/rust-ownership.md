---
title: "Rust Ownership & Borrowing"
date: "2026-06-18"
tags: ["Rust", "CS"]
description: "The ownership model that makes Rust memory-safe without a GC — moves, borrows, and lifetimes."
---

## The Core Rules

Rust's memory model is built on three rules enforced at compile time:

1. Each value has exactly one **owner**.
2. When the owner goes out of scope, the value is **dropped**.
3. There can be either *one* mutable reference **or** *any number* of immutable references — never both at the same time.

## Move Semantics

```rust
let s1 = String::from("hello");
let s2 = s1; // s1 is moved into s2

println!("{}", s1); // ERROR: value moved
```

`String` is heap-allocated, so assignment moves ownership. For `Copy` types like `i32`, assignment copies the value instead.

## Borrowing

References let you use a value without taking ownership:

```rust
fn length(s: &String) -> usize {
    s.len()
} // s goes out of scope but nothing is dropped — we don't own it

let s = String::from("hello");
let len = length(&s);  // pass a reference
println!("{} has length {}", s, len); // s still valid
```

### Mutable references

```rust
let mut s = String::from("hello");
let r = &mut s;
r.push_str(", world");
```

You can only have one `&mut` reference at a time — this prevents data races at compile time.

## Lifetimes

Lifetimes ensure references don't outlive the data they point to:

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

The `'a` annotation says: the returned reference lives at least as long as the shorter of `x` and `y`. The borrow checker verifies this statically.

## Why This Matters

The compiler proves memory safety **without a garbage collector**:

- No use-after-free
- No double-free  
- No data races
- Zero-cost — all checks happen at compile time, no runtime overhead

The tradeoff: you have to satisfy the borrow checker, which has a learning curve. But once you internalize ownership, you think about resource management more explicitly — a skill that transfers to every language.