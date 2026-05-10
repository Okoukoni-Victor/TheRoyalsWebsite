"use server";

import { resend } from "@/lib/resend";
import { ContactEmail } from "@/components/emails/ContactEmail";
import { WelcomeEmail } from "@/components/emails/WelcomeEmail";

export async function sendContactEmail(formData) {
  const { fullName, email, phone, enquiryType, message } = formData;

  try {
    const fromEmail = process.env.EMAIL_ADDRESS ? `The Royals <${process.env.EMAIL_ADDRESS}>` : 'The Royals <onboarding@resend.dev>';

    const { data, error } = await resend.emails.send({
      from: fromEmail, // Uses your custom email if defined in .env, otherwise defaults to onboarding
      to: ['hello.theroyals@gmail.com'], // Resend test address that always succeeds
      subject: `New ${enquiryType} from ${fullName}`,
      react: (
        <ContactEmail
          fullName={fullName}
          email={email}
          phone={phone}
          enquiryType={enquiryType}
          message={message}
        />
      ),
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error: error.message };
  }
}

export async function subscribeToNewsletter(formData) {
  const { fullName, email } = formData;

  try {
    // 1. Add subscriber to Resend Global Contacts
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    const { error: contactError } = await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      unsubscribed: false,
    });

    if (contactError) {
      console.error("Failed to create global contact:", contactError);
    }

    const fromEmail = process.env.EMAIL_ADDRESS ? `The Royals <${process.env.EMAIL_ADDRESS}>` : 'The Royals <onboarding@resend.dev>';

    // 2. Send notification to admin
    await resend.emails.send({
      from: fromEmail,
      to: ['hello.theroyals@gmail.com'],
      subject: `New Newsletter Subscriber: ${fullName}`,
      html: `<p>New subscriber: <strong>${fullName}</strong> (${email})</p>`,
    });

    // 3. Send welcome email to subscriber
    // Note: In sandbox mode, this will only work if 'email' is the verified account email.
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: 'Welcome to The Royals Newsletter!',
      react: <WelcomeEmail fullName={fullName} />,
    });

    if (error) {
      console.error("Resend Error (Welcome Email):", error);
      // We don't fail the whole action if the welcome email fails (due to sandbox)
    }

    return { success: true, data };
  } catch (error) {
    console.error("Newsletter Action Error:", error);
    return { success: false, error: error.message };
  }
}
