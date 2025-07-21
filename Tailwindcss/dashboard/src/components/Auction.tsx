import bitcon from "../assets/bitcoin-btc-logo.svg"
import eth from "../assets/ethereum-eth-logo.svg"
import dog from "../assets/dogecoin-doge-logo.svg"
import x from "../assets/xrp-xrp-logo.svg"
import solana from "../assets/solana-sol-logo.svg"
import Card from "./Card"

const Auction = () => {
    const data = [
        {
            img: "https://pbs.twimg.com/profile_images/1874825945036554240/uTagA2uY_400x400.jpg",
            time: "12: 34",
            name: "Skoolio #223",
            bid: "8,1",
            color: "-status-active",
            tag: "Active"

        },
        {
            img: "https://media.voguebusiness.com/photos/64f0b56d6c7cee9bb021b36e/master/w_1600%2Cc_limit/adidas-incubator-news-voguebus-aug31-inline-1.jpg",
            time: "10 : 32",
            name: "Vogue #123",
            bid: "12",
            color: "-status-active",
            tag: "Ending soon"
        },
        {
            img: "https://static01.nyt.com/images/2021/03/11/arts/11nft-explain-1/merlin_184196631_939fb22d-b909-4205-99d9-b464fb961d32-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            time: "14 : 32",
            name: "Astronaut #908",
            bid: "12,4",
            color: "-status-active",
            tag: "Active"
        },
        {
            img: "https://thepowerhouse.group/wp-content/uploads/2021/06/NFTs-Creative-Industries-1200x675.png",
            time: "23 : 23",
            name: "Angelina #876",
            bid: "9,2",
            color: "-status-active",
            tag: "Active"
        },
        {
            img: "https://www.atera.com/app/uploads/2022/07/how-to-communicate-MSP-768x323.jpg",
            time: "14 : 16",
            name: "MSP #227",
            bid: "7,2",
            color: "-status-active",
            tag: "Active"
        },
        {
            img: "https://framerusercontent.com/images/sAJriJUMjkMNmnhfDE2BlTaP2w.jpg",
            time: "11 : 10",
            name: "Shadowis #142",
            bid: "7,2",
            color: "-status-active",
            tag: "Active"
        },
    ]
    return (
        <div className="">
            <div className="flex items-center py-3 justify-between">
                <h2 className='text-2xl'>Live Auctions</h2>
                <div className='flex gap-2 items-center'>
                    <p className='text-shadow-neutral-700'>Sort : </p>
                    <img src={bitcon} alt="bitcoin" className="size-[2rem] rounded-full border-2 border-primary" />
                    <img src={eth} alt="bitcoin" className="size-[2rem] rounded-full border-1 border-gray-400" />
                    <img src={solana} alt="bitcoin" className="size-[2rem] rounded-full border-1 border-gray-400" />
                    <img src={x} alt="bitcoin" className="size-[2rem] rounded-full border-1 border-gray-400" />
                    <img src={dog} alt="bitcoin" className="size-[2rem] rounded-full border-1 border-gray-400" />
                </div>
            </div>
            <div className="py-[2rem]">
                <div className="flex gap-6 items-center">
                    {
                        data.map((item) => (
                            <Card
                                img={item.img}
                                time={item.time}
                                name={item.name}
                                bid={item.bid}
                                color={item.color}
                                tag={item.tag}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Auction