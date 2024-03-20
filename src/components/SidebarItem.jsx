'use client'
import { useState, useEffect } from "react"
import { IonChevronDown } from "./svg/IonChevronDown"
import { IonChevronUp } from "./svg/IonChevronUp"
import { FluentMdl2RadioBullet } from "./svg/FluentMdl2RadioBullet"
import Link from "next/link"

export default function SidebarItem({item, sideToggle, setSideToggle}){
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [sideToggle]);
    if(item.children){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div 
                    onClick={() => {
                        setOpen(!open);
                        setSideToggle(false);   
                    }} 
                    className="cursor-pointer sidebar-title flex justify-between hover:bg-gray-200 rounded-lg p-2 mt-1"
                >
                    <span className="text-[#C0C7CD] text-[0.7rem] flex items-center gap-2">
                        { item.icon && <div className="inline">{item.icon}</div> }
                        <p className="text-[#637381] text-[0.9rem] font-medium" style={{display: !sideToggle ? 'block' : 'none'}}>{item.title}</p> 
                    </span> 
                    {open ? <IonChevronUp className='justify-self-end' /> : <IonChevronDown className='justify-self-end' style={{display: !sideToggle ? 'block' : 'none'}} />}
                </div>
                <div className="sidebar-content" style={{ maxHeight: open ? '100%' : '0', opacity: open ? 1 : 0, overflow: 'hidden', transition: 'all 0.5s ease-out, opacity 0.3s ease-out' }}>
                    {
                        item.children.map((child, index) => {
                            return (
                                <div  key={index} className="flex my-0 ml-0 px-3 gap-2 rounded-lg transition items-center">
                                    <FluentMdl2RadioBullet/>
                                    <SidebarItem item={child} sideToggle={sideToggle} setSideToggle={setSideToggle} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }else{
        return (
            <Link href={item.href || "#"} className="sidebar-item plain text-black flex items-center gap-2 justify-start hover:no-underline hover:bg-gray-200 rounded-lg p-2 my-2">
                { item.icon && <div>{item.icon}</div> }
                <div className="text-[#637381] text-[0.9rem] font-medium" style={{display: !sideToggle ? 'block' : 'none'}}>{item.title}</div>
            </Link>
        )
    }
}