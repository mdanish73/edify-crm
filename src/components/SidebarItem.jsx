'use client'
import { useState, useEffect } from "react"
import { IonChevronDown } from "./svg/IonChevronDown"
import { IonChevronUp } from "./svg/IonChevronUp"
import { FluentMdl2RadioBullet } from "./svg/FluentMdl2RadioBullet"
import Link from "next/link"

export default function SidebarItem({item, sideToggle}){
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [sideToggle]);

    if(item.children){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div onClick={() => setOpen(!open)} className="cursor-pointer sidebar-title flex justify-between hover:bg-blue-100 rounded-lg p-2 mt-1">
                    <span className="text-[#637381] text-[1rem] flex items-center gap-3">
                        { item.icon && <div className="inline">{item.icon}</div> }
                        <p className="text-[#637381] text-[1rem]" style={{display: !sideToggle ? 'block' : 'none'}}>{item.title}</p> 
                    </span> 
                    {open ? <IonChevronUp /> : <IonChevronDown />}
                </div>
                <div className="sidebar-content">
                    {
                        item.children.map((child, index) => {
                            return (
                                <div className="flex items-center my-[-5px] ml-7">
                                     <SidebarItem key={index} item={child} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }else{
        return (
            <Link href={item.href || "#"} className="sidebar-item plain text-black flex items-center gap-3 justify-start hover:no-underline hover:bg-blue-100 rounded-lg p-2 my-2">
                { item.icon && <div>{item.icon}</div> }
                <div className="text-[#637381]" style={{display: !sideToggle ? 'block' : 'none'}}>{item.title}</div>
            </Link>
        )
    }
}