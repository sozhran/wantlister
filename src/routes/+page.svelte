<script lang="ts">
    import {} from '$env/';
    const getDiscogsInfo = async () => {
        try {
            const response = await fetch('https://api.discogs.com/users/sozhran/collection/folders/0/releases?token='{CONSUMER_KEY}')
        }
    }
</script>


<svelte:head>
    <title>Verlanglijst</title>
    <meta name="description" content="Verlanglijst" />
</svelte:head>

<section class="top">
    <h1><b>Discogs Verlanglijstje</b></h1>
    <p><i>Werk in uitvoering</i></p>
</section>

<section class="footer">
    <a href="https:/github.com/sozhran/wantlister" target="_blank">
        <img
            alt="github share icon"
            src="https://i.imgur.com/5Qr1cEC.png"
            width="25"
            height="25"
        />
    </a>
</section>

<style>
    :global(body) {
        background-color: grey;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100px;
        position: relative;
    }

    .footer {
        display: flex;
        justify-content: center;
        height: 60px;
    }
</style>


