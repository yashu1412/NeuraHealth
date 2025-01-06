import emailjs from "@emailjs/browser";

/**
 * Sends a contact support email using EmailJS for NeuraHealth.
 *
 * @param {Object} emailData - The data required for the email template.
 * @param {string} emailData.to_name - The recipient's full name.
 * @param {string} emailData.user_email - The user's email address.
 * @param {string} emailData.message - The message sent by the user.
 * @param {string} emailData.support_team_email - NeuraHealth support team's email.
 * @param {string} emailData.support_team_phone - NeuraHealth support team's phone number.
 *
 * @returns {Promise} - Resolves if the email is sent successfully, rejects otherwise.
 */
export const sendSupportEmail = (emailData) => {
  // Define your EmailJS service ID, template ID, and public key for NeuraHealth
  const SERVICE_ID = "service_1otd0m7"; // Replace with your actual EmailJS service ID
  const TEMPLATE_ID = "template_48gjggr"; // Replace with your actual EmailJS template ID
  const PUBLIC_KEY = "ehdWvt79pjFBgOj5S"; // Replace with your actual EmailJS public key

  // Validate that all required fields are present
  const requiredFields = [
    "to_name",
    "user_email",
    "message",
    "support_team_email",
    "support_team_phone",
  ];

  const missingFields = requiredFields.filter(
    (field) => !emailData.hasOwnProperty(field) || !emailData[field]
  );

  if (missingFields.length > 0) {
    console.error(
      `Missing the following fields in emailData: ${missingFields.join(", ")}`
    );
    return Promise.reject(
      new Error(
        `Missing the following fields in emailData: ${missingFields.join(", ")}`
      )
    );
  }

  // Send the email using EmailJS
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY).then(
    (response) => {
      console.log("Support email sent successfully!", response.status, response.text);
      return response;
    },
    (error) => {
      console.error("Failed to send support email:", error);
      throw error;
    }
  );
};
