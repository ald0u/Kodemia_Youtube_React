const NavBar = () => {
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3">
            <div className="flex flex-row items-center gap-1 pl-4">
                <span>LOGO</span>
            </div>
            <div className="flex justify-center items-center">
                <input
                    className="w-full px-4 p-2 border border-[#282828] rounded-2xl bg-transparent"
                    type="text"
                    placeholder="Search" />
            </div>
            <div className="flex justify-end">
                <img
                    className="w-8 h-8 rounded-full"
                    src="https://api.dicebear.com/8.x/notionists/svg?seed=Bear"
                    alt="user"
                />
            </div>
        </nav>
    )
}

export default NavBar;