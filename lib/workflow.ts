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
  var dataEmailJs = {
    service_id: config.env.emailjs.serviceId,
    template_id: config.env.emailjs.templateId,
    user_id: config.env.emailjs.publicKey,
    accessToken: config.env.emailjs.privateKey,
    template_params: {
      from_name: "Admin mager",
      to_name: fullName,
      to_email: email,
      message: message,
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
      body: JSON.stringify(dataEmailJs),
    });
    console.log("Email sent successfully:", dataEmailJs);
  } catch (error) {
    console.log(error, "Error sending email");
  }
};
