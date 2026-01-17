// Quick test script to verify Gmail SMTP credentials
const fs = require('fs');
const nodemailer = require('nodemailer');

// Read .env.local file
const envFile = fs.readFileSync('.env.local', 'utf8');
const envVars = {};
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    envVars[match[1].trim()] = match[2].trim();
  }
});

const gmailUser = envVars.GMAIL_USER;
const appPassword = envVars.GMAIL_APP_PASSWORD?.replace(/\s+/g, "").trim();

console.log('\n=== Gmail SMTP Test ===');
console.log('Gmail User:', gmailUser);
console.log('App Password Length:', appPassword?.length);
console.log('App Password Preview:', appPassword?.substring(0, 4) + '****');
console.log('');

if (!gmailUser || !appPassword) {
  console.error('❌ Missing credentials in .env.local');
  process.exit(1);
}

if (appPassword.length !== 16) {
  console.error(`❌ Invalid app password length: ${appPassword.length} (expected 16)`);
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: gmailUser,
    pass: appPassword,
  },
});

console.log('Testing SMTP connection...\n');

transporter.verify()
  .then(() => {
    console.log('✅ SMTP connection successful!');
    console.log('Your Gmail credentials are working correctly.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ SMTP connection failed!');
    console.error('Error:', error.message);
    console.error('Error Code:', error.code);
    if (error.response) {
      console.error('SMTP Response:', error.response);
    }
    console.error('\nPossible issues:');
    console.error('1. App password doesn\'t belong to', gmailUser);
    console.error('2. App password was revoked or regenerated');
    console.error('3. 2-Step Verification is not enabled');
    console.error('4. There\'s a typo in the password');
    process.exit(1);
  });

