# Firebase API Key Security

The Firebase API key in this project is intentionally public as per Firebase's web application architecture.

Security is ensured through:

- Domain restrictions (key only works on specified domains)
- Firebase Security Rules (data access control)
- Authentication requirements

This is the standard and recommended approach for Firebase web applications.

References:

- https://firebase.google.com/docs/projects/api-keys
- https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
