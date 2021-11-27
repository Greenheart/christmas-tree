import { get, writable } from 'svelte/store'

import { Howl } from 'howler/src/howler.core.js'
import type { Howl as HowlType } from 'howler'

export interface Track {
    src: string
    name: string
    link: string
    howl?: HowlType
}

export const paused = writable(true)

export const playlist = writable<Track[]>([
    {
        src: './sb_allyefaithful.mp3',
        name: 'O Come All Ye Faithful - Scott Buckley',
        link: 'https://www.scottbuckley.com.au/library/o-come-all-ye-faithful',
    },
    {
        src: './sb_jul.mp3',
        name: 'Jul - Scott Buckley',
        link: 'https://www.scottbuckley.com.au/library/jul',
    },
])

export const currentIndex = writable<number>(0)

export const play = (index?: number) => {
    let sound: Howl
    index = Number.isInteger(index) ? index : get(currentIndex)

    const track = get(playlist)[index]

    if (track.howl) {
        sound = track.howl
    } else {
        sound = track.howl = new Howl({
            src: [track.src],
            html5: true,
            onend() {
                skip('next')
            },
        })
    }

    sound.play()

    currentIndex.set(index)
    paused.set(false)
}

export const pause = () => {
    const sound = get(playlist)[get(currentIndex)].howl
    sound.pause()
    paused.set(true)
}

export const skip = (direction: 'next' | 'prev') => {
    let index = 0
    if (direction === 'prev') {
        index = get(currentIndex) - 1
        if (index < 0) {
            index = get(playlist).length - 1
        }
    } else {
        index = get(currentIndex) + 1
        if (index >= get(playlist).length) {
            index = 0
        }
    }

    skipTo(index)
}

export const skipTo = (index: number) => {
    if (get(playlist)[get(currentIndex)].howl) {
        get(playlist)[get(currentIndex)].howl.stop()
    }

    play(index)
}
