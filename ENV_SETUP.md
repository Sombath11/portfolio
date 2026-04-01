# Environment Setup Guide

This guide will help you configure the environment variables needed for your portfolio to work properly.

## Quick Start

1. **Copy `.env.example` to `.env`** in the root directory
2. **Fill in your EmailJS credentials** - Follow the instructions below
3. **Start the app** - Run `npm start`

---

## Frontend Configuration (.env)

### Required Variables (EmailJS)

| Variable | Description | How to Get |
|----------|-------------|------------|
| `REACT_APP_EMAILJS_PUBLIC_KEY` | Your EmailJS Public Key | See EmailJS setup below |
| `REACT_APP_EMAILJS_SERVICE_ID` | Your EmailJS Service ID | See EmailJS setup below |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | Your EmailJS Template ID | See EmailJS setup below |

### EmailJS Setup Instructions

**Step 1: Create an EmailJS Account**

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free plan includes:
   - 200 emails/month
   - 2 email templates
   - 1 email service

**Step 2: Add an Email Service**

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select your email provider (Gmail, Outlook, etc.) or use custom SMTP
4. Follow the connection instructions
5. Copy the **Service ID** (e.g., `service_abc123`)

**Step 3: Create an Email Template**

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use the following template variables:

```
Subject: Contact Form: {{from_name}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}

Message:
{{message}}
```

4. Customize the design as needed
5. Save the template
6. Copy the **Template ID** (e.g., `template_xyz789`)

**Step 4: Get Your Public Key**

1. Go to **Account** (click your name in top right)
2. Select **API Keys** from the menu
3. Copy the **Public Key** (e.g., `user_abc123xyz`)

**Step 5: Configure Your .env File**

Paste your credentials into the `.env` file:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=user_abc123xyz
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
```

---

## Optional: Mailchimp Newsletter Configuration

If you want to enable the newsletter subscription in the footer:

| Variable | Description | How to Get |
|----------|-------------|------------|
| `REACT_APP_MAILCHIMP_URL` | Mailchimp subscribe URL | See Mailchimp instructions |
| `REACT_APP_MAILCHIMP_U` | Mailchimp User ID | See Mailchimp instructions |
| `REACT_APP_MAILCHIMP_ID` | Mailchimp Audience ID | See Mailchimp instructions |

### Mailchimp Setup

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

## Running the Application

### Start the Frontend

```bash
npm start
```

The app should open at `http://localhost:3000`

### Test the Contact Form

1. Fill out the contact form with your details
2. Click "Send"
3. Check your email inbox for the message

---

## Production Deployment

When deploying to production:

1. **Update your EmailJS settings**:
   - In EmailJS dashboard, you can restrict which domains can send emails
   - Add your production domain to the allowed origins

2. **Update environment variables** with production values (if needed)

3. **Never commit `.env` files** to version control (they're in `.gitignore`)

---

## Troubleshooting

### Contact form not sending

- Verify all three EmailJS variables are set correctly in `.env`
- Check that your EmailJS service is connected (green status in dashboard)
- Make sure your template ID matches exactly
- Check the browser console for specific error messages
- Verify you haven't exceeded your EmailJS free plan limits (200 emails/month)

### EmailJS error: "Invalid Public Key"

- Double-check you copied the Public Key correctly (no extra spaces)
- Make sure you're using the Public Key, not the Private Key

### EmailJS error: "Service not found"

- Verify the Service ID is correct
- Make sure the service is active in your EmailJS dashboard

### EmailJS error: "Template not found"

- Verify the Template ID is correct
- Make sure the template exists in your EmailJS account

### Newsletter not working

- Verify all Mailchimp variables are set correctly
- Check that your Mailchimp audience is active
- Test the Mailchimp URL directly in your browser

---

## Security Notes

⚠️ **Important Security Practices:**

1. **Never commit `.env` files** - They contain sensitive credentials
2. **Use environment variables** - Never hardcode credentials in source code
3. **Restrict domains in EmailJS** - Add only your production domains in EmailJS settings
4. **Monitor usage** - Keep track of your EmailJS monthly email limit

---

## EmailJS vs Backend Server

This portfolio now uses **EmailJS** for the contact form, which means:

✅ **No backend server required** - Emails are sent directly from the browser
✅ **Easier deployment** - No need to host a separate server
✅ **Free tier available** - 200 emails/month on the free plan
✅ **Simple setup** - Just configure environment variables

The `server/` folder is now optional and can be removed if you don't need it.
