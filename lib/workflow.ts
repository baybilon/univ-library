import { Client as WorkflowClient } from "@upstash/workflow";
import { Client as QStashClient } from "@upstash/qstash";
import config from "./config";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qtashUrl,
  token: config.env.upstash.qtashToken,
});

const qtashClient = new QStashClient({
  token: config.env.upstash.qtashToken,
});

// const dataEmailJs = {
//   serviceId: config.env.emailjs.serviceId,
//   templateId: config.env.emailjs.templateId,
//   userId: config.env.emailjs.publicKey,
//   template_params:{
//     from_name: "Admin mager",
//     to_name: fullName,
//     to_email: email,
//   }
// };

export const sendEmail = async ({
  email,
  message,
  fullName,
}: {
  email: string;
  message: string;
  fullName: string;
}) => {
  const dataEmailJs = {
    serviceId: config.env.emailjs.serviceId,
    templateId: config.env.emailjs.templateId,
    userId: config.env.emailjs.publicKey,
    template_params: {
      from_name: "Admin mager",
      to_name: fullName,
      to_email: email,
    },
  };

  try {
    await qtashClient.publishJSON({
      // url: config.env.upstash.qtashUrl,
      // url: "https://api.emailjs.com/api/v1.0/email/send",
      // method: "POST",
      // body: {
      //   from: "Iqbal Pratama <iqbal.pyp@gmail.com>",
      //   to: [email],
      //   message: message,
      // },
      // headers: { "content-type": "application/json" },

      url: "https://api.emailjs.com/api/v1.0/email/send",
      type: "POST",
      data: JSON.stringify(dataEmailJs),
      contentType: "application/json",
    });
    console.log("Email sent successfully:", dataEmailJs);
  } catch (error) {
    console.log(error, "Error sending email");
  }
};
