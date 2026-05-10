import { Heading, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout } from "./EmailLayout";

export const WelcomeEmail = ({ fullName }) => (
  <EmailLayout previewText="Welcome to The Royals Community">
    <Heading style={heading}>Welcome to The Royals Community</Heading>
    
    <Text style={text}>Dear {fullName},</Text>
    
    <Text style={text}>Thank you for subscribing to The Royals.</Text>
    
    <Text style={text}>
      {"We're"} excited to have you join a growing community committed to creating 
      meaningful impact through education, outreach, and youth development.
    </Text>
    
    <Text style={text}>
      From time to time, {"you'll"} receive updates on our initiatives, impact stories, 
      and ways you can get involved.
    </Text>
    
    <Text style={text}>
      If you ever have questions or would like to support our work, feel free to 
      reply to this email, {"we'd"} love to hear from you.
    </Text>
    
    <Text style={text}>Welcome to the journey.</Text>
    
    <Text style={signature}>— The Royals Team</Text>
    
    <Text style={subText}>
      Prefer not to receive these emails? You can unsubscribe at any time.<br />
      Want to share your thoughts? {"We'd"} love your feedback.
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

const text = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#374151",
  marginBottom: "20px",
};

const signature = {
  fontSize: "15px",
  fontWeight: "600",
  color: "#374151",
  marginTop: "24px",
  marginBottom: "32px",
};

const subText = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#4B5563",
};
