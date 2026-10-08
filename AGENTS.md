<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the template's TanStack file routing and Vite bootstrap; platform routing is required, while feature UI uses only React and Tailwind with no third-party UI imports.
- Centralize demo data and mutable storefront/admin state in a React provider; no backend, database, remote authentication, payment processing, or browser persistence is used.
- Bundle generated and cropped image assets through ES module imports so deployment rewrites their URLs safely.
- Build reusable native React controls and SVG icons in the project instead of third-party UI libraries.
