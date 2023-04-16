<script>
	import "agnostic-svelte/css/common.min.css";
	import { Card, Tag } from "agnostic-svelte";

	// export let isMobile;
	export let title;
	export let slug;
	export let description;
	export let date;
	export let tags;
</script>

<Card isBorder={false} isStacked={true} css="bg-theme-paper py-1 px-3">
	<div class="w-full content-start font-semibold">
		<a href={slug}>{title}</a>
	</div>
	<div class="w-full content-start">{description}</div>
	<div class="w-full">
		<Card css="">
			<div class="flex w-full grid-cols-4 content-center items-stretch gap-2">
				<div class="shrink grow-0">
					Author: <a href="/about#self">Blade Coates</a>
				</div>
				<div class="flex shrink-0 grow justify-end">
					Date:&nbsp;<time class="" datetime={date.toISOString()}
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
			<div class="grid w-full grid-cols-2 content-center items-stretch gap-2">
				<div class="shrink grow-0">Tags</div>
				<div class="flex shrink-0 grow justify-end gap-2" style="">
					{#each tags as tag, index}
		                <a href="/" class="tag"><Tag>{tag}</Tag></a>
					{/each}
				</div>
			</div>
		</Card>
	</div>
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