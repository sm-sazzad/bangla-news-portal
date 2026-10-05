import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import transporter from "./mailer";

const client = new MongoClient(process.env.MONGODB_URL!);
const db = client.db("news_24");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  user: {
    changeEmail: {
      enabled: true,
      sendChangeEmailConfirmation: async ({ user, url, token }, request) => {
        void transporter.sendMail({
          from: `"Sparrow IT" <${process.env.GMAIL_USER}>`,
          to: user.email,
          subject: "Newa24 - নতুন ইমেইল নিশ্চিত করুন",
          html: `
    <div style="
      margin: 0;
      padding: 40px 20px;
      background-color: #f5f5f5;
      font-family: Arial, Helvetica, sans-serif;
    ">
      <div style="
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #e5e5e5;
      ">

        <!-- Header -->
        <div style="
          background-color: #b91c1c;
          padding: 25px 20px;
          text-align: center;
        ">
          <h1 style="
            margin: 0;
            color: #ffffff;
            font-size: 30px;
            font-weight: 800;
          ">
            Newa24
          </h1>

          <p style="
            margin: 6px 0 0;
            color: #fee2e2;
            font-size: 14px;
          ">
            আপনার নির্ভরযোগ্য সংবাদ মাধ্যম
          </p>
        </div>

        <!-- Content -->
        <div style="padding: 35px 30px;">

          <h2 style="
            margin: 0 0 15px;
            color: #1f2937;
            font-size: 22px;
          ">
            নতুন ইমেইল নিশ্চিত করুন
          </h2>

          <p style="
            margin: 0 0 15px;
            color: #4b5563;
            font-size: 15px;
            line-height: 1.7;
          ">
            আপনি আপনার Newa24 অ্যাকাউন্টের ইমেইল ঠিকানা পরিবর্তনের
            অনুরোধ করেছেন।
          </p>

          <p style="
            margin: 0;
            color: #4b5563;
            font-size: 15px;
            line-height: 1.7;
          ">
            নতুন ইমেইল ঠিকানাটি নিশ্চিত করতে নিচের বাটনে ক্লিক করুন।
          </p>

          <!-- Confirmation Button -->
          <div style="
            text-align: center;
            margin: 30px 0;
          ">
            <a
              href="${url}"
              style="
                display: inline-block;
                padding: 13px 28px;
                background-color: #b91c1c;
                color: #ffffff;
                text-decoration: none;
                border-radius: 7px;
                font-size: 15px;
                font-weight: 600;
              "
            >
              নতুন ইমেইল নিশ্চিত করুন
            </a>
          </div>

          <p style="
            margin: 0 0 10px;
            color: #6b7280;
            font-size: 13px;
            line-height: 1.6;
          ">
            বাটনটি কাজ না করলে নিচের লিংকটি আপনার ব্রাউজারে কপি করে খুলুন:
          </p>

          <p style="
            margin: 0;
            word-break: break-all;
            color: #b91c1c;
            font-size: 12px;
            line-height: 1.6;
          ">
            ${url}
          </p>

          <p style="
            margin-top: 25px;
            color: #6b7280;
            font-size: 13px;
            line-height: 1.6;
          ">
            আপনি যদি ইমেইল পরিবর্তনের এই অনুরোধ না করে থাকেন,
            তাহলে এই ইমেইলটি উপেক্ষা করুন।
          </p>

        </div>

        <!-- Footer -->
        <div style="
          background-color: #f9fafb;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #eeeeee;
        ">
          <p style="
            margin: 0 0 6px;
            color: #374151;
            font-size: 13px;
            font-weight: 600;
          ">
            Sparrow IT
          </p>

          <p style="
            margin: 0;
            color: #9ca3af;
            font-size: 12px;
          ">
            © Newa24 — সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>

      </div>
    </div>
          `,
        });
      },
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      void transporter.sendMail({
        from: `"Sparrow IT" <${process.env.GMAIL_USER}>`,
        to: user.email,
        subject: "News24 - আপনার ইমেইল যাচাই করুন",
        html: `
    <div style="
      margin: 0;
      padding: 40px 20px;
      background-color: #f5f5f5;
      font-family: Arial, Helvetica, sans-serif;
    ">
      <div style="
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #e5e5e5;
      ">

        <!-- Header -->
        <div style="
          background-color: #b91c1c;
          padding: 25px 20px;
          text-align: center;
        ">
          <h1 style="
            margin: 0;
            color: #ffffff;
            font-size: 30px;
            font-weight: 800;
          ">
            News24
          </h1>

          <p style="
            margin: 6px 0 0;
            color: #fee2e2;
            font-size: 14px;
          ">
            আপনার নির্ভরযোগ্য সংবাদ মাধ্যম
          </p>
        </div>

        <!-- Content -->
        <div style="padding: 35px 30px;">

          <h2 style="
            margin: 0 0 15px;
            color: #1f2937;
            font-size: 22px;
          ">
            ইমেইল যাচাই করুন 👋
          </h2>

          <p style="
            margin: 0 0 15px;
            color: #4b5563;
            font-size: 15px;
            line-height: 1.7;
          ">
            News24-এ আপনার অ্যাকাউন্ট তৈরি করার জন্য ধন্যবাদ।
            আপনার ইমেইল ঠিকানাটি যাচাই করতে নিচের বাটনে ক্লিক করুন।
          </p>

          <!-- Verification Button -->
          <div style="
            text-align: center;
            margin: 30px 0;
          ">
            <a
              href=${url}
              style="
                display: inline-block;
                padding: 13px 28px;
                background-color: #b91c1c;
                color: #ffffff;
                text-decoration: none;
                border-radius: 7px;
                font-size: 15px;
                font-weight: 600;
              "
            >
              ইমেইল যাচাই করুন
            </a>
          </div>

          <p style="
            margin: 0 0 12px;
            color: #6b7280;
            font-size: 13px;
            line-height: 1.6;
          ">
            যদি উপরের বাটনটি কাজ না করে, তাহলে নিচের লিংকটি আপনার
            ব্রাউজারে কপি করে খুলুন:
          </p>

          <p style="
            word-break: break-all;
            color: #b91c1c;
            font-size: 12px;
            line-height: 1.6;
          ">
            ${url}
          </p>

          <p style="
            margin-top: 25px;
            color: #6b7280;
            font-size: 13px;
            line-height: 1.6;
          ">
            আপনি যদি Newa24-এ কোনো অ্যাকাউন্ট তৈরি না করে থাকেন,
            তাহলে এই ইমেইলটি উপেক্ষা করতে পারেন।
          </p>

        </div>

        <!-- Footer -->
        <div style="
          background-color: #f9fafb;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #eeeeee;
        ">
          <p style="
            margin: 0 0 6px;
            color: #374151;
            font-size: 13px;
            font-weight: 600;
          ">
            Sparrow IT
          </p>

          <p style="
            margin: 0;
            color: #9ca3af;
            font-size: 12px;
          ">
            © News24 — সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>

      </div>
    </div>
         `,
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 2000,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
