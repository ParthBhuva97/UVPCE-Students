import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import "../css/Contribute.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

const NavbarStyle = styled.div`
  background-color: #06283D;
  .navComp {
    color: white !important;
  }
  .brand {
    color: white !important;
  }
  .navbar-toggler {
    background-color: black !important;
  }
`;

const codeSnippet = `git clone REPO_URL`;
const codeSnippet2 = `git add .
git commit -m "Brief description of changes"
git push
`;

export default function Contribute() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <NavbarStyle>
        <Navigation />
      </NavbarStyle>
      <div className="mainContent">
        <div className="content-head mx-5 mt-5 mb-2">
          <h1>Contribute to the Site</h1>
          <p className="pb-2 fs-5 text-muted">
            Welcome to our website! We appreciate your interest in contributing
            to our open-source project. Below you'll find a step-by-step guide
            on how to contribute to our project on GitHub.
          </p>
          <hr align="center" className="mx-auto"></hr>
        </div>
        <div className="content s-1 mx-5">
          <h3>Step 1: Create a GitHub Account</h3>
          <p>
            Before you can contribute to our project, you'll need to create a
            GitHub account if you don't already have one. GitHub is a platform
            where developers can collaborate on open-source projects. It's free
            to create an account, and you can sign up at <a href="https://github.com/">github.com</a>.
          </p>
        </div>
        <div className="content s-2 mx-5">
          <h3>Step 2: Fork the Repository</h3>
          <p>
            Once you've created your GitHub account, you'll need to fork our
            repository. Forking a repository creates a copy of the project on
            your own GitHub account, which you can then modify and submit
            changes back to us for review. 
          </p>
          <h6>Repository Link: <a href="https://github.com/ParthBhuva97/UVPCE-Students">UVPCE-Students</a></h6>
          <p>To fork our repository:</p>
          <ol>
            <li>Navigate to our repository on GitHub.</li>
            <li>
              Click the "Fork" button in the top-right corner of the page.
            </li>
            <li>Select your account as the destination for the fork.</li>
          </ol>
        </div>
        <div className="content s-3 mx-5">
          <h3>Step 3: Make Changes</h3>
          <p>
            Now that you have your own copy of the project, you can make changes
            to it. You can do this either by editing files directly on the
            GitHub website, or by cloning the repository to your local machine
            and making changes there.
          </p>
          <p>If you're making changes on the GitHub website:</p>
          <ol>
            <li>Navigate to the file you want to edit.</li>
            <li>
              Click the pencil icon in the top-right corner of the file view to
              start editing.
            </li>
            <li>Make your changes.</li>
            <li>
              When you're finished, scroll down to the "Commit changes" section
              at the bottom of the page.
            </li>
            <li>
              Add a brief description of the changes you made, and click the
              "Commit changes" button.
            </li>
          </ol>
          <p>If you're cloning the repository to your local machine:</p>
          <ol>
            <li>Navigate to your forked repository on GitHub.</li>
            <li>Click the green "Code" button and copy the repository URL.</li>
            <li>
              Open a terminal window and navigate to the directory where you
              want to clone the repository.
            </li>
            <li>
              Run the following command, replacing REPO_URL with the URL you
              copied in step 2:
            </li>
            <br/>
          <pre>
            <code>{codeSnippet}</code>
          </pre>
          <li>Make your changes to the files on your local machine.</li>
          <li>Once you're done, commit your changes with the following commands:</li>
          <br/>
          <pre>
            <code>{codeSnippet2}</code>
          </pre>
          </ol>
        </div>
        <div className="content s-4 mx-5">
          <h3>Step 4: Submit a Pull Request</h3>
          <p>
          After you've made your changes, you'll need to submit a pull request to us so that we can review your changes and potentially merge them into our main codebase. To submit a pull request:
          </p>
          <ol>
            <li>Navigate to your forked repository on GitHub</li>
            <li>
            Click the green "Compare & pull request" button.
            </li>
            <li>Add a brief description of the changes you made.</li>
            <li>Click the "Create pull request" button.</li>
          </ol>
          <p>We'll review your changes as soon as we can, and we may ask for additional changes or provide feedback. Once your changes have been approved, we'll merge them into our main codebase and they'll be live on our website!</p>
            <p>We hope this guide has been helpful, and we're excited to see what contributions you'll make to our project.</p>
        </div>
      </div>
    </>
  );
}
