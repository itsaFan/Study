import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function extractFeedback(filePath: string) {
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);
  return data;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackTxt = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackTxt,
    };
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success!", feedback: newFeedback });


  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}
