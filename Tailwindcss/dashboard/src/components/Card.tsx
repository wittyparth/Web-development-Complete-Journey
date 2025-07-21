interface cardProps {
    img: string,
    time: string,
    name: string,
    bid: string,
    color: string,
    tag: string
}

const Card = ({ img, time, name, bid, color, tag }: cardProps) => {
    return (
        <div className="rounded-lg text-white text-[14px] cursor-pointer">
            <div className="relative w-[175px] h-[220px] bg-center bg-cover bg-no-repeat rounded-t-md https://thepowerhouse.group/wp-content/uploads/2021/06/NFTs-Creative-Industries-1200x675.pngs"
                style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute bottom-2 left-2 bg-black opacity-80 rounded-md p-2 w-fit  text-xs">
                    {time} Left 🔥
                </div>
            </div>
            <div className="bg-card p-3 text-gray-400 rounded-b-md">
                <p className="mb-2 text-blue-500">{name}</p>
                <div className="flex items-center justify-between">
                    <p>Your bid</p>
                    <p className="text-white text-[12px]">{bid} ETH</p>
                </div>
            </div>
        </div>
    )
}

export default Card