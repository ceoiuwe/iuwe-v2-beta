# 🌐 IUWE v2.0 — Comunidade Bilíngue & Estúdio Interativo (9 Páginas Integrada)

> **Descrição curta para o GitHub (338 caracteres):**
> `IUWE v2.0 (I learn, yoU learn, We learn): Plataforma gratuita e colaborativa de prática de idiomas (4 formatos: Audiocast, Flashcard 3D, Livreto e Vocabulário IA) com Dual Audio (Modo Free/Gemini 24kHz), pacotes offline (.html/.wav), 100% Firebase RTDB, Apps Script Doorkeeper, segurança LGPD e alinhamento aos ODS 4, 8, 9 e 10 da ONU.`

Plataforma colaborativa de aprendizagem e prática de idiomas (`pt-BR`, `en-CA`, `fr-CA`, `en-US`, `es-419` e mais) sob o lema **"Construa Online, Pratique Offline"**, gerando materiais interativos autônomos (`.html` 3D offline, `.wav` 24kHz e `.png`) com foco em **gratuidade, privacidade LGPD, simplicidade, segurança com Gmail dedicado e compartilhamento em primeiro lugar**.

---

## 🎯 1. As 4 Premissas Inegociáveis da Arquitetura IUWE

1. **100% Gratuito (`Ser Gratuito`)**
   - **Tradução Cultural Custo Zero**: Tradução instantânea via endpoint público GTX com preservação integral do sentido e bloqueio de abreviações informais (`"svp"`, `"stp"`, `"vc"`), poupando 100% da cota de texto do usuário.
   - **Motor de Voz Híbrido (`Dual Audio`)**: Opera em **Modo Free de Áudio** (síntese acústica PCM 24kHz limpa + Web Speech API, sem necessidade de chave API) ou em **Modo Gemini 24kHz Neural** (quando o usuário insere sua chave gratuita do Google AI Studio em RAM). Em caso de esgotamento da cota diária (`HTTP 429`), o fallback para o Modo Free é automático.

2. **Privacidade e Segurança em 1º Lugar (`LGPD` + Recomendação de Gmail Dedicado)**
   - **Recomendação de Gmail Dedicado com Senha Exclusiva**: Documentada no Guia de Uso (`guia.html`) e integrada com termos de aceite em `perfil.html`, orientando cada usuário a utilizar uma conta Gmail exclusiva para estudos/chaves AI Studio/Meet com senha diferente de suas contas pessoais ou bancárias.
   - **Zero Exposição de E-mail**: Nenhum endereço de e-mail é armazenado ou exibido nos cards públicos; a identidade social utiliza exclusivamente `@usuario` e nome de exibição.
   - **Cofre de Chave API em Memória Volátil (`AES-256-GCM`)**: A chave Gemini do usuário nunca é enviada ao banco de dados nem gravada em texto puro no navegador.
   - **Ciclo de Vida e Custódia LGPD (Lei 13.709/2018)**: Remoções por arbitragem ou proteção de dados utilizam arquivamento auditável (`ARCHIVED_LGPD`) no Firebase RTDB sem destruição de evidência de integridade (`SHA-256`).

3. **Simples, mas Eficiente**
   - **100% Firebase RTDB (Zero Google Sheets)**: Todos os dados relacionais e o log imutável de auditoria residem no Firebase Realtime Database.
   - **Filtros Combinados de Múltipla Escolha**: Busca instantânea combinando múltiplos valores em 5 dimensões (`Formato`, `@Autor`, `#Tag`, `Idioma` e `Nível CEFR`).

4. **Compartilhar em Primeiro Lugar & Impacto ONU (ODS 4, 8, 9 e 10)**
   - Cada postagem gera um pacote `.html` 3D autônomo que funciona offline em qualquer navegador ou celular, além de áudio `.wav` 24kHz, imagem `.png`, envio rápido para WhatsApp/E-mail e biblioteca pessoal na guia **Salvos**, contribuindo diretamente para os Objetivos de Desenvolvimento Sustentável **ODS 4 (Educação)**, **ODS 8 (Trabalho)**, **ODS 9 (Inovação)** e **ODS 10 (Redução das Desigualdades)**.

---

## 🗂️ 2. As 9 Páginas do Repositório (6 Guias do App + 3 Páginas Institucionais/Guia)

### A. As 6 Guias Principais da Plataforma
| Arquivo | Guia na Plataforma | Função Principal |
| :--- | :--- | :--- |
| `index.html` | **1. Público** | Feed público cronológico com alternância entre `🌍 Todos os Posts Públicos` e `⭐ De Autores & #Tags que Sigo`, 5 filtros multi-seleção e clique em `#tag` no post para seguir. |
| `pessoal.html` | **2. Pessoal** | Exibe `👤 Meus Posts Publicados` do `@usuario` ativo e o botão `Ver Arquivados (LGPD)` para consulta e restauração. |
| `criar.html` | **3. Criar Novo** | Estúdio com os 4 formatos interativos: **1. Audiocast**, **2. Flashcard 3D**, **3. Livreto Ilustrado (Slide Book)** e **4. Vocabulário IA & Ditado**. |
| `contatos.html` | **4. Contatos** | Gestão de conexões (`Conectados`, `Sugestões`, `Convites`) e botão exclusivo **Convidar p/ Google Meet (18+)** com termo de ciência LGPD. |
| `salvos.html` | **5. Salvos** | Biblioteca pessoal pesquisável com todos os posts guardados pelo usuário (`🔖 Salvar`), equipada com os 5 filtros de múltipla escolha. |
| `perfil.html` | **6. Perfil/Tags** | Registro e configuração de `@usuario`, idiomas, **Termos Claros de Aceite (LGPD, Gmail Dedicado e Maioridade 18+)** e painel centralizado para gerenciar ou deixar de seguir `#tags` e `@autores`. |

### B. As 3 Páginas Institucionais, Impacto ONU e Guia do Usuário
| Arquivo | Página | Conteúdo Atualizado para a Arquitetura v2.0 |
| :--- | :--- | :--- |
| `sobre.html` | **Sobre a IUWE** | História real dos 20 anos de aprendizado autodidata, missão *"Construa Online, Pratique Offline"*, apresentação dos 4 formatos interativos, Dual Audio e posicionamento como ferramenta complementar para estudantes e professores da rede pública e privada. |
| `metas-onu.html` | **Metas da ONU (ODS)** | Alinhamento prático da plataforma IUWE v2.0 com a Agenda 2030 da ONU nas metas **ODS 4 (Educação de Qualidade)**, **ODS 8 (Trabalho Decente)**, **ODS 9 (Inovação e Infraestrutura)** e **ODS 10 (Redução das Desigualdades)**. |
| `guia.html` | **Guia de Uso & Segurança** | Recomendação detalhada de uso de **Gmail dedicado com senha exclusiva**, passo a passo do Modo Free vs. Chave Gemini 24kHz em RAM, manual das 6 guias e texto integral dos **Termos de Aceite e Privacidade LGPD**. |

---

## 🛡️ 3. Infraestrutura Cloud & Doorkeeper (Conta Dedicada Isolada)

- **Firebase Realtime Database (100% Dados + Log LGPD)**:
  `https://iuwe-v2-d06c4-default-rtdb.firebaseio.com/`
- **Google Apps Script Web App (`Doorkeeper Anti-Ataque & Mau Uso`)**:
  `https://script.google.com/macros/s/AKfycbxbWXGA2dMJB4y_etqm1aNIwarTYmRs2o5jgnk2sbCphrXCyUprQoIze30NvRRSAkKT/exec`
- **Pasta Raiz de Custódia no Google Drive (`.HTML` / `.WAV`)**:
  `1i776DvoTe_7ZWCaK7PCslQeCVLo66aZ4`

### As 7 Tabelas Relacionais no Firebase RTDB (`database.rules.json`)

1. `/users/{handleKey}` — Perfil público (`handle`, `displayName`, `nativeLang`, `learningLangs`, `isAdult18Plus`, `termsAcceptedLgpd`, `dedicatedGmailAck`), sem e-mail e sem chave de API.
2. `/posts/{archiveId}` — Cabeçalho leve para carregamento instantâneo do Feed e dos 5 filtros múltiplos.
3. `/post_payloads/{archiveId}` — Pacotes `.html` 3D compilados, slides e trilhas `.wav`.
4. `/social_graph/{handleKey}` — Autores seguidos, `#tags` seguidas, `#tags` bloqueadas e IDs salvos.
5. `/contacts/{handleKey}/{targetKey}` — Status de conexão entre parceiros de estudo.
6. `/meet_sessions/{meetId}` — Registro de aceite `18+` e ciência LGPD para salas do Google Meet.
7. `/custody_audit_log/{logId}` — Trilha imutável (*Append-Only*) gravada pelo Doorkeeper com hash `SHA-256` e eventos de segurança LGPD.

---

## 📁 4. Estrutura Completa de Arquivos do Pacote

```text
├── index.html                        # Guia 1: Feed Público (Todos + Seguindo)
├── pessoal.html                      # Guia 2: Feed Pessoal (Meus Posts + Arquivados LGPD)
├── criar.html                        # Guia 3: Estúdio de Criação (4 Ferramentas + Dual Audio)
├── contatos.html                     # Guia 4: Rede de Contatos & Google Meet 18+
├── salvos.html                       # Guia 5: Biblioteca Pessoal de Posts Salvos
├── perfil.html                       # Guia 6: Perfil, Termos de Aceite LGPD & Gestão de #Tags
├── sobre.html                        # Institucional: História, Missão Offline e 4 Ferramentas
├── metas-onu.html                    # Impacto Social: Agenda 2030 da ONU (ODS 4, 8, 9 e 10)
├── guia.html                         # Manual: Gmail Dedicado, Senha Exclusiva, Dual Audio & Termos
├── database.rules.json               # Regras de Segurança e Validação do Firebase RTDB
├── backend-appscript/
│   └── Code.gs                       # Código do Porteiro Doorkeeper (Google Apps Script)
├── .github/
│   └── copilot-instructions.md       # Diretrizes automáticas para o GitHub Copilot no VS Code
├── .vscode/
│   └── settings.json                 # Travas de segurança do workspace para o VS Code
├── iuwe_blueprint_v2.html            # Guia Mestre Interativo da Arquitetura IUWE v2.0
├── LICENSE                           # Licença Proprietária (Todos os Direitos Reservados)
└── README.md                         # Documentação Oficial do Repositório
```

---

## 🔒 5. Licença e Direitos Autorais (`All Rights Reserved`)

Copyright © 2026 **IUWE Platform**. Todos os direitos reservados.

Este repositório e todo o seu código-fonte, arquitetura visual, fluxos pedagógicos e scripts de segurança são **propriedade exclusiva do projeto IUWE**. Nenhuma parte deste código pode ser copiada, reproduzida, distribuída, modificada ou utilizada comercialmente por terceiros sem autorização prévia e expressa por escrito.
