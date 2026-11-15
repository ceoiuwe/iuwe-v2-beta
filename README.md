# 🎧 IUWE v2.0 — I learn, yoU learn, We learn

**Plataforma Participativa e Gratuita de Prática de Idiomas com Vozes Naturais (IA), Flashcards 3D, Livretos Ilustrados e Vocabulário Contextual**

🔗 **Acesso Oficial (Beta Aberto):** [https://ceoiuwe.github.io/iuwe-v2/](https://www.google.com/search?q=https://ceoiuwe.github.io/iuwe-v2/)

📦 **Repositório Oficial:** <https://github.com/ceoiuwe/iuwe-v2>

## 🌍 Propósito e Filosofia (IUWE v2.0)

A **IUWE (*I learn, yoU learn, We learn*)** nasceu da jornada autodidata de aprender idiomas ao longo de anos e da convicção de que qualquer pessoa deve ter acesso gratuito a ferramentas de pronúncia, escuta ativa e memorização — como complemento prático às aulas formais, escolas de idiomas e professores particulares.

Na versão **v2.0**, a plataforma opera no modelo **Estúdio Aberto + Sincronização Híbrida Sob Demanda**:

* **Uso Imediato sem Bloqueio Inicial:** Qualquer visitante pode explorar o **Feed Público**, ouvir materiais da comunidade e criar conteúdos imediatamente nas 4 ferramentas sem precisar preencher cadastro prévio.

* **Sincronização na Nuvem Sob Demanda (Google OAuth 2.0):** Ao clicar em **Salvar**, abrir o histórico **Pessoal** / **Salvos** ou sincronizar dispositivos, o usuário pode vincular sua Conta Google (ou sua Chave Criptográfica Portátil de 128 bits) mantendo seu **ID anônimo de 8 dígitos (`@12345678`)** no Feed.

## 🛠️ Os 4 Formatos Interativos do Estúdio (v2.0)

| Ferramenta | Descrição Prática | Recursos Offline & Exportação | 
| ----- | ----- | ----- | 
| **1. Audiocast (`🎙️`)** | Diálogos e trilhas de repetição espaçada com alternância de vozes, velocidades (`0.5x` a `2.0x`) e pausas inteligentes para *shadowing*. | Exportação em `.WAV` unificado (44.1 kHz) ou `.HTML` interativo offline. | 
| **2. Flashcard 3D (`🃏`)** | Cartões com giro tridimensional (Frente + até 3 idiomas simultâneos no Verso), dicas de contexto e áudio independente por idioma. | Exportação em `.HTML` interativo 3D com áudio embutido ou imagem `.PNG`. | 
| **3. Livreto Ilustrado (`📖`)** | Sequência de até 5 cenas visuais (16:9) com diálogo trilíngue sincronizado, modo *Slideshow* e ocultação de texto para treino de *listening*. | Exportação do livreto completo em `.HTML` standalone offline. | 
| **4. Vocabulário IA (`🧠`)** | Geração automática de listas temáticas de termos e frases aplicadas em até 3 idiomas com exercício de ditado interativo (*Dictation Check*). | Exportação do caderno interativo com áudio e ditado em `.HTML` offline. | 

## 🏗️ Arquitetura Modular v2.0 (Opção A — Motor Centralizado)

Toda a plataforma **IUWE v2.0** é composta por **10 páginas leves** que compartilham um único motor JavaScript centralizado (`iuwe-core.js`), garantindo manutenção simples e carregamento rápido no GitHub Pages:

| Arquivo | Função na Plataforma v2.0 | 
| ----- | ----- | 
| `iuwe-core.js` | **Motor Centralizado Compartilhado (v2.0):** Contém toda a lógica de áudio Dual (Web Speech API Gratuita + Gemini 24kHz TTS), renderização do Feed, filtros multi-seleção, métricas deduplicadas, autenticação Google OAuth e criptografia RSA-OAEP 2048-bit. | 
| `firebase-config.js` | Configuração pública de conexão com o projeto Firebase (`iuwe-v2-d06c4`) para autenticação OAuth 2.0 e banco em tempo real. | 
| `index.html` | **Feed Público:** Vitrine comunitária com busca multi-filtro por idioma nativo, idioma-alvo, ferramenta, voz e tags. | 
| `pessoal.html` | **Feed Pessoal & KPIs:** Acervo das criações do próprio usuário e painel de métricas de impacto (Visualizações, Downloads e Seguidores). | 
| `criar.html` | **Estúdio de Criação:** Acesso direto aos 4 módulos de autoria com controle de cotas diárias leves. | 
| `salvos.html` | **Biblioteca de Salvos:** Materiais favoritados pelo usuário para revisão rápida no celular ou computador. | 
| `perfil.html` | **Configurações & Privacidade (LGPD):** Gestão do ID de 8 dígitos, idiomas preferidos, tags seguidas/bloqueadas e cofre de chave Gemini API em RAM. | 
| `contatos.html` | **Rede & Comunidade:** Descoberta de criadores e tags seguidas. | 
| `sobre.html` | **Sobre a IUWE:** História do projeto, missão educacional e identidade visual. | 
| `Fato_Curioso.html` | **Fatos & Neurociência:** Curiosidades sobre aquisição de idiomas e memória auditiva. | 
| `metas-onu.html` | **Metas da ONU (ODS 4, 8, 9 e 10):** Alinhamento de impacto social e educação aberta até 2030. | 
| `guia.html` | **Guia de Uso & Segurança:** Passo a passo para estudantes, boas práticas de chave de API e arquitetura de privacidade. | 
| `REGRAS_FIREBASE_RTDB.json` | Regras de segurança do Firebase Realtime Database para proteção de autoria e isolamento criptográfico. | 

## 🔐 Segurança, Privacidade (LGPD) e Zero-Knowledge

1. **Anonimato Público no Feed (`@12345678`):** Nenhum nome real, foto pessoal ou endereço de e-mail é exibido nos cards públicos da comunidade.

2. **Criptografia Assimétrica RSA-OAEP 2048-bit + Blind Index SHA-256:** Quando o usuário opta por conectar sua Conta Google para sincronizar seu histórico na nuvem, a verificação de identidade no nó `/kyc_verified_users` utiliza exclusivamente hash cego irreversível (`SHA-256`) e pacote cifrado com chave pública `RSA-OAEP-256` (zero e-mail em texto limpo no banco de dados).

3. **Cofre de Chave de API em Memória Volátil (BYOK):** O usuário pode usar o **Modo Voz Gratuita do Navegador** sem nenhuma chave, ou conectar sua própria chave gratuita do Google AI Studio cifrada em memória RAM (`AES-256-GCM`) apenas durante a sessão ativa.

4. **Métricas Anti-Fraude Deduplicadas por Aparelho:** Contadores de visualizações e downloads exigem interação humana real (dar play no áudio, girar o flashcard 3D ou avançar páginas) e contabilizam no máximo 1 evento único por dispositivo/post.

## 🎯 Alinhamento com os Objetivos de Desenvolvimento Sustentável (ONU 2030)

* **ODS 4 (Educação de Qualidade):** Democratização do treino diário de conversação e compreensão auditiva sem barreiras financeiras.

* **ODS 8 (Trabalho Decente e Crescimento Econômico):** Capacitação linguística prática para ampliar oportunidades profissionais globais.

* **ODS 9 (Indústria, Inovação e Infraestrutura):** Arquitetura web leve, *offline-first* e acessível em conexões móveis limitadas.

* **ODS 10 (Redução das Desigualdades):** Acesso aberto a ferramentas de Inteligência Artificial generativa e síntese vocal neural.