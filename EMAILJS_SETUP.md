# Configuration EmailJS pour le Portfolio

## Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" pour créer un compte gratuit
3. Confirmez votre email

### 2. Configurer le service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email (Gmail recommandé)
4. Suivez les instructions pour connecter votre compte Gmail
5. Notez le **Service ID** (ex: service_abc123)

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```
Subject: Nouveau message de {{from_name}} - Portfolio

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Envoyé depuis le portfolio de Meriam Sikini
```

4. Dans les paramètres du template :
   - **To Email**: meriamsikini@gmail.com
   - **From Name**: {{from_name}}
   - **Reply To**: {{from_email}}
5. Notez le **Template ID** (ex: template_xyz789)

### 4. Obtenir la clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key** (ex: user_abc123def456)

### 5. Mettre à jour le code
Dans le fichier `script.js`, remplacez :

```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Remplacez par votre Public Key
```

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
// Remplacez YOUR_SERVICE_ID et YOUR_TEMPLATE_ID
```

### Exemple de configuration finale :
```javascript
emailjs.init("user_abc123def456");

emailjs.send('service_gmail123', 'template_contact456', templateParams)
```

## Alternative simple : Formspree

Si vous préférez une solution encore plus simple :

1. Allez sur [https://formspree.io/](https://formspree.io/)
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Remplacez le formulaire HTML par :

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" placeholder="Your name" required />
  <input type="email" name="email" placeholder="Your email" required />
  <textarea name="message" placeholder="Your message..." required></textarea>
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

## Test
1. Après configuration, testez le formulaire
2. Vérifiez que vous recevez bien l'email à meriamsikini@gmail.com
3. Vérifiez les spams si vous ne recevez rien

## Limites gratuites
- **EmailJS**: 200 emails/mois
- **Formspree**: 50 emails/mois

## Support
Si vous avez des problèmes, consultez :
- [Documentation EmailJS](https://www.emailjs.com/docs/)
- [Documentation Formspree](https://help.formspree.io/)
