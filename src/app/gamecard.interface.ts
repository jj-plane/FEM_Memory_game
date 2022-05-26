export interface Gamecard {
    imageId: string,
    state: 'default' | 'flipped' | 'matched',
    num: number
}
