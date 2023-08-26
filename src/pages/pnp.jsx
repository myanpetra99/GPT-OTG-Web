import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faContactCard } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Navbar from "../components/navbar"; // import Navbar

function Pnp() {
  return (
    <>
     <Navbar /> 
      <div className="container">
        <h1>Privacy Policy for the GPT-OTG Chrome Extension</h1>
        <h2>Effective date: July 6, 2023</h2>
        <h3>Introduction</h3>
        We at GPT-OTG ("we", "our", or "us") take your privacy seriously and are
        committed to protecting your personal information. This Privacy Policy
        describes how we collect, use, and disclose your information when you
        use our GPT-OTG Chrome Extension (the "Extension"). Please read this
        Privacy Policy carefully.
        <h3>Information We Collect</h3>
        Our Extension does not intentionally collect or store any personally
        identifiable information about you. However, our Extension does track
        the usage of specific websites, such as YouTube and Google, in order to
        provide its services. For example, the Extension will detect if you open
        a YouTube video and use the video's transcript and title to generate a
        summary. This data is processed locally on your device and is not stored
        or transferred by us.
        <h3>Information Usage</h3>
        We use the data collected by our Extension only for the provision and
        improvement of our Extension's functionalities. We do not sell, trade,
        or otherwise transfer your information to outside parties. However, it's
        important to note that the GPT-OTG Extension interfaces with the OpenAI
        GPT model, which may collect and use data sent to it. We advise that you
        do not share any sensitive, personal, or identifiable information while
        using the Extension.
        <h3>Information Disclosure</h3>
        We may disclose aggregated, anonymized data in response to subpoenas,
        court orders, or other legal requirements; to exercise our legal rights
        or defend against legal claims; to investigate, prevent, or take action
        regarding illegal activities, suspected fraud or abuse, violations of
        our policies; or to protect our rights and property. In the future, we
        may sell to, buy, merge with, or partner with other businesses. In such
        transactions, aggregated, anonymized user data may be among the
        transferred assets.
        <h3>Security</h3>
        We implement a variety of security measures to help keep your
        information secure. However, no electronic transmission or storage of
        information can be entirely secure, so please be aware that we cannot
        guarantee absolute security.
        <h3>Your Rights</h3>
        You have the right to access and control your personal data. This
        includes the ability to request a copy of your personal data, and to ask
        us to update, correct, or delete it.
        <h3>Changes to This Policy</h3>
        We may revise this Privacy Policy from time to time and will post the
        most current version on our website. If a revision meaningfully reduces
        your rights, we will notify you.
        <h3>Contact Us</h3>
        If you have any questions about this Privacy Policy, please contact us
        at hello.michaelyanpetra@gmail.com.
        <h3>Your Consent</h3>
        By using our Extension, you consent to our Privacy Policy. If you do not
        agree with our Privacy Policy, please do not use our Extension.
      </div>
    </>
  );
}

export default Pnp;
