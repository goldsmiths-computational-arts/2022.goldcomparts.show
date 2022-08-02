<script context="module">
    import { page } from '$app/stores';
import Header from '../../lib/header/Header.svelte';
import About from '../about.svelte';
import ArtWorks from '../artworks.svelte';

    let images = [1,2,3,4];
</script>

<div class="header-img">
    <img src="/img/1.png" alt="img-description">
</div>

<style>
    .header-img {
        width: 100%;
        height: auto;
        display: block;
        position: relative;
    }
</style>


{$page.params.slug}