export declare interface HeroComponentProps {
    data: HeroSectionDto
}

export declare interface HeroSectionDto {
    image: ImageOptions
    title: string
    subTitle?: string
    description?: string
    cta?: HeroCTA
    [k:string]:any // additional features you may prefer to have in the object
}


export declare interface HeroCTA {
    label: string
    url: string
}

export declare interface ImageOptions {
    type: "image" | "video"|"animation"|"carousel"
    src?: string
    alt?: string
    style?: string
    imageOrder: "order-first" | "order-last"
    animation?: any
    carousel?: any
    [k:string]:any
}

export interface EventFormDto {
    email: string,
    message: string,
    
}