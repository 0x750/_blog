import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Why you should learn powershell"
      keywords={["powershell", "learning", "Active Directory"]}
    />

    <h1>Why you should consider learning PowerShell</h1>

    <StaticImage
      src="../../images/learning-powershell/computer.jpg"
      width={1000}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Computer"
    />
    <a
      style={{
        marginBottom: "1.5em",
        display: "block",
        color: "#999",
        textAlign: "center",
      }}
      href="https://unsplash.com/@floriankrumm"
    >
      @floriankrumm on Unsplah
    </a>

    <p>
      PowerShell is a really <strong>powerful</strong> tool, and it can help you
      accomplish a lot of task on Windows and Windows Server. It is{" "}
      <em>already installed</em> on your machine if you are running Windows 7 or
      later. If you are running macOS or Linux, you can also{" "}
      <a href="https://docs.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell">
        install it
      </a>
      . Let's explore why it is useful and why you should consider using it.
    </p>

    <h2>What is PowerShell ?</h2>

    <p>
      PowerShell is :
      <ul>
        <li style={{ marginBottom: "inherit" }}>
          A <strong>shell</strong>, that runs commands and scripts, but unlike
          text based shell like <code>*sh</code>, it will accept and return
          objects.
        </li>
        <li style={{ marginBottom: "inherit" }}>
          A <strong>task-based typed interpreted language</strong> built on{" "}
          <code>.NET</code>, used for managing systems.
        </li>
        <li style={{ marginBottom: "inherit" }}>
          A <strong>configuration management framework</strong>.
        </li>
      </ul>
    </p>
    <h2>Starting PowerShell</h2>
    <p>
      To start Powershell, launch it from the Windows menu or from the{" "}
      <code>Windows</code> + <code>X</code> menu.
      <br />A shell window will appear.
    </p>

    <h2>Checking your installation</h2>

    <p>
      To check your PowerShell installation, run the{" "}
      <code>$PSVersionTable</code> command, as the following snippet :
    </p>
    <SyntaxHighlighter language="powershell" style={a11yDark}>
      {`PS C:\\Users\\your.username> $PSVersionTable`}
    </SyntaxHighlighter>
    <br />
    <p>
      Running the <code>$PSVersionTable</code> command will output the content
      of the variable named <em>PSVersionTable</em>. If the output looks similar
      to the following, then PowerShell is installed and running properly.
    </p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Name                           Value
----                           -----
PSVersion                      5.1.19041.906
PSEdition                      Desktop
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
BuildVersion                   10.0.19041.906
CLRVersion                     4.0.30319.42000
WSManStackVersion              3.0
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1`}
    </SyntaxHighlighter>
    <br />
    <p>
      The previous command output is indicating what Version of PowserShell you
      are running. In my case, I am running the{" "}
      <strong>5.1 version that comes with Windows 10</strong>.
    </p>
    <h2>PowerShell Syntax</h2>
    <p>
      If you are comming from an other programming language, you are more used
      to call functions like this :
    </p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {"functionCall(param1, param2);"}
    </SyntaxHighlighter>
    <br />
    <p>Powershell is different and command calls are built like this : </p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Verb-Noun -Param1 'Value' -Param2 $CanBeAVariable`}
    </SyntaxHighlighter>
    <br />
    <h2>Objects ?</h2>
    <p>
      The true power of PowerShell is its ability to manipulate{" "}
      <code>.NET</code> objects. For exemple, to get the process for the current
      powershell window opened :
    </p>
    <SyntaxHighlighter language="powershell" style={a11yDark}>
      {'Get-Process -Name Powershell'}
    </SyntaxHighlighter>
  </Layout>
)

export default IndexPage
