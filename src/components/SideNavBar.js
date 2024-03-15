'use client'
import SidebarItem from "./SidebarItem"
import { AkarIconsDashboard } from "./svg/DashIcon"
import { GravityUiCalendar } from "./svg/GravityUiCalendar"
import { TdesignUserUnknown } from "./svg/TdesignUserUnknown"
import { PhStudent } from "./svg/PhStudent"
import { F7TrayFull } from "./svg/TrayFull"
import { RiCompassDiscoverLine } from "./svg/RiCompassDiscoverLine"
import { IcTwotoneManageAccounts } from "./svg/IcTwotoneManageAccounts"
import { MdiGraphBoxPlusOutline } from "./svg/MdiGraphBoxPlusOutline"
import { LaUserTimes } from "./svg/LaUserTimes"
import { LaChalkboardTeacher } from "./svg/LaChalkboardTeacher"
import { LucideSettings } from "./svg/LucideSettings"
import { useState, useEffect } from "react"
import { FluentChevronLeft24Filled } from "./svg/FluentChevronLeft24Filled"
import { FluentChevronRight24Filled } from "./svg/FluentChevronRight24Filled"
import Image from "next/image"
import Link from "next/link"

export default function SideNavBar(){
  const [sideToggle, setSideToggle] = useState(true);
  useEffect(() => {
    setSideToggle(false);
  }, [])

  const handleToggle = () => {
      setSideToggle(!sideToggle);
      console.log(sideToggle)
  }

  const navLink = [
    { title: 'Dashboard', href: '/dashboard', icon: <AkarIconsDashboard /> },
    { title: 'Calendar', href: '/calendar', icon: <GravityUiCalendar /> },
    { title: 'Enquiry', href: '/enquiry', icon: <TdesignUserUnknown /> },
    { title: 'Students', href: '', icon: <PhStudent />, children: [
        {
          title: 'abc', href: '/abc'
        },
        {
          title: 'xyz', href: '/xyz'
        }
      ] 
    },
    { title: 'Applications', href: '/applications', icon: <F7TrayFull /> },
    { title: 'Visa', href: '/visa', icon: <RiCompassDiscoverLine /> },
    { title: 'Accounts', href: '/accounts', icon: <IcTwotoneManageAccounts /> },
    { title: 'Reports', href: '/reports', icon: <MdiGraphBoxPlusOutline /> },
    { title: 'Defer / Environment', href: '/defer', icon: <LaUserTimes /> },
    { title: 'Coaching', href: '/coaching', icon: <LaChalkboardTeacher /> },
    { title: `Masters`, href: '/masters', icon: <LucideSettings /> }
  ]

    return (
        <div className="sidebar relative h-[100vh] p-5 pt-8 overflow-y-scroll border-r-2 z-[10000]" style={{width: sideToggle ? '5%' : '250px'}}>
          { !sideToggle ? <Image src='/img/logo.webp' width={150} height={180} className="mb-5" alt='ourlogo' /> : <Image src='/img/logo.jpg' width={42} height={42} className="mb-5" alt='ourlogo' /> }
          <div onClick={() => handleToggle()} className=" text-sm border border-1 border-gray-400 w-max rounded-full absolute right-[-10px] top-10 cursor-pointer bg-[#F4F6F8] z-[10000]">
            { !sideToggle ? <FluentChevronLeft24Filled /> : <FluentChevronRight24Filled /> }
          </div>
          { navLink.map((item, i) => <SidebarItem key={i} item={item}  />) }

          { !sideToggle ?
            <Link href='/account' className="text-[#637381] hover:bg-blue-100 flex flex-col items-center rounded-lg p-3 my-7">
              <span className="h-16 w-16 rounded-full border-4 border-gray-400 overflow-hidden mb-3"><Image src='/img/logo.jpg' height={200} width={200} alt="userImg" className="object-cover" /></span>
              <span className="text-center font-semibold text-gray-700">Danish</span>
              <span className="text-center text-sm">User</span>
            </Link>
          :
            <Link href='/account' className="text-[#637381] flex flex-col items-center rounded-lg p-3 my-7">
              <span className="h-10 w-10 rounded-full border-2 border-gray-400 overflow-hidden mb-3"><Image src='/img/logo.jpg' height={200} width={200} alt="userImg" className="object-cover" /></span>
            </Link>
          }
        </div>
    )
}