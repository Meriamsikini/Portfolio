# EmailJS configuration

The contact form sends messages through EmailJS's browser API. Configure the
three Vite environment variables below before running or building the site.

## 1. Set up EmailJS

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Add an email service and note its **Service ID**.
3. Create an email template and note its **Template ID**.
4. In the template, set the recipient to `meriamsikini@gmail.com`, use
   `{{from_name}}` as the sender name and `{{from_email}}` as the reply-to
   address. Include `{{message}}` in the message body.
5. Copy the account's **Public Key**.

## 2. Configure local development

Vite is configured to load environment files from `src`. The EmailJS values
should be in `src/.env` (the existing file is already ignored by Git). For a
new setup, copy `.env.example` to `src/.env` and fill in the values:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the Vite development server after editing the environment file. The
contact form reports an explicit configuration message until all three values
are present. Vite exposes `VITE_*` values to the browser, so use only the
EmailJS public key here, never a private key.

## 3. Verify the template fields

The form submits these template parameters:

| Variable | Form value |
| --- | --- |
| `{{from_name}}` | Visitor's name |
| `{{from_email}}` | Visitor's email address |
| `{{message}}` | Visitor's message |

Test the form on the deployed site and confirm that the email arrives at the
configured recipient. Check EmailJS's dashboard and spam folder if it does not.
