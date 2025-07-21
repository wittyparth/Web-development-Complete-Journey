import { useState } from "react"
import Auction from "./Auction";

const Main = () => {
    const tabs = ["Activity", "Collections", "Creations", "Owned", "Auctions", "Listings", "Bookmarks", ""]
    const [activeTab, setActiveTab] = useState("Activity");
    return (
        <div className="px-[3rem]">
            <div className="border-b border-border">
                <div className="flex gap-[2rem] items-center text-[16px]">
                    {
                        tabs.map((tab) => {
                            return (<div className="h-10 flex flex-col justify-between">
                                <p
                                    className={`${activeTab === tab ? " text-white rounded-xs" : ""} cursor-pointer text-gray-600`}
                                    onClick={() => setActiveTab(tab)}
                                >{tab}</p>
                                {tab === activeTab && <div className="h-1 rounded-md bg-primary"></div>}
                            </div>)

                        })
                    }
                </div>
            </div>
            <Auction />
        </div>
    )
}

export default Main