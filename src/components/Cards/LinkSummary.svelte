<script>
	import "agnostic-svelte/css/common.min.css";
	import { Card, Tag } from "agnostic-svelte";

	// export let isMobile;

	export let link;
    export let title;
    export let summary;
</script>
<Card>
		<div>
			<ul id="arround-web-links" class="list-none">
				<li>
					<details>
						<summary><a href={link}>{title}</a></summary>
						{summary}
					</details>
				</li>
			</ul>
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
