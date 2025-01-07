import transporter from "../config/nodemailerConfig.js";

export const sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Solicitud ${name}`,
    text: message,
    headers: {
      "Reply-To": email,
    },
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "No se ha podido enviar el correo" });
  }
};
