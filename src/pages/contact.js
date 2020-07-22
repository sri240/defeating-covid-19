import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />

    <style dangerouslySetInnerHTML={{__html: `
      body { background: #bae6ce }
    `}} />

    <h1>have something to share?</h1>
    <div class="contact">
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
  </Layout>
)

export default ContactPage
