import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export async function booking(formData) {
  const params = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  try {
    await emailjs.send(
      "service_vzys7od",
      "template_kwvuojn",
      params,
      "3WtupC6n-1ryGWu52"
    );

    toast.success(
      "Thank you for your message! We will get back to you shortly."
    );
  } catch (error) {
    toast.error("Failed to send the message. Please try again.");
  }
}
