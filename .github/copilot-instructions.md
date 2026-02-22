# Copilot Instructions for Niothor

## Repository Overview
Niothor is a GitHub profile repository. This is currently a minimal codebase with foundational files only.

## Development Guidelines

### Repository Structure
- Root contains only essential files (README.md, LICENSE, .gitignore)
- Future code will follow feature-based organization with clear separation of concerns
- Configuration files (package.json, pyproject.toml, etc.) will be at the root when added

### AI Agent Conventions
When working in this repository, agents should:

1. **Confirm Project Direction First**: Before implementing features, verify the intended architecture and purpose with available documentation
2. **Update README as You Go**: Keep README.md current with setup instructions, architecture overview, and contribution guidelines
3. **Document Patterns Early**: As code emerges, document conventions in this file to maintain consistency
4. **Test-First Mindset**: Write tests alongside implementation; establish test patterns early
5. **Explicit Over Implicit**: Code style should prefer clarity—include comments explaining "why" for non-obvious decisions

### Version Control Practices
- Use descriptive commit messages following conventional commits pattern (feat:, fix:, docs:, etc.)
- Keep commits atomic and focused on single concerns
- Reference GitHub issues in commit messages when applicable

### Future Architecture Considerations
When implementing new features, consider:
- What are the core responsibilities of each module?
- How do components communicate?
- Where are clear boundaries between services/features?
- Document these decisions in code comments and update this file

---

**Last Updated**: February 2026  
**Status**: Baseline instructions for minimal codebase - expand as project develops
