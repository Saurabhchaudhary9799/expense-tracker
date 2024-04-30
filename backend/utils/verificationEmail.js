const bcrypt = require("bcryptjs");
const UserVerfication = require("../modals/userVerification");
const { trace } = require("../Routes/userRoutes");
const {v4:uuidv4} = require("uuid");
const sendVerificationEmail = async ({ _id, email }, res) => {
  const currentUrl = `http://localhost:8000/`;
  const uniqueString = uuidv4() + _id;

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Verify your email",
    html: `<p>Verify your email address</p><p> Press <a href =${
      currentUrl + "/api/v1/users/verify/" + _id + "/" + uniqueString
    }>here</a> to proceed </p>`,
  };

  const saltRounds = 10;
  try {
    const hashedUniqueString = await bcrypt.hash(uniqueString, saltRounds);

    const newVerification = new UserVerfication({
      userId: _id,
      uniqueString: hashedUniqueString,
      createdAt: Date.now(),
      expiresAt: Date.now() + 21600000,
    });

    try {
      await newVerification.save();
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Verification email sent" });
      } catch (error) {
        res.status(400).json({ message: "Verification email failed" });
      }
    } catch (error) {
      res.json({ message: error });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "Hashing failed" });
  }
};

module.exports = { sendVerificationEmail };
