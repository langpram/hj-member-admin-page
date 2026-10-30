# React + TypeScript + Vite

## Firebase Cloud Firestore

The dashboard reads the `agen`, `transaksi`, and `penukaran` collections from
Cloud Firestore in project `hjkarpet-member`. The Firebase web app configuration
is set in `src/lib/firebase.ts`. Create the Firestore database in Firebase
Console if it does not exist yet.

## Admin login

The login portal uses Firebase Authentication (Email/Password). In Firebase
Console, enable the Email/Password provider and create the admin account with
email `admin@hjkarpet.com`. The login form accepts `admin` as the username for
that email. Set the initial password in Firebase Console; passwords are not
stored in the frontend or repository.

The portal uses session-only auth persistence, so closing the browser session
requires signing in again. In Firebase Authentication settings, enable email
enumeration protection, use a strong password policy, and enable multi-factor
authentication for the admin account when available.

Restrict Firestore access to this admin account. The current UI only reads
Firestore, so keep writes denied until admin create/update/delete operations
are implemented. Replace any earlier test rule such as `allow read: if true`;
Firestore grants access if any matching rule allows it.

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isAdmin() {
      return request.auth != null
        && request.auth.token.email == 'admin@hjkarpet.com';
    }

    match /agen/{docId} {
      allow read: if isAdmin();
      allow write: if false;
    }
    match /transaksi/{docId} {
      allow read: if isAdmin();
      allow write: if false;
    }
    match /penukaran/{docId} {
      allow read: if isAdmin();
      allow write: if false;
    }
  }
}
```

Collections may be empty; the dashboard then shows zero counts and an empty
activity list. Add documents with fields such as:

```text
agen/{id}:       { nama: "Nama Agen", lokasi: "Bandung", status: "aktif", poin: 12500 }
transaksi/{id}:  { status: "terverifikasi", tanggal: Timestamp, poin: 100, nomorInvoice: "INV-001", namaAgen: "Nama Agen", admin: "Admin" }
penukaran/{id}:  { status: "menunggu" }
```

The dashboard requires Firestore read access for these collections. Configure
Firebase Authentication and restrictive Firestore Security Rules before
production; do not make member data publicly readable.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
