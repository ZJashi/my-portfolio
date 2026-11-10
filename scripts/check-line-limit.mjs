import { execFileSync } from "node:child_process";
import { readFileSync, statSync, existsSync } from "node:fs";

const limit = 200;
const generated = new Set(["package-lock.json", "next-env.d.ts"]);
const textExtension =
  /\.(?:[cm]?[jt]sx?|css|scss|json|md|mdx|ya?ml|html|svg|toml|txt)$/i;
const files = execFileSync(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
  { encoding: "utf8" },
)
  .split("\0")
  .filter(Boolean);
const violations = [];

for (const file of new Set(files)) {
  if (generated.has(file) || !existsSync(file) || !statSync(file).isFile())
    continue;
  if (!textExtension.test(file) && !file.startsWith(".prettier")) continue;
  const content = readFileSync(file, "utf8");
  // A final newline terminates the last line; it does not add a blank line.
  const count =
    content === "" ? 0 : content.replace(/\r?\n$/, "").split(/\r?\n/).length;
  if (count > limit)
    violations.push(`${file}: ${count} lines (maximum ${limit})`);
}

if (violations.length) {
  console.error(violations.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`All hand-maintained text files are within ${limit} lines.`);
}
