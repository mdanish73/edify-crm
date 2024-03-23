'use client'
import { useState, useEffect } from "react"
import { IonChevronUp } from "./svg/IonChevronUp"
import { FluentMdl2RadioBullet } from "./svg/FluentMdl2RadioBullet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Ripple from 'material-ripple-effects'

export default function SidebarItem({item, sideToggle, setSideToggle}){     
    const ripple = new Ripple();
    const [open, setOpen] = useState(false);
    const isActive = item.href && usePathname() === item.href;
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
                    onMouseUp={(event) => ripple.create(event, 'dark')}
                    className="cursor-pointer sidebar-title flex justify-between hover:bg-gray-200 rounded-lg p-2 mt-1 w-full"
                >
                    <span className="text-[#C0C7CD] text-[0.7rem] flex items-center gap-2 w-full">
                        { item.icon && <div className="inline">{item.icon}</div> }
                        <p className="text-[#637381] text-[0.9rem] font-medium" style={{display: !sideToggle ? 'block' : 'none'}}>{item.title}</p> 
                    </span> 
                    {open ? <IonChevronUp className='justify-self-end transition-all rotate-0' /> : <IonChevronUp className='rotate-180 transition-all' style={{display: !sideToggle ? 'block' : 'none'}} />}
                </div>
                <div className="sidebar-content" style={{ maxHeight: open ? '100%' : '0', opacity: open ? 1 : 0, overflow: 'hidden', transition: 'all 0.5s ease-out, opacity 0.3s ease-out' }}>
                    {
                        item.children.map((child, index) => {
                            return (
                                <div key={index} className="flex my-0 ml-0 px-3 gap-2 rounded-lg transition items-center">
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
            <Link href={item.href || "#"} className="sidebar-item plain text-black flex items-center gap-2 justify-start hover:no-underline hover:bg-gray-200 rounded-lg p-2 my-2" style={{ backgroundColor: isActive ? '#bfdcfe' : '' }} onMouseUp={(event) => ripple.create(event, 'dark')}>
                { item.icon && <div>{item.icon}</div> }
                <div className="text-[#637381] text-[0.9rem] font-medium" style={{display: !sideToggle ? 'block' : 'none'}}>{item.title}</div>
            </Link>
        )
    }
}