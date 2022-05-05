<script>
 import Timeline from '$lib/Timeline.svelte';
 import Controls from '$lib/Controls.svelte';
 const data = [
     { year: 2002, fact: 'foo' },
     { year: 2010, fact: 'bar' },
     { year: 2036, fact: 'baz' },
 ];
 const axes = {
     y: 'year'
 };
</script>

<Timeline {data} {axes} />
<Controls />
