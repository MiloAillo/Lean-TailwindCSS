function Navbar() {
    return <div className="h-[60px] w-full bg-primary rounded-2xl py-[10px] px-[20px] flex flex-row justify-between">
        <img src="./sleeping.png" alt="Logo" className="h-full w-auto" />
        <button className="w-[130px] h-full bg-white rounded-2xl border-3 border-[#393939]">
            <p className="font-display font-semibold text-[1.10rem] text-[#393939]">Sleep now</p>
        </button>
    </div>
}

export default Navbar