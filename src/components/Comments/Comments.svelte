<script>
    import Giscus from '@giscus/svelte';
    export let github_repo;
    export let github_repo_id;
</script>

<Giscus
  id="comments"
  repo={github_repo}
  repoId={github_repo_id}
  category="General"
  categoryId="DIC_kwDOJVt0Ws4CV0HV"
  mapping="pathname"
  term="Welcome to @giscus/react component!"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme="dark_tritanopia"
  lang="en"
  loading="lazy"
/>