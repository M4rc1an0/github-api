
type searchProps = {
    width?: number
    color?: string
}

export const Search = ({ width, color }: searchProps) => {
    return (
        <svg width={width ?? "24"} height={width ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L15 15M17 10C17 11.3845 16.5895 12.7378 15.8203 13.889C15.0511 15.0401 13.9579 15.9373 12.6788 16.4672C11.3997 16.997 9.99224 17.1356 8.63437 16.8655C7.2765 16.5954 6.02922 15.9287 5.05026 14.9497C4.07129 13.9708 3.4046 12.7235 3.13451 11.3656C2.86441 10.0078 3.00303 8.6003 3.53285 7.32122C4.06266 6.04213 4.95987 4.94888 6.11101 4.17971C7.26216 3.41054 8.61553 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10V10Z" stroke={color ?? "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.5 20.5L17 17" stroke={color ?? "white"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


    )
}