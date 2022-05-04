<script>
 export let data;
 export let axes;
 $: min = data.reduce((curr, next) => (
     (next[axes.y] < curr) ? next[axes.y] : curr
 ), Infinity);
 $: max = data.reduce((curr, next) => (
     (next[axes.y] > curr) ? next[axes.y] : curr
 ), -Infinity);
 $: range = max - min;
 const width = 500;
 const height = 250;
</script>

<svg viewBox="0 0 {width} {height}">
    <path d="M {width/2} 0 {width/2} {height}" />
    {#each data as point}
        <text
            x="{10+width/2}"
            y="{10+(width/2-10)*(point[axes.y]-min)/range}"
        >- {point[axes.y]}</text>
    {/each}
</svg>

<style>
 path {
     stroke: #ddd;
 }
 text {
     font-size: 10px;
     color: #888;
 }
</style>
