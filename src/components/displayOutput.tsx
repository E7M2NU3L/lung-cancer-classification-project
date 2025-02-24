import { useState } from "react";
import {twMerge} from 'tailwind-merge';
import CancerCheck from "./cancer-check";
import NumCancerCheck from "./num-cancer-check";
import CovidCheck from "./covid-check";

const Outputs = () => {
    const [selected, setSelected] = useState<string>("cancer");
    return (
        <main className="my-12">
            <main className=" px-4 md:px-0 flex flex-row items-center min-h-[5vh] gap-1">
                <main className={twMerge("bg-slate-100 hover:scale-105 transition-all duration-200 ease-in-out hover:bg-slate-200 cursor-pointer px-4 py-1 active:translate-y-1 text-sm text-slate-800 border h-full border-slate-300", selected ===  "cancer" && "border-2 border-green-500 hover:bg-green-600/30 bg-green-600/20 text-green-600")} onClick={() => setSelected("cancer")}>Cancer [CT]</main>

                <main className={twMerge("bg-slate-100 hover:scale-105 transition-all duration-200 ease-in-out hover:bg-slate-200 cursor-pointer px-4 py-1 active:translate-y-1 text-sm text-slate-800 border h-full border-slate-300", selected ===  "cancer-normal" && "border-2 border-green-500 hover:bg-green-600/30 bg-green-600/20 text-green-600")} onClick={() => setSelected("cancer-normal")}>Cancer</main>

                <main className={twMerge("bg-slate-100 hover:scale-105 transition-all duration-200 ease-in-out hover:bg-slate-200 cursor-pointer px-4 py-1 active:translate-y-1 text-sm text-slate-800 border h-full border-slate-300", selected ===  "covid" && "border-2 border-green-500 hover:bg-green-600/30 bg-green-600/20 text-green-600")} onClick={() => setSelected("covid")} >Covid</main>
            </main>

            {selected === "cancer" && <CancerCheck />}
            {selected === "cancer-normal" && <NumCancerCheck />}
            {selected === "covid" && <CovidCheck />}
        </main>
    )
};

export default Outputs;