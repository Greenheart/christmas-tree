<script lang="ts" context="module">
    const inspirationLinks = [
        {
            link: 'https://lenadesign.org/2021/11/15/css-christmas-tree-animation',
            description: 'Tree & animation by Lena Stanley',
        },
        {
            link: 'https://www.scottbuckley.com.au',
            description: 'Music by Scott Buckley',
        },
        {
            link: 'https://github.com/Greenheart/christmas-tree',
            description: 'Code by Samuel Plumppu',
        },
    ]

    const musicTracks = {
        jul: {
            src: './sb_jul.mp3',
            name: 'Jul - Scott Buckley',
            link: 'https://www.scottbuckley.com.au/library/jul',
        },
        allyefaithful: {
            src: './sb_allyefaithful.mp3',
            name: 'O Come All Ye Faithful - Scott Buckley',
            link: 'https://www.scottbuckley.com.au/library/o-come-all-ye-faithful',
        },
    }
</script>

<script lang="ts">
    import '../global.css'

    let active = false
    let paused = true
    let muted = false
    let track = musicTracks['allyefaithful']
    let audio: HTMLAudioElement

    const toggleTrack = () => {
        audio.pause()
        track =
            track === musicTracks['jul']
                ? musicTracks['allyefaithful']
                : musicTracks['jul']
        audio.load()
        audio.play()
    }
</script>

<audio
    bind:paused
    bind:muted
    bind:this={audio}
    preload="auto"
    on:ended={() => toggleTrack()}
>
    <source src={track.src} />
</audio>

<div
    class="w-full min-h-screen items-center flex flex-col justify-between bg-[#16323d]"
>
    <div class="text-center text-white mt-8">
        <h1 class="font-bold">The Most Sustainable Christmas Tree</h1>
        <p class="text-gray-400 text-xs">
            (No trees were harmed for this production)
        </p>
    </div>
    <div>
        <div
            id="christmas-tree"
            class="hover:transform hover:scale-105 transition-all duration-200"
            on:pointerdown={() => {
                active = !active
                paused = false
            }}
        >
            <div class="tree" class:active>
                <div class="tree-details" />
            </div>
            <div class="lights" class:active>
                <div class="row-one" />
                <div class="row-two" />
            </div>
            <div class="balls" class:active />
            <div class="star" class:active />
            <div class="shadow" class:active />
        </div>
    </div>

    <div class="w-full text-center p-4">
        {#if !paused}
            <div class="flex space-x-4 items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 cursor-pointer hover:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    on:click={toggleTrack}
                >
                    <path
                        d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
                    />
                </svg>
                <a
                    href={track.link}
                    target="_blank"
                    class="text-blue-500 hover:underline">{track.name}</a
                >
            </div>
            <br class="my-12" />
        {/if}
        <div class="text-sm">
            <h2 class="font-bold text-white">Credits:</h2>
            <div class="text-xs flex flex-col">
                {#each inspirationLinks as { link, description } (link)}
                    <a
                        href={link}
                        class="text-blue-500 hover:underline"
                        target="_blank"
                    >
                        {description}
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>

<!--
    snow flakes animation, falling slowly, staying at the ground, then fading out
 -->
<style>
    #christmas-tree {
        position: relative;
        top: 50px;
        cursor: pointer;
    }

    .tree {
        position: absolute;
        width: 25px;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: 55px solid #823723;
        height: 0;
    }

    .tree.active {
        animation: drop 1s linear;
    }

    .tree:before {
        content: '';
        position: absolute;
        background-color: #823723;
        border-radius: 50%;
        width: 25px;
        height: 10px;
        top: 50px;
        left: -5px;
    }

    .tree:after {
        content: '';
        position: absolute;
        border-right: 75px solid transparent;
        border-left: 75px solid transparent;
        border-bottom: 200px solid #107261;
        width: 0;
        height: 0;
        top: -180px;
        left: -65px;
    }

    .tree-details {
        position: absolute;
        width: 150px;
        height: 10px;
        background-color: #107261;
        border-radius: 50%;
        top: 15px;
        left: -65px;
        z-index: 1;
    }

    .tree-details:before {
        content: '';
        position: absolute;
        background-color: #0a897c;
        border-radius: 50%;
        width: 5px;
        height: 5px;
        top: -10px;
        left: 20px;
        box-shadow: 50px -50px #0a897c, 30px -70px #0a897c, 40px -130px #0a897c,
            70px -5px #0a897c, 85px -75px #0a897c;
    }

    .lights {
        position: absolute;
        opacity: 0;
    }
    .lights.active {
        animation: light 2s linear infinite, drop 1s linear 0.5s forwards;
    }

    @keyframes light {
        0% {
            filter: drop-shadow(0 0 2px #fefae0) brightness(1);
        }
        50% {
            filter: drop-shadow(0 0 5px #fefae0) brightness(1.35);
        }
        100% {
            filter: drop-shadow(0 0 2px #fefae0) brightness(1);
        }
    }

    .row-one {
        position: absolute;
        background-color: #e9d8a6;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        top: -120px;
        left: -15px;
        box-shadow: 10px 10px #e9d8a6, 25px 15px #e9d8a6, 40px 18px #e9d8a6,
            54px 15px #e9d8a6;
    }

    .row-two {
        position: absolute;
        background-color: #e9d8a6;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        left: -42px;
        top: -45px;
        box-shadow: 10px 10px #e9d8a6, 25px 17px #e9d8a6, 40px 24px #e9d8a6,
            55px 28px #e9d8a6, 70px 30px #e9d8a6, 85px 29px #e9d8a6,
            100px 25px #e9d8a6, 112px 20px #e9d8a6;
    }

    .balls {
        position: absolute;
        background-color: #f34653;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        z-index: 2;
        opacity: 0;
        box-shadow: -20px -55px #f34653, 25px -70px #f34653;
    }

    .balls.active {
        animation: drop 1s linear 1s forwards;
    }

    .balls:before {
        content: '';
        position: absolute;
        background-color: #f34653;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        left: -40px;
        top: -10px;
        box-shadow: 100px 10px #f34653, 25px -80px #f34653, 60px -120px #f34653;
    }

    .balls:after {
        content: '';
        position: absolute;
        background-color: #94d2bd;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: -40px;
        left: 40px;
        box-shadow: -35px -35px #94d2bd, -35px -105px #94d2bd,
            -60px 45px #94d2bd;
    }

    .star {
        position: absolute;
        display: block;
        width: 0px;
        height: 0px;
        border-right: 25px solid transparent;
        border-bottom: 17.5px solid #f9c819;
        border-left: 25px solid transparent;
        transform: rotate(-35deg);
        top: -190px;
        left: -9px;
        opacity: 0;
    }
    .star.active {
        animation: dropStar 1s linear 1.5s forwards;
    }

    .star:before {
        border-bottom: 20px solid #f9c819;
        border-left: 7.5px solid transparent;
        border-right: 7.5px solid transparent;
        position: absolute;
        height: 0;
        width: 0;
        top: -12.5px;
        left: -17.5px;
        display: block;
        content: '';
        transform: rotate(-35deg);
    }

    .star:after {
        position: absolute;
        display: block;
        top: 0.75px;
        left: -26.25px;
        width: 0px;
        height: 0px;
        border-right: 25px solid transparent;
        border-bottom: 17.5px solid #f9c819;
        border-left: 25px solid transparent;
        transform: rotate(-70deg);
        content: '';
    }

    .shadow {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.7);
        width: 50px;
        height: 20px;
        z-index: -1;
        top: 50px;
        left: -10px;
        animation: scale 0.5s linear forwards;
    }

    @keyframes scale {
        0% {
            transform: scaleX(1);
        }
        100% {
            transform: scaleX(3);
        }
    }

    @keyframes drop {
        0% {
            transform: translateY(-470px) scaleY(0.9);
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        50% {
            transform: translateY(0px) scaleY(1);
            opacity: 1;
        }
        65% {
            transform: translateY(-15px) scaleY(0.9);
            opacity: 1;
        }
        75% {
            transform: translateY(-18px) scaleY(0.9);
            opacity: 1;
        }
        100% {
            transform: translateY(0px) scaleY(1);
            opacity: 1;
        }
    }

    @keyframes dropStar {
        0% {
            transform: translateY(-470px) scaleY(0.9) rotate(-35deg);
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        50% {
            transform: translateY(0px) scaleY(1) rotate(-35deg);
            opacity: 1;
        }
        65% {
            transform: translateY(-15px) scaleY(0.9) rotate(-35deg);
            opacity: 1;
        }
        75% {
            transform: translateY(-18px) scaleY(0.9) rotate(-35deg);
            opacity: 1;
        }
        100% {
            transform: translateY(0px) scaleY(1) rotate(-35deg);
            opacity: 1;
        }
        100% {
            transform: translateY(0px) scaleY(1) rotate(-35deg);
            opacity: 1;
        }
    }
</style>
