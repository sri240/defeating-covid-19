import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />

    <style dangerouslySetInnerHTML={{__html: `
      body { background: #e3ac94 }
    `}} />
    <div style={{display:"flex", flex:"row", flexWrap:"wrap"}}>

    <h1>who?</h1>
    <p class="desc">Hi! I'm the founder of Defeating COVID-19, Anusri Saraf. COVID-19 Shelter In Place in my area occurred in the April of my sophomore year, causing me to contemplate what I could do to help others during this time. I lost many opportunities, but I kept my head up and looked forward to more, and my passion for helping people combined with my web development knowledge, and Defeating COVID-19 was born.</p>
    
    <div style={{width:"100%"}}>
    <h1 style={{float:"right"}}>what?</h1>
    <p class="desc" style={{float:"right", textAlign:"right"}}>Defeating COVID-19 is an organization dedicated to spreading positivity and strengthening unity during the Coronavirus pandemic, as well as documenting the day-to-day experiences of the population as we navigate the changes the virus has brought.</p>
    </div>
    
    <h1 style={{float:"left"}}>when?</h1>
    <p class="desc" style={{float:"left"}}>The idea for this organization occurred to me mid-July 2020, and a week later, the website was up and running. It is constantly growing and gathering more and more people as time passes, as we stand in solidarity against this pandemic.</p>
    
    <div  style={{width:"100%"}}>
    <h1 style={{float:"right"}}>where?</h1>
    <p class="desc" style={{float:"right", textAlign:"right", width:"100%"}}>Developed in the Bay Area, but we have submissions from people across the globe!</p>
    </div>
    
    <div  style={{width:"100%"}}>
    <h1 style={{float:"left", width:"100%"}}>why?</h1>
    <p class="desc" style={{float:"left"}}>Our mission is to spread positivity during this time and encourage solidarity during a pandemic. By sharing stories, we can be unified even without seeing each other, and gain strength by sharing our own story to contribute.</p>
    </div>

    </div>
  </Layout>
)

export default AboutPage
