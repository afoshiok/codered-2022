<script>
  import "../app.postcss";
  import "flowbite/dist/flowbite.css";
  import Nav from "$lib/Nav.svelte";
  import Foot from "$lib/Foot.svelte";
</script>

<!-- Navbar -->

<Nav/>
<slot />
<Foot/>
