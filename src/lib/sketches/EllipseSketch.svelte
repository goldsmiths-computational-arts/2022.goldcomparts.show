<script>
	import P5 from 'p5-svelte';
    import { onMount } from 'svelte';

    let hasMounted = false;
	let circleWidth = 55;
	let circleHeight = 55;
    let width = 400;
    let height = 400;
    onMount(async() => {
        let element = document.getElementById('EllipseSketch');
        width = element.offsetWidth;
        hasMounted = true;

    });

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(width, height);
		};

		p5.draw = () => {
			p5.ellipse(p5.width / 2, p5.height / 2, circleWidth, circleHeight);
		};
	};
</script>

<div id="EllipseSketch" class ="div__EllipseSketchWrapper">
    {#if hasMounted}
        <P5 {sketch} />
    {/if}

    <label>
        Width
        <input type="range" bind:value={circleWidth} min="100" max="1000" step="0.01" />
        {circleWidth}
    </label>
    
    <label>
        Height
        <input type="range" bind:value={circleHeight} min="100" max="1000" step="0.01" />
        {circleHeight}
    </label>
</div>



<style>
	.div__EllipseSketchWrapper {
        width: 100%;
        height: 100%;
        background-color: red;
    }
</style>
