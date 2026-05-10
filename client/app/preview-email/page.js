import { WelcomeEmail } from "@/components/emails/WelcomeEmail";
import { render } from "@react-email/render";

export default async function PreviewEmailPage() {
  const emailHtml = await render(<WelcomeEmail fullName="John Doe" />);
  
  return (
    <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh", padding: "20px" }}>
      <div style={{ 
        maxWidth: "900px", 
        margin: "0 auto", 
        backgroundColor: "#fff", 
        borderRadius: "12px", 
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        overflow: "hidden"
      }}>
        <div style={{ 
          padding: "15px 20px", 
          borderBottom: "1px solid #eee", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          backgroundColor: "#fafafa"
        }}>
          <h1 style={{ fontSize: "16px", margin: 0, fontWeight: "600", color: "#333" }}>
            Email Preview: Welcome to The Royals Community
          </h1>
          <span style={{ fontSize: "12px", color: "#666", backgroundColor: "#eee", padding: "4px 8px", borderRadius: "4px" }}>
            Draft Template
          </span>
        </div>
        
        {/* Using iframe to prevent hydration errors and isolate styles */}
        <iframe 
          srcDoc={emailHtml} 
          style={{ 
            width: "100%", 
            height: "800px", 
            border: "none",
            display: "block"
          }} 
          title="Email Preview"
        />
      </div>
    </div>
  );
}
