import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export async function booking(formData) {
  // const params = {
  //   firstName: formData.get("firstName"),
  //   lastName: formData.get("lastName"),
  //   phone: formData.get("phone"),
  //   email: formData.get("email"),
  //   service: formData.get("service"),
  //   message: formData.get("message"),
  // };

  const params = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    email: formData.email,
    service: formData.service,
    message: formData.message,
  };

  try {
    await emailjs.send(
      "service_vzys7od",
      "template_kwvuojn",
      params,
      "3WtupC6n-1ryGWu52"
    );
  } catch (error) {
    throw new Error("Problem sending the message.");
  }
}
