import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
  return (
      <Layout pageTitle="Contact">
          <h1>Contact Details</h1>

          <p>Email: davidpb90@gmail.com</p>

          <hr/>

          <form action="mailto:davidpb90@gmail.com" method="post" enctype="text/plain">
            <label>Your Name:</label>
            <input type="text" name="yourName" value=""></input><br/>
            <label for="">Your Email:</label>
            <input type="email" name="yourEmail" value=""></input><br/>
            <label for="">Your Message:</label><br/>
            <textarea name="yourMessage" id="" cols="30" rows="10"></textarea><br/>
            <input type="submit" name=""></input>
           </form>
      </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage