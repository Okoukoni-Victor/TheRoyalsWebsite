import { Heading, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "./EmailLayout";

export const ContactEmail = ({
  fullName,
  email,
  phone,
  enquiryType,
  message,
}) => (
  <EmailLayout previewText={`New Contact Form Submission from ${fullName}`}>
    <Heading style={heading}>New Contact Form Submission</Heading>
    
    <Section style={content}>
      <Text style={label}>Full Name</Text>
      <Text style={value}>{fullName}</Text>

      <Text style={label}>Email Address</Text>
      <Text style={value}>{email}</Text>

      {phone && (
        <>
          <Text style={label}>Phone Number</Text>
          <Text style={value}>{phone}</Text>
        </>
      )}

      <Text style={label}>Enquiry Type</Text>
      <Text style={value}>{enquiryType}</Text>

      <Text style={label}>Message</Text>
      <Text style={messageBox}>{message}</Text>
    </Section>
    
    <Text style={footerNote}>
      This email was sent from the contact form on The Royals website.
    </Text>
  </EmailLayout>
);

const heading = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#111827",
  marginBottom: "32px",
  marginTop: "0",
  lineHeight: "1.2",
  letterSpacing: "-0.02em",
};

const content = {
  padding: "0",
};

const label = {
  fontSize: "12px",
  fontWeight: "700",
  color: "#6b7280",
  textTransform: "uppercase",
  marginBottom: "4px",
  letterSpacing: "0.05em",
};

const value = {
  fontSize: "16px",
  color: "#111827",
  marginBottom: "24px",
};

const messageBox = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#374151",
  backgroundColor: "#f9fafb",
  padding: "20px",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  whiteSpace: "pre-wrap",
};

const footerNote = {
  fontSize: "14px",
  color: "#9ca3af",
  marginTop: "32px",
};
