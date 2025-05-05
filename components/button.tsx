import Link from "next/link";

export default function Button(props: any) {
    return (
        <div className="flex">
            <Link href={props.href ? props.href : "#"} target="_blank">
                <div
                    className={`${props.className} bg-[#000000]  p-[8px] flex `}
                >
                    <div className="flex justify-center items-center space-x-[10px]">
                        <p className="text-white">{props.text}</p>
                        <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_37_221)">
                                <rect
                                    width="14.2727"
                                    height="18"
                                    transform="translate(0.806885)"
                                    fill="black"
                                />
                                <path
                                    d="M14.7801 9.79448C15.1784 9.35503 15.1784 8.64136 14.7801 8.2019L9.68274 2.5769C9.2845 2.13745 8.63777 2.13745 8.23953 2.5769C7.8413 3.01636 7.8413 3.73003 8.23953 4.16948L11.6006 7.87495H1.82637C1.26247 7.87495 0.806885 8.37769 0.806885 8.99995C0.806885 9.62222 1.26247 10.125 1.82637 10.125H11.5974L8.24272 13.8304C7.84449 14.2699 7.84449 14.9835 8.24272 15.423C8.64095 15.8625 9.28769 15.8625 9.68592 15.423L14.7833 9.798L14.7801 9.79448Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_37_221">
                                    <rect
                                        width="14.2727"
                                        height="18"
                                        fill="white"
                                        transform="translate(0.806885)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </Link>
        </div>
    );
}
