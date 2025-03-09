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

export const sendEmail = async ({
  email,
  message,
}: {
  email: string;
  message: string;
}) => {
  await qtashClient.publishJSON({
    url: config.env.upstash.qtashUrl,
    body: {
      from: "Iqbal Pratama <iqbal.pyp@gmail.com>",
      to: [email],
      headers: { "my-header": "my-value" },
      message: message,
    },
  });
};
