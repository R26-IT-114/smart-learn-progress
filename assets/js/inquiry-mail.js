// EmailJS dashboard → Email Services, Email Templates, and Account → Public Key.
// These are public browser identifiers. Never put private keys or passwords here.
const inquiryEmailConfig = Object.freeze({
  serviceId: "service_q0z3pde",
  templateId: "template_rvn3kcc",
  publicKey: "b7FdmJ62O7wPtrAC7",
});

async function sendInquiry(fields) {
  const configured = Object.values(inquiryEmailConfig).every(value => value.trim());
  // Keep existing delivery working until all three identifiers are available.

  const endpoint = configured
    ? "https://api.emailjs.com/api/v1.0/email/send"
    : "https://formsubmit.co/ajax/smartlearnprogress@gmail.com";
  const payload = configured ? {
    service_id: inquiryEmailConfig.serviceId,
    template_id: inquiryEmailConfig.templateId,
    user_id: inquiryEmailConfig.publicKey,
    template_params: {
      name: fields.name,
      email: fields.email,
      mobile: fields.mobile,
      message: fields.message,
    },
  } : fields;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json, text/plain" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error("Inquiry delivery was not accepted");

  // EmailJS returns plain text OK; FormSubmit returns JSON.
  if (configured) {
    if ((await response.text()).trim() !== "OK") {
      throw new Error("Unexpected EmailJS response");
    }
  } else {
    const result = await response.json();
    if (result.success !== true && result.success !== "true") {
      throw new Error("Inquiry delivery was not accepted");
    }
  }
  // Do not retry with another provider after a failure: delivery may have succeeded.
}
