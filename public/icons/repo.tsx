type repoProps = {
    width?: number
    color?: string
}

export const Repo = ({ width, color }: repoProps) => {
    return (
        <svg width={width ?? "24"} height={width ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6_16205)">
                <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z" fill={color ?? "#323232"} />
            </g>
        </svg>
    )
}