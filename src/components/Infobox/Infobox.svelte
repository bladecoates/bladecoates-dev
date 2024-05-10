<!--
  - Copyright (c) 2024.
  -->

<script>
  import "agnostic-svelte/css/common.min.css";
  import { Card, Tag } from "agnostic-svelte";

  export let isMobile;
  export let date;
  export let tags;
</script>

{#if isMobile}
  <details class="infobox-mobile-container pb-2">
    <summary class="infobox-mobile-header pt-2">
      <div class="infobox-mobile-header-content">
        <div class="infobox-toggle">
          <h2 class="heading" id="metadata">Post Details</h2>
          <span class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 1 16 16"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
              />
            </svg>
          </span>
        </div>
      </div>
    </summary>

    <Card
      isBorder={true}
      isStacked={true}
      css="bg-theme-paper py-1 px-3 rounded-lg border-1"
    >
      <div class="">Metadata</div>
      <div class="w-full">
        <Card css="">
          <div
            class="grid w-full grid-cols-2 content-center items-stretch gap-2"
          >
            <div class="">Author</div>
            <div class="flex-grow-1 flex-shrink-1 flex justify-end">
              <a href="/about#self">Blade Coates</a>
            </div>
          </div>
        </Card>
        <Card css="">
          <div
            class="grid w-full grid-cols-2 content-center items-stretch gap-2"
          >
            <div class="">Published</div>
            <div class="flex-grow-1 flex-shrink-1 flex justify-end">
              <time class="" datetime={date.toISOString()}
                >{date.toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}</time
              >
            </div>
          </div>
        </Card>
        <Card css="">
          <div
            class="grid w-full grid-cols-2 content-center items-stretch gap-2"
          >
            <div class="">Updated</div>
            <div class="flex-grow-1 flex-shrink-1 flex justify-end">
              <time class="" datetime={date.toISOString()}
                >{date.toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}</time
              >
            </div>
          </div>
        </Card>
        <Card css="">
          <div
            class="grid w-full grid-cols-2 content-center items-stretch gap-2"
          >
            <div class="">Tags</div>
            <div
              class="flex-grow-1 flex-shrink-1 flex justify-end gap-2"

            >
              {#each tags as tag, index}
                <a href="/" class="tag"><Tag>{tag}</Tag></a>
              {/each}
            </div>
          </div>
        </Card>
      </div>
    </Card>
  </details>
{:else}
  <Card isBorder={false} isStacked={true} css="bg-theme-paper py-1 px-3">
    <!--<div class="">Metadata</div>-->
    <div class="w-full">
      <Card css="">
        <div class="grid w-full grid-cols-4 content-center items-stretch gap-2">
          <div class="">Author</div>
          <div class="flex-grow-1 flex-shrink-1 flex justify-end">
            <a href="/about#self">Blade Coates</a>
          </div>
          <div class="">Published</div>
          <div class="flex-grow-1 flex-shrink-1 flex justify-end">
            <time class="" datetime={date.toISOString()}
              >{date.toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}</time
            >
          </div>
        </div>
      </Card>
      <Card css="">
        <div class="grid w-full grid-cols-4 content-center items-stretch gap-2">
          <div class="">Updated</div>
          <div class="flex-grow-1 flex-shrink-1 flex justify-end">
            <time class="" datetime={date.toISOString()}
              >{date.toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}</time
            >
          </div>
          <div class="">Tags</div>
          <div
            class="flex-grow-1 flex-shrink-1 flex justify-end gap-2"

          >
            {#each tags as tag, index}
              <a href="/" class="tag"><Tag>{tag}</Tag></a>
            {/each}
          </div>
        </div>
      </Card>
    </div>
  </Card>
{/if}

<style>
  div > a.tag {
    text-decoration: none;
    border: 1px solid var(--theme-border-color);
  }

  div > a.tag:hover {
    color: var(--theme-accent);
    border: 1px solid var(--theme-accent);
  }

  /* The mobile container is a <details> element wrapping the mobile TOC */
  .infobox-mobile-container > .infobox-mobile-header::marker,
  .infobox-mobile-container > .infobox-mobile-header::-webkit-details-marker {
    display: none;
  }

  .infobox-mobile-container[open] > .infobox-mobile-header svg {
    transform: rotate(90deg);
  }

  /* .infobox-mobile-container {
    --header-bottom-padding: 1.5rem;
  } */

  @media (min-width: 50em) {
    /* Improve toggle & title alignment with left sidebar */
    .infobox-mobile-container {
      --header-bottom-padding: 0.5rem;
    }
  }

  /*
	The mobile header is the clickable <summary> heading.

	It has a opaque background and covers the entire viewport width
	to ensure that page content scrolling underneath is hidden.
*/
  .infobox-mobile-header {
    display: block;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: var(--theme-bg-gradient-top);
    -webkit-tap-highlight-color: transparent;
  }

  .infobox-mobile-header-content {
    display: flex;
    align-items: center;
    height: var(--theme-mobile-infobox-height);
    max-width: 80ch;
    margin-inline: auto;
    padding-bottom: var(--header-bottom-padding);
    padding-inline: var(--min-spacing-inline);
  }

  .infobox-toggle {
    margin-inline-end: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--theme-border-color);
    padding: 0.25rem 0.75rem;
    padding-inline-end: 0.5rem;
    font-size: var(--theme-text-sm);
  }

  .infobox-toggle svg {
    margin-inline-start: 0.25rem;
  }

  .infobox-mobile-container[open] .infobox-toggle {
    background-color: var(--theme-bg-offset);
  }

  .infobox-mobile-header h2 {
    margin: 0;
    display: inline;
  }

  .infobox-mobile-header span {
    margin-inline-start: 0.2rem;
  }

  .infobox-mobile-header svg {
    transform: rotate(0);
    transition: 0.15s transform ease;
    vertical-align: middle;
    fill: var(--theme-accent-secondary);
    stroke: var(--theme-accent-secondary);
  }

  @media (forced-colors: active) {
    .infobox-mobile-header svg {
      fill: Highlight;
      stroke: Highlight;
    }
  }

  .infobox-mobile-container .header-link a {
    /* Add block padding to mobile header links to increase tap zones */
    padding-block: 0.3125rem;
  }
</style>
