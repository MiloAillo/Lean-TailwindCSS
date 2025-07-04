function Content1() {
    return <div>
        <div className="w-full h-90 bg-amber-200 flex flex-row justify-center items-center gap-5">
            <div className="flex-1 flex justify-end align-middle bg-amber-600">
                <img src="./sleeping.png" alt="" className="h-60 w-auto"/>
            </div>
            <div className="flex flex-col gap-10 flex-1 bg-amber-900 max-w-[300px]">
                <div>
                    <h1>CHASE YOUR DREAMS <br />GO TO SLEEP</h1>
                    <p>According to a data i just pulled out of my ass this morning, slowly letting yourself drift away makes life easier</p>
                </div>
                <div>
                    <p>So, what are you waiting for?</p>
                    <div>
                        <button>Sleep</button>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Content1