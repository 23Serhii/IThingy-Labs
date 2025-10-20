// src/types/dom.d.ts
export {}

declare global {
    interface HTMLVideoElement {
        controlsList?: string
        disablePictureInPicture?: boolean
    }
}
