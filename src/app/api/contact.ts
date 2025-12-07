import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Submission = {
  name: string;
  email: string;
  contact: string;
  message: string;
  time: string;
};

type Data = {
  message?: string;
  error?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    const { name, email, contact, message } = req.body;

    if (!name || !email || !contact || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const filePath = path.join(process.cwd(), "submissions.json");

    let submissions: Submission[] = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      submissions = JSON.parse(fileData) as Submission[];
    }

    const newSubmission: Submission = {
      name,
      email,
      contact,
      message,
      time: new Date().toLocaleString(),
    };

    submissions.push(newSubmission);

    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    return res.status(200).json({ message: "Submission saved successfully!" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
