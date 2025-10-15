// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ Setup transporter for Gmail
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // ✅ Route 1: Contact form (ScrollContactSection)
// app.post("/api/contact-scroll", async (req, res) => {
//   const { name, email, phoneNumber, company, subject, message } = req.body;

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_TO,
//     subject: subject || "New Contact (Scroll Section)",
//     text: `
//       📩 New Contact from ScrollContactSection

//       Name: ${name}
//       Email: ${email}
//       Phone: ${phoneNumber}
//       Company: ${company}
//       Subject: ${subject}
//       Message: ${message}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: "Email sent successfully" });
//   } catch (err) {
//     console.error("Error sending mail:", err);
//     res.status(500).json({ success: false, message: "Error sending email" });
//   }
// });

// // ✅ Route 2: Contact form (ContactUsPage)
// app.post("/api/contact-page", async (req, res) => {
//   const { firstName, lastName, email, country, message } = req.body;

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_TO,
//     subject: "New Contact (Contact Page)",
//     text: `
//       📩 New Contact from ContactUsPage

//       First Name: ${firstName}
//       Last Name: ${lastName}
//       Email: ${email}
//       Country: ${country}
//       Message: ${message}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: "Email sent successfully" });
//   } catch (err) {
//     console.error("Error sending mail:", err);
//     res.status(500).json({ success: false, message: "Error sending email" });
//   }
// });

// // ✅ Route 3: Chatbot message submission
// app.post("/api/chatbot", async (req, res) => {
//   const { name, email, message, topic } = req.body;

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.EMAIL_TO,
//     subject: "💬 New Chatbot Inquiry",
//     text: `
//       🤖 New Chatbot Message Received

//       Name: ${name || "N/A"}
//       Email: ${email || "N/A"}
//       Topic: ${topic || "N/A"}
//       Message: ${message || "N/A"}

//       📅 Time: ${new Date().toLocaleString()}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res
//       .status(200)
//       .json({ success: true, message: "Chatbot email sent successfully" });
//   } catch (err) {
//     console.error("❌ Error sending chatbot mail:", err);
//     res
//       .status(500)
//       .json({ success: false, message: "Error sending chatbot email" });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/chatbot", async (req, res) => {
  const { name, email, datetime, topic } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `💬 New Chatbot Message - ${topic || "General"}`,
    text: `
      Name: ${name || "N/A"}
      Email: ${email || "N/A"}
      Date/Time: ${datetime || "N/A"}
      Topic: ${topic || "N/A"}
      Time Submitted: ${new Date().toLocaleString()}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending mail:", err);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
