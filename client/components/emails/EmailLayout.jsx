import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
} from "@react-email/components";
import * as React from "react";

// For production, replace with your actual domain (e.g., https://the-royals.vercel.app)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://the-royals.vercel.app";

export const EmailLayout = ({ previewText, children }) => (
  <Html>
    <Head />
    <Preview>{previewText}</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Shared Header Section */}
        <Section style={headerSection}>
          <table width="100%" border="0" cellPadding="0" cellSpacing="0">
            <tr>
              <td style={headerContent}>
                <Img
                  src={`${baseUrl}/assets/the-royal-logo-white.png`}
                  width="160"
                  alt="The Royals"
                  style={logo}
                />
              </td>
              <td align="right" style={patternCell}>
                <Img
                  src={`${baseUrl}/assets/mission-card-pattern-tablet-and-desktop-view.svg`}
                  width="180"
                  alt=""
                  style={pattern}
                />
              </td>
            </tr>
          </table>
        </Section>

        {/* Dynamic Content Section */}
        <Section style={contentSection}>
          {children}
        </Section>

        {/* Shared Footer Section */}
        <Section style={footerSection}>
          <table width="100%" border="0" cellPadding="0" cellSpacing="0">
            <tr>
              <td style={footerTextContainer}>
                <div style={footerText}>
                  Need help? <Link href={`${baseUrl}/contact`} style={link}>Contact our support team</Link> or no longer interested in our newsletters? <Link href="#" style={link}>Unsubscribe here</Link>. Want to give us feedback? Let us know what you think on our <Link href="#" style={link}>feedback site</Link>.
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ paddingTop: "24px" }}>
                <table align="left" border="0" cellPadding="0" cellSpacing="0" role="presentation" style={socialTable}>
                  <tr>
                    <td style={socialIconCell}>
                      <Link href="https://the-royals.vercel.app">
                        <Img src="https://img.icons8.com/material-rounded/48/556CCD/globe--v1.png" width="24" height="24" alt="Website" />
                      </Link>
                    </td>
                    <td style={socialIconCell}>
                      <Link href="#">
                        <Img src="https://img.icons8.com/material-rounded/48/556CCD/youtube-play.png" width="24" height="24" alt="YouTube" />
                      </Link>
                    </td>
                    <td style={socialIconCell}>
                      <Link href="#">
                        <Img src="https://img.icons8.com/material-rounded/48/556CCD/linkedin--v1.png" width="24" height="24" alt="LinkedIn" />
                      </Link>
                    </td>
                    <td style={socialIconCell}>
                      <Link href="#">
                        <Img src="https://img.icons8.com/material-rounded/48/556CCD/twitter.png" width="24" height="24" alt="X" />
                      </Link>
                    </td>
                    <td style={socialIconCell}>
                      <Link href="#">
                        <Img src="https://img.icons8.com/material-rounded/48/556CCD/instagram-new.png" width="24" height="24" alt="Instagram" />
                      </Link>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f4f4f4",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
  borderRadius: "4px",
  overflow: "hidden",
  border: "1px solid #e5e7eb",
};

const headerSection = {
  backgroundColor: "#5D75D4",
  height: "140px",
  overflow: "hidden",
};

const headerContent = {
  padding: "40px 0 40px 48px",
  verticalAlign: "middle",
};

const patternCell = {
  verticalAlign: "top",
  padding: "0",
  lineHeight: "0",
};

const logo = {
  display: "block",
};

const pattern = {
  display: "block",
  height: "140px",
  opacity: "0.4",
};

const contentSection = {
  padding: "48px",
};

const footerSection = {
  backgroundColor: "#EEF2FF",
  padding: "40px 48px",
  textAlign: "left",
};

const footerTextContainer = {
  textAlign: "left",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "20px",
  color: "#4B5563",
  textAlign: "left",
};

const socialTable = {
  margin: "0",
};

const socialIconCell = {
  padding: "0 15px 0 0",
};

const link = {
  color: "#5D75D4",
  textDecoration: "underline",
};
