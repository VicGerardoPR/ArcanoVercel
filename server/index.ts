import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

// POST /api/contact endpoint
app.post('/api/contact', async (req: express.Request, res: express.Response) => {
    const { name, email, phone, company, message } = req.body;
    try {
        // Create a test account (for demonstration). In production, replace with real SMTP credentials.
        const testAccount = await nodemailer.createTestAccount();
        const transporter = nodemailer.createTransport({
            host: testAccount.smtp.host,
            port: testAccount.smtp.port,
            secure: testAccount.smtp.secure,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: 'info@arcanointelligence.com',
            subject: `Nuevo mensaje de contacto${company ? ' - ' + company : ''}`,
            text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nEmpresa: ${company}\n\nMensaje:\n${message}`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        // Preview URL for test accounts
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.json({ success: true, previewUrl: nodemailer.getTestMessageUrl(info) });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Contact API server listening on port ${PORT}`);
});
