# Portfolio Backend Server (Optional/Deprecated)

> ⚠️ **Note:** This backend server is now **optional**. The portfolio now uses **EmailJS** for sending emails directly from the frontend, eliminating the need for a backend server.

This folder is kept for reference or if you prefer to use a backend-based email solution.

---

## 📋 Prerequisites

- Node.js installed (v14 or higher)
- Gmail account (or any SMTP provider)

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Edit the `.env` file with your credentials:

```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
RECIPIENT_EMAIL=your-email@gmail.com
ALLOWED_ORIGINS=http://localhost:3000
```

### 3. Get Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" and your device
5. Copy the generated 16-character password
6. Paste it in `.env` as `EMAIL_PASS`

### 4. Run the Server

```bash
# Production
npm start

# Development (with auto-reload)
npm run dev
```

Server will start on `http://localhost:5000`

## 📧 API Endpoints

### POST `/contact`

Send contact form data.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello!"
}
```

**Response (Success):**
```json
{
  "code": 200,
  "message": "Email sent successfully"
}
```

**Response (Error):**
```json
{
  "code": 400,
  "message": "First name, email, and message are required"
}
```

### GET `/health`

Check if server is running.

**Response:**
```json
{
  "status": "Server is running"
}
```

## 🔒 Security Notes

- Never commit `.env` file to Git
- Use App Passwords, not your regular Gmail password
- Enable CORS only for trusted origins in production
- Consider adding rate limiting for production

## 🛠️ Troubleshooting

### "Less secure app access" error
- Use an App Password instead of your regular password
- Make sure 2-Step Verification is enabled

### Port already in use
- Change the `PORT` in `.env` file
- Or kill the process using port 5000

### Email not sending
- Check your Gmail App Password is correct
- Verify `EMAIL_USER` matches your Gmail account
- Check console logs for detailed error messages

## 📦 Dependencies

- `express` - Web framework
- `cors` - Enable CORS
- `body-parser` - Parse JSON bodies
- `nodemailer` - Send emails
- `dotenv` - Environment variables

## 🔄 Switching Back to Backend

If you want to use this backend instead of EmailJS:

1. Update `Contact.js` to use `fetch()` to call the backend API
2. Set `REACT_APP_API_URL=http://localhost:5000/contact` in your frontend `.env`
3. Start the backend server with `npm start` in the `server/` folder
