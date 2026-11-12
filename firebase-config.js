// ============================================================================
// CONFIGURAÇÃO CENTRALIZADA DO FIREBASE AUTH + RTDB — IUWE v3.0
// Repositório Oficial: https://github.com/ceoiuwe/iuwe-v2
// URL GitHub Pages:    https://ceoiuwe.github.io/iuwe-v2/
// ============================================================================
// COMO PREENCHER:
// 1. Acesse https://console.firebase.google.com/ e abra o projeto "iuwe-v2-d06c4"
// 2. Clique na engrenagem (Configurações do Projeto) -> aba "Geral"
// 3. Role até "Seus aplicativos", copie os dados do Web App e substitua abaixo:
// ============================================================================

window.IUWE_FIREBASE_CONFIG = {
    apiKey: "COLE_AQUI_SUA_API_KEY_DO_FIREBASE",
    authDomain: "iuwe-v2-d06c4.firebaseapp.com",
    databaseURL: "https://iuwe-v2-d06c4-default-rtdb.firebaseio.com",
    projectId: "iuwe-v2-d06c4",
    storageBucket: "iuwe-v2-d06c4.firebasestorage.app",
    messagingSenderId: "COLE_AQUI_SEU_MESSAGING_SENDER_ID",
    appId: "COLE_AQUI_SEU_APP_ID"
};

// Quando true, exige obrigatoriamente o Pop-up Oficial do Google OAuth (impede simulação local)
window.IUWE_ENFORCE_STRICT_GOOGLE_OAUTH = true;
