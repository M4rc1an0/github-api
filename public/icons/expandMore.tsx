type expandMoreProps = {
    width?: number
    color?: string
}

export const ExpandMore = ({ width, color }: expandMoreProps) => {
    return (
        <svg width={width ?? "24"} height={width ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6_13444)">
                <path d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z" fill={color ?? "#323232"} />
            </g>
            <defs>
                <clipPath id="clip0_6_13444">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}