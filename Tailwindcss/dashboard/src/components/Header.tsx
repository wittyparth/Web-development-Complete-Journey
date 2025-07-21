import profilePic from "../assets/profile pic placeholder.png"
// import profilePic from "../assets/profile pic angry birds.png"
const Header = () => {
    return (
        <div className="w-full flex items-center justify-between px-[3rem] py-[1.5rem]">
            <h1 className="text-3xl tracking-wide font-semibold">Overview</h1>
            <div className="flex justify-between items-center gap-4">
                <p className="text-[16px]">Live</p>
                <p className="text-[16px]">Explore</p>
                <div className="flex items-center bg-input rounded-[5px] p-2 gap-1 min-w-[300px] text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-icon-nav">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" name="" id="" placeholder="Search title,id" />
                </div>
                <div className="p-2 rounded-md border-1 border-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-icon-nav">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>
                <div className="rounded-full border-1 border-primary cursor-pointer">
                    <img src={profilePic} alt="profile-pic" className="size-[34px]" />
                </div>
            </div>
        </div>
    )
}

export default Header