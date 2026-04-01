## Purpose
Defines the list of preapproved hosts for which the WebFetch tool can be used without explicit user permission per request.

## Imports
- None

## Logic
Exports:
- `PREAPPROVED_HOSTS` - a Set of strings containing hostnames and hostname/path entries. Covers:
  - Anthropic domains
  - Language docs (Python, C++, Java, C#, JavaScript, Go, PHP, Swift, Kotlin, Ruby, Rust, TypeScript)
  - Web frameworks (React, Angular, Vue, Next.js, Express, Node, Bun, jQuery, Bootstrap, Tailwind, D3, Three, Redux, Webpack, Jest, React Router)
  - Python libs (Django, Flask, FastAPI, Pandas, NumPy, TensorFlow, PyTorch, scikit-learn, Matplotlib, Requests, Jupyter)
  - PHP frameworks (Laravel, Symfony, WordPress)
  - Java (Spring, Hibernate, Tomcat, Gradle, Maven)
  - .NET (ASP.NET, .NET, NuGet, Blazor)
  - Mobile (React Native, Flutter, iOS/macOS, Android)
  - Data Science (Keras, Spark, Hugging Face, Kaggle)
  - Databases (MongoDB, Redis, PostgreSQL, MySQL, SQLite, GraphQL, Prisma)
  - Cloud/DevOps (AWS, GCP, Azure, Kubernetes, Docker, Terraform, Ansible, Vercel, Netlify, Heroku)
  - Testing (Cypress, Selenium)
  - Game engines (Unity, Unreal)
  - Tools (Git, Nginx, Apache)
- `isPreapprovedHost(hostname, pathname)`: function that checks HOSTNAME_ONLY set and PATH_PREFIXES map. Path matching enforces segment boundaries to avoid prefix collisions.

The split into HOSTNAME_ONLY and PATH_PREFIXES is computed once at module load for O(1) lookups.

SECURITY NOTE: Preapproval applies only to WebFetch (GET). Sandbox network restrictions are separate and do NOT inherit this list.

## Exports
- `PREAPPROVED_HOSTS` (Set<string>)
- `isPreapprovedHost(hostname, pathname)` (function)
