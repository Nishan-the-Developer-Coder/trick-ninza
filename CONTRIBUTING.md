# Contributing to Trick-Ninza

Thanks for helping make math practice more understandable and more fun.

## Before you start

1. Read the relevant source PDF or lesson notes.
2. Keep explanations short, accurate, and student-friendly.
3. Prefer a worked example and a small hint over an unexplained answer.

## Adding a trick

Each trick should include:

- a unique `id`
- a clear `title` and a short `description`
- a MathJax-friendly `formula`
- three or more ordered `steps`
- an estimated `duration`
- a small label that tells the learner what the trick is good for

Check that examples are mathematically correct and that the equation remains readable on a narrow screen.

## Pull requests

- Keep changes focused.
- Do not add personal data, secrets, or credentials.
- Run `pnpm run typecheck` before opening a pull request.
- For UI changes, explain which learner flow changed and how you checked it.

## Commit style

Use short, imperative commit messages such as:

```text
Add complementary-pairs lesson
Improve quiz feedback copy
Document PDF section import
```