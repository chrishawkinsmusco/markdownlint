export { resolveModule } from "./resolve-module.cjs";
export type Configuration = import("./markdownlint.mjs").Configuration;
export type ConfigurationParser = import("./markdownlint.mjs").ConfigurationParser;
export type ConfigurationStrict = import("./markdownlint.mjs").ConfigurationStrict;
export type FixInfo = import("./markdownlint.mjs").FixInfo;
export type LintCallback = import("./markdownlint.mjs").LintCallback;
export type LintContentCallback = import("./markdownlint.mjs").LintContentCallback;
export type LintError = import("./markdownlint.mjs").LintError;
export type LintResults = import("./markdownlint.mjs").LintResults;
export type MarkdownItFactory = import("./markdownlint.mjs").MarkdownItFactory;
export type MarkdownItToken = import("./markdownlint.mjs").MarkdownItToken;
export type MarkdownParsers = import("./markdownlint.mjs").MarkdownParsers;
export type MicromarkToken = import("./markdownlint.mjs").MicromarkToken;
export type MicromarkTokenType = import("./markdownlint.mjs").MicromarkTokenType;
export type Options = import("./markdownlint.mjs").Options;
export type ParserMarkdownIt = import("./markdownlint.mjs").ParserMarkdownIt;
export type ParserMicromark = import("./markdownlint.mjs").ParserMicromark;
export type Plugin = import("./markdownlint.mjs").Plugin;
export type ReadConfigCallback = import("./markdownlint.mjs").ReadConfigCallback;
export type ResolveConfigExtendsCallback = import("./markdownlint.mjs").ResolveConfigExtendsCallback;
export type Rule = import("./markdownlint.mjs").Rule;
export type RuleConfiguration = import("./markdownlint.mjs").RuleConfiguration;
export type RuleFunction = import("./markdownlint.mjs").RuleFunction;
export type RuleOnError = import("./markdownlint.mjs").RuleOnError;
export type RuleOnErrorFixInfo = import("./markdownlint.mjs").RuleOnErrorFixInfo;
export type RuleOnErrorFixInfoNormalized = import("./markdownlint.mjs").RuleOnErrorFixInfoNormalized;
export type RuleOnErrorInfo = import("./markdownlint.mjs").RuleOnErrorInfo;
export type RuleParams = import("./markdownlint.mjs").RuleParams;
export type ToStringCallback = import("./markdownlint.mjs").ToStringCallback;
export { applyFix, applyFixes, getVersion } from "./markdownlint.mjs";
