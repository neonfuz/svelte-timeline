<script>
 import {minmax} from '$lib/util.js';
 export let width = 500;
 export let height = 250;
 export let data;
 export let axes;
 $: [min, max] = minmax(data.map(point => point[axes.y]));
 $: range = max - min;
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
