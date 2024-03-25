'use client'
import SidebarItem from "@/components/SidebarItem"
import { IcTwotoneSpaceDashboard } from "@/components/svg/DashIcon"
import { SolarCalendarBoldDuotone } from "@/components/svg/GravityUiCalendar"
import { SolarQuestionSquareBoldDuotone } from "@/components/svg/TdesignUserUnknown"
import { PhStudentDuotone } from "@/components/svg/PhStudent"
import { IonFileTrayFull } from "@/components/svg/TrayFull"
import { SolarCompassSquareBoldDuotone } from "@/components/svg/RiCompassDiscoverLine"
import { IcTwotoneManageAccounts } from "@/components/svg/IcTwotoneManageAccounts"
import { UimGraphBar } from "@/components/svg/MdiGraphBoxPlusOutline"
import { SolarUserCrossBoldDuotone } from "@/components/svg/LaUserTimes"
import { PhChalkboardTeacherDuotone } from "@/components/svg/LaChalkboardTeacher"
import { LetsIconsSettingLineDuotone } from "@/components/svg/LucideSettings"
import { useState, useLayoutEffect } from "react"
import { FluentChevronLeft24Filled } from "@/components/svg/FluentChevronLeft24Filled"
import { FluentChevronRight24Filled } from "@/components/svg/FluentChevronRight24Filled"
import Image from "next/image"

export default function SideNavBar() {
    const [sideToggle, setSideToggle] = useState(true);
    const [headerToggles, setHeaderToggles] = useState({});
    
    const initialHeaderToggles = {};
    useLayoutEffect(() => {
      headers.forEach(header => {
        initialHeaderToggles[header.label] = true;
      });
      setSideToggle(false);
      setHeaderToggles(initialHeaderToggles);
    }, []);

    useLayoutEffect(() => {
      setHeaderToggles(prevState => {
        const updatedHeaderToggles = {};
        Object.keys(prevState).forEach(label => {
          updatedHeaderToggles[label] = sideToggle ? prevState[label] : true;
        });
        return updatedHeaderToggles;
      });
    }, [!sideToggle]);

    const navHandle = (label) => {
      setHeaderToggles(prevState => ({
        ...prevState,
        [label]: !prevState[label]
      }));
    }

    const handleToggle = () => {
        setSideToggle(!sideToggle);
    }

    const headers = [
      { label: 'overview', child: [
        { title: 'Dashboard', href: '/', icon: <IcTwotoneSpaceDashboard /> },
        { title: 'Calendar', href: '/calendar', icon: <SolarCalendarBoldDuotone /> },
        { title: 'Enquiry', href: '/enquiry', icon: <SolarQuestionSquareBoldDuotone /> },
        { title: 'Students', href: '', icon: <PhStudentDuotone />, children: [
            {
              title: 'abc', href: '/abc',children:[
                {title:"abc",href:"/abc"}
              ]
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
      ] },
      { label: 'main', child: [
        {
          title: 'abc', href: '/abc',children:[
            {title:"abc",href:"/abc"}
          ]
        },
        {
          title: 'xyz', href: '/xyz'
        }
      ] }
    ]

    return (
      <div className="sidebar relative h-[100vh] 2xl:px-4 pt-8 pb-16 border-r-2" style={{width: sideToggle ? '5%' : '250px'}}>
        { !sideToggle ? <Image src='/img/logo.webp' width={150} height={0} className="mb-5" alt='ourlogo' /> : <Image src='/img/logo.png' width={38} height={0} className="mb-5" alt='ourlogo' /> }
        <div onClick={() => handleToggle()} className=" text-sm border border-1 border-gray-300 w-max rounded-full absolute right-[-10px] top-9 cursor-pointer bg-[#F4F6F8] z-50">
          { !sideToggle ? <FluentChevronLeft24Filled /> : <FluentChevronRight24Filled /> }
        </div>
        <div className="h-full overflow-y-scroll">
          {
            headers.map((v, i) => {
              return (
                <div key={i}>
                  <span className="uppercase text-sm font-bold text-gray-600 cursor-pointer my-4" style={{ display: sideToggle ? 'none' : 'block' }} onClick={() => navHandle(v.label)}>{v.label}</span>
                  <div className='menu overflow-hidden' style={{ height: headerToggles[v.label] ? '' : 0 }}>
                    { Array.isArray(v.child) && v.child.map((item, i) => <SidebarItem key={i} item={item} navLink={v.child} sideToggle={sideToggle} setSideToggle={setSideToggle} />) }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
}