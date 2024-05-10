<!--
  - Copyright (c) 2024.
  -->

<script>
  import "agnostic-svelte/css/common.min.css";
  import { Card, Tag } from "agnostic-svelte";

  // export let isMobile;
  export let header;
  export let type;
  export let title;
  export let description;

  export let link;

  export let image;
</script>

<Card isBorder={false} isStacked={false} css="bg-theme-paper py-1 px-3">
  {#if image}
    <div class="grid grid-cols-2">
      <div>
        <img src={image} width="48" />
      </div>
      <div>
        <div class="w-full content-start font-semibold">
          <a href={link}>{title}</a>
        </div>
        <div class="w-full content-start">{description}</div>
      </div>
    </div>
  {:else}
    <div class="">
      <div class="w-full content-start font-semibold">
        {#if type == "blog"}
          <a href="{type}/{link}">{title}</a>
        {:else}
          <a href={link}>{title}</a>
        {/if}
      </div>
      <div class="w-full content-start">{description}</div>
    </div>
  {/if}
</Card>

<style>
  div > a.tag {
    text-decoration: none;
    border: 1px solid var(--theme-border-color);
  }

  div > a.tag:hover {
    color: var(--theme-accent);
    border: 1px solid var(--theme-accent);
  }
</style>
