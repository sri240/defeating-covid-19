import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <style dangerouslySetInnerHTML={{__html: `
      body { background: #bae6ce }
    `}} />
    <div class="uuu">
    <h1>have something to share?</h1>
    <div class="contact">
      <h1 class="jjj">contact me...</h1>
          <form action="mailto:anusrisaraf20@gmail.com" method="post" encType="text/plain">
            name:<br></br>
            <input type="text" name="name" size="30" class="owo"></input><br></br><br></br><br></br>
            email:<br></br>
            <input type="text" name="mail" size="30" class="owo"></input><br></br><br></br><br></br>
            message:<br></br>
            <textarea name="message" rows="6" cols="60" class="themessage"></textarea><br></br>
            <input class="uwu" type="submit" value="send"></input>
            <input class="uwu" type="reset" value="clear"></input>
          </form>
          </div>

          <div class="google">
      <h1 class="jj">...or directly fill out an entry right here!</h1>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdyB8MSGQSqiGnnBYJyvPDhFjLcmKDdViN7GmhYz__6N6YD2w/viewform?embedded=true" width="640" height="888" frameborder="0" marginheight="0" marginwidth="0" style={{marginLeft:"20%"}}>Loading…</iframe>
    </div>
      </div>
    
  </Layout>
)

export default ContactPage
