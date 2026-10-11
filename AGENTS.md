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

- Keep shared website navigation and contact actions in reusable components; content sections use individual TanStack routes for independently shareable pages.
- Keep replaceable content images as real files in src/assets imported from a central content module, never Lovable CDN pointers — the site is also deployed on Vercel, where /__l5e/ asset URLs 404.
