'use client'
import { useState, useLayoutEffect } from "react"
import { IonChevronUp } from "./svg/IonChevronUp"
import { FluentMdl2RadioBullet } from "./svg/FluentMdl2RadioBullet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Ripple from 'material-ripple-effects'

export default function SidebarItem({item, sideToggle, setSideToggle}){     
    const ripple = new Ripple();
    const [open, setOpen] = useState(false);
    const isActive = item.href && usePathname() === item.href;
    useLayoutEffect(() => {
        setOpen(false);
    }, [sideToggle]);
    if(item.children){
        return (
            <div className={ `${open ? "sidebar-item open" : "sidebar-item"}` }>
                <div 
                    onClick={() => {
                        setOpen(!open);
                        setSideToggle(false);   
                    }} 
                    onMouseUp={(event) => ripple.create(event, 'dark')}
                    className="cursor-pointer sidebar-title flex justify-between hover:bg-gray-200 rounded-lg p-2 mt-1 w-full"
                >
                    <span className={ `text-[#C0C7CD] text-[0.7rem] flex ${ !sideToggle ? 'justify-start' : 'justify-center' } items-center gap-2 w-full whitespace-nowrap` }>
                        { item.icon && <div>{item.icon}</div> }
                        <p className="text-[#637381] text-[0.9rem] font-medium w-full" style={{display: !sideToggle ? 'block' : 'none'}}>{item.title}</p> 
                    </span> 
                    {open ? <IonChevronUp className='justify-self-end transition-all rotate-0' /> : <IonChevronUp className='rotate-180 transition-all' style={{display: !sideToggle ? 'block' : 'none'}} />}
                </div>
                <div className="sidebar-content w-full overflow-hidden transition-max-height duration-700 ease-in-out" style={{ maxHeight: open ? '900px' : '0' }}>
                    {
                        item.children.map((child, index) => {
                            return (
                                <div key={index} className="my-0 ml-0 rounded-lg transition">
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
            <Link href={item.href || "#"} className={`sidebar-item plain text-black flex ${!sideToggle ? 'justify-start' : 'justify-center'} items-center gap-2 hover:no-underline hover:bg-gray-200 rounded-lg p-2 my-2 w-full whitespace-nowrap`} style={{ backgroundColor: isActive ? '#bfdcfe' : '' }} onMouseUp={(event) => ripple.create(event, 'dark')}>
                { item.icon && <div>{item.icon}</div> }
                <div className="text-[#637381] text-[0.9rem] font-medium" style={{display: !sideToggle ? 'block' : 'none'}}>{item.title}</div>
            </Link>
        )
    }
}