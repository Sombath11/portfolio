# Environment Setup Guide

This guide will help you configure the environment variables needed for your portfolio to work properly.

## Quick Start

1. **Frontend Configuration** - Copy `.env.example` to `.env` in the root directory
2. **Backend Configuration** - Copy `.env.example` to `.env` in the `server` directory
3. **Fill in your values** - Follow the instructions below

---

## Frontend (.env)

### Required Variables

| Variable | Description | How to Get |
|----------|-------------|------------|
| `REACT_APP_API_URL` | Backend API endpoint | Default: `http://localhost:5000/contact` |
| `REACT_APP_MAILCHIMP_URL` | Mailchimp subscribe URL | See Mailchimp instructions below |
| `REACT_APP_MAILCHIMP_U` | Mailchimp User ID | See Mailchimp instructions below |
| `REACT_APP_MAILCHIMP_ID` | Mailchimp Audience ID | See Mailchimp instructions below |

### Mailchimp Setup (Optional)

If you want to enable the newsletter subscription:

1. Go to [Mailchimp](https://mailchimp.com/) and log in
2. Navigate to **Audience** > **Signup forms** > **Embedded forms**
3. Copy the form HTML code
4. Extract these values from the `action` attribute:
   - **URL**: Everything before `?u=` (e.g., `https://list-manage.com/subscribe/post`)
   - **u**: The value after `?u=` (your User ID)
   - **id**: The value after `&id=` (your Audience ID)

Example from Mailchimp form:
```html
<form action="https://list-manage.com/subscribe/post?u=abc123&id=def456" ...>
```
- `REACT_APP_MAILCHIMP_URL=https://list-manage.com/subscribe/post`
- `REACT_APP_MAILCHIMP_U=abc123`
- `REACT_APP_MAILCHIMP_ID=def456`

---

## Backend (server/.env)

### Required Variables

| Variable | Description | How to Get |
|----------|-------------|------------|
| `PORT` | Server port | Default: `5000` |
| `ALLOWED_ORIGINS` | CORS allowed URLs | Default: `http://localhost:3000,http://127.0.0.1:3000` |
| `EMAIL_USER` | Your Gmail address | Your Gmail account |
| `EMAIL_PASS` | Gmail App Password | See Gmail instructions below |
| `RECIPIENT_EMAIL` | Where to receive messages | Usually same as `EMAIL_USER` |

### Gmail App Password Setup

**Important**: You cannot use your regular Gmail password. You must create an App Password.

1. Go to your [Google Account](https://myaccount.google.com/)
2. Select **Security** from the left menu
3. Under "Signing in to Google", enable **2-Step Verification** (if not already enabled)
4. Go back to **Security** and select **App passwords**
5. In the "App" dropdown, select **Mail**
6. In the "Device" dropdown, select **Other (Custom name)**
7. Enter a name like "Portfolio Contact Form" and click **Generate**
8. Google will show a 16-character password (e.g., `abcd efgh ijkl mnop`)
9. Copy this password **without spaces** and paste it in `.env`

Example:
```
EMAIL_USER=sombath@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

---

## Testing

### Start the Backend Server
```bash
cd server
npm start
```

You should see:
```
🚀 Server running on http://localhost:5000
📧 Contact endpoint: http://localhost:5000/contact
```

### Start the Frontend
```bash
npm start
```

The app should open at `http://localhost:3000`

### Test Contact Form
1. Fill out the contact form
2. Click "Send"
3. Check your email inbox for the message

---

## Production Deployment

When deploying to production:

1. **Update `REACT_APP_API_URL`** to your production backend URL
2. **Update `ALLOWED_ORIGINS`** to include your production frontend URL
3. **Never commit `.env` files** to version control (they're in `.gitignore`)

Example production values:
```
# Frontend .env
REACT_APP_API_URL=https://your-api.com/contact

# Backend .env
ALLOWED_ORIGINS=https://your-portfolio.com,https://www.your-portfolio.com
```

---

## Troubleshooting

### Contact form not sending
- Check that backend server is running (`npm start` in `server` folder)
- Verify `EMAIL_USER` and `EMAIL_PASS` are correct
- Make sure 2-Step Verification is enabled for Gmail
- Check the browser console for errors

### CORS errors
- Verify `ALLOWED_ORIGINS` includes your frontend URL
- Make sure there are no spaces in the comma-separated list
- Restart the backend server after changing `.env`

### Newsletter not working
- Verify all Mailchimp variables are set correctly
- Check that your Mailchimp audience is active
- Test the Mailchimp URL directly in your browser

---

## Security Notes

⚠️ **Important Security Practices:**

1. **Never commit `.env` files** - They contain sensitive credentials
2. **Use App Passwords** - Never use your regular Gmail password
3. **Restrict CORS** - Only allow trusted origins in production
4. **Use environment variables** - Never hardcode credentials in source code
