'use client'
import SidebarItem from "./SidebarItem"
import { IcTwotoneSpaceDashboard } from "./svg/DashIcon"
import { SolarCalendarBoldDuotone } from "./svg/GravityUiCalendar"
import { SolarQuestionSquareBoldDuotone } from "./svg/TdesignUserUnknown"
import { PhStudentDuotone } from "./svg/PhStudent"
import { IonFileTrayFull } from "./svg/TrayFull"
import { SolarCompassSquareBoldDuotone } from "./svg/RiCompassDiscoverLine"
import { IcTwotoneManageAccounts } from "./svg/IcTwotoneManageAccounts"
import { UimGraphBar } from "./svg/MdiGraphBoxPlusOutline"
import { SolarUserCrossBoldDuotone } from "./svg/LaUserTimes"
import { PhChalkboardTeacherDuotone } from "./svg/LaChalkboardTeacher"
import { LetsIconsSettingLineDuotone } from "./svg/LucideSettings"
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
    { title: 'Dashboard', href: '/dashboard', icon: <IcTwotoneSpaceDashboard /> },
    { title: 'Calendar', href: '/calendar', icon: <SolarCalendarBoldDuotone /> },
    { title: 'Enquiry', href: '/enquiry', icon: <SolarQuestionSquareBoldDuotone /> },
    { title: 'Students', href: '', icon: <PhStudentDuotone />, children: [
        {
          title: 'abc', href: '/abc'
        },
        {
          title: 'xyz', href: '/xyz'
        }
      ] 
    },
    { title: 'Applications', href: '/applications', icon: <IonFileTrayFull />, children: [
      {
        title: 'abc', href: '/abc'
      },
      {
        title: 'xyz', href: '/xyz'
      }
    ] },
    { title: 'Visa', href: '/visa', icon: <SolarCompassSquareBoldDuotone />, children: [
      {
        title: 'abc', href: '/abc'
      },
      {
        title: 'xyz', href: '/xyz'
      }
    ] },
    { title: 'Accounts', href: '/accounts', icon: <IcTwotoneManageAccounts />, children: [
      {
        title: 'abc', href: '/abc'
      },
      {
        title: 'xyz', href: '/xyz'
      }
    ] },
    { title: 'Reports', href: '/reports', icon: <UimGraphBar /> },
    { title: 'Defer / Environment', href: '/defer', icon: <SolarUserCrossBoldDuotone /> },
    { title: 'Coaching', href: '/coaching', icon: <PhChalkboardTeacherDuotone /> },
    { title: 'Masters', href: '/masters', icon: <LetsIconsSettingLineDuotone /> }
  ]

    return (
        <div className="sidebar relative h-[100vh] 2xl:px-4 pt-8 pb-16 border-r-2" style={{width: sideToggle ? '5%' : '250px'}}>
          { !sideToggle ? <Image src='/img/logo.webp' width={150} height={180} className="mb-5" alt='ourlogo' /> : <Image src='/img/logo.png' width={42} height={42} className="mb-5" alt='ourlogo' /> }
          <div onClick={() => handleToggle()} className=" text-sm border border-1 border-gray-400 w-max rounded-full absolute right-[-10px] top-9 cursor-pointer bg-[#F4F6F8] z-50">
            { !sideToggle ? <FluentChevronLeft24Filled /> : <FluentChevronRight24Filled /> }
          </div>
          <div className="overflow-y-scroll h-full">
            { navLink.map((item, i) => <SidebarItem key={i} item={item}  sideToggle={sideToggle} setSideToggle={setSideToggle} />) }
          </div>
        </div>
    )
}