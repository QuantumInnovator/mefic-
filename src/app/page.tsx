import Image from "next/image";
import React from 'react'

import Navbar from "@/app/Component/Navbar";
import Hero from "@/app/Component/Hero";
import exp from "@/app/Component/Exp";
import Exp from "@/app/Component/Exp";
import service from "./Component/Service";
import Service from "./Component/Service";
import Funds from "@/app/Component/Funds";
import Card from "./Component/Card";
import Text from "./Component/Text";
import Footer from "./Component/Footer";
import Comps from "./Component/Comps";


export default function page () {
  return (
    <div>
      <Navbar/>
    <Hero/>
    <Exp />
    <Service/>
    <br /><br /><br />
    <Funds/>
    <Card/> 
    
   <Text/>
   <Comps/>
   <Footer/>

    </div>
  )
}

