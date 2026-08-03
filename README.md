# gmc-session-management
A session management system built with React.js and Laravel, featuring secure authentication, user management, and a modern dashboard.

## Environment

Configure the frontend to talk to the Laravel backend with one of these variables:

- `VITE_API_BASE_URL=https://your-laravel-domain.com`
- `VITE_PAYMENT_PROOF_ENDPOINT=https://your-laravel-domain.com/api/payment-proofs`

`VITE_API_BASE_URL` is the preferred option because the app can reuse it for multiple API calls.

### Important

If the frontend is deployed on `https`, it cannot submit payment proofs to `http://127.0.0.1:8000` because browsers block insecure mixed-content requests. In that case, either:

- run the frontend locally with Laravel, or
- expose Laravel through a public `https` URL and use that URL in the env vars above.
