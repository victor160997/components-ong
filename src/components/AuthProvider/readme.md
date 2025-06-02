# 🔐 AuthProvider (Firebase)

Componente de contexto para autenticação com Firebase no React.

Inclui:

- Login com e-mail e senha
- Registro de novo usuário
- Logout
- Observação do estado de autenticação
- Tipagem de usuário (`User`)

---

## ⚙️ Pré-requisitos

Este componente foi projetado para projetos que usam **Vite**. Certifique-se de ter suas credenciais do Firebase definidas nas variáveis de ambiente `.env`:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
```

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

## USO ✅

- Envolva sua aplicação com o AuthProvider:

```js
<AuthProvider>
  <App />
</AuthProvider>
```
- Use o hook `useAuth` para acessar as funções de autenticação:
```js
import { useAuth } from "./path/to/AuthProvider";
const { user, login, register, logout, currentUser } = useAuth();
```

### 👤 Tipagem do usuário
```js
interface User {
  id: string;
  email: string;
  displayName: string | null;
}
```