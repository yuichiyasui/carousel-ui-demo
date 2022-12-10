import { ImgHTMLAttributes } from "react"

type Props = Required<Pick<ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height' | 'alt' | 'src'>>& Pick<ImgHTMLAttributes<HTMLImageElement>, 'className'>

export const Image = (props: Props) => {
    return <img {...props} loading="lazy" />
}