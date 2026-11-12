# 🌐 IUWE v2.0 — Comunidade Bilíngue & Estúdio Interativo (9 Páginas Integradas)

> **Descrição curta para o GitHub (338 caracteres):**
> `IUWE v2.0 (I learn, yoU learn, We learn): Plataforma gratuita e colaborativa de prática de idiomas (4 formatos: Audiocast, Flashcard 3D, Livreto e Vocabulário IA) com Dual Audio (Modo Free/Gemini 24kHz), pacotes offline (.html/.wav), Login Google obrigatório, segurança LGPD e ODS da ONU.`

Plataforma colaborativa de aprendizagem e prática de idiomas (`pt-BR`, `en-CA`, `fr-CA`, `en-US`, `es-419` e mais) sob o lema **"Construa Online, Pratique Offline"**, gerando materiais interativos autônomos (`.html` 3D offline, `.wav` 24kHz e `.png`) com foco em **gratuidade, privacidade LGPD, simplicidade, autenticação obrigatória via Google (Gmail) e compartilhamento em primeiro lugar**.

---

## 🎯 1. As 4 Premissas Inegociáveis da Arquitetura IUWE

1. **100% Gratuito (`Ser Gratuito`)**
* **Tradução Cultural Custo Zero**: Tradução instantânea via endpoint público GTX com preservação integral do sentido e bloqueio de abreviações informais (`"svp"`, `"stp"`, `"vc"`), poupando 100% da cota de texto do usuário.
* **Motor de Voz Híbrido (`Dual Audio`)**: Opera em **Modo Free de Áudio** (síntese acústica PCM 24kHz limpa + Web Speech API, sem necessidade de chave API) ou em **Modo Gemini 24kHz Neural** (quando o usuário insere sua chave gratuita do Google AI Studio em RAM). Em caso de esgotamento da cota diária (`HTTP 429`), o fallback para o Modo Free é automático.


2. **Privacidade e Segurança em 1º Lugar (`LGPD` + Login Obrigatório Gmail)**
* **Autenticação Obrigatória via Google (Gmail)**: Acesso restrito e validado via Firebase Authentication, vinculando de forma determinística o `uid` da conta Google ao seu **ID numérico anônimo de 8 dígitos**.
* **Zero Exposição de E-mail**: Nenhum endereço de e-mail é armazenado ou exibido nos cards públicos; a identidade social utiliza exclusivamente o ID numérico e o `@usuario` anônimo.
* **Cofre de Chave API em Memória Volátil (`AES-256-GCM`)**: A chave Gemini do usuário nunca é enviada ao banco de dados nem gravada em texto puro no navegador.
* **Ciclo de Vida e Custódia LGPD (Lei 13.709/2018)**: Remoções por arbitragem ou proteção de dados utilizam arquivamento auditável (`ARCHIVED_LGPD`) no Firebase RTDB sem destruição de evidência de integridade (`SHA-256`), respeitando o limite de lixeira de 30 dias corridos para opções de restauração pelo próprio autor.


3. **Simples, mas Eficiente**
* **100% Firebase RTDB**: Todos os dados relacionais e o log imutável de auditoria residem no Firebase Realtime Database.
* **Filtros Combinados de Múltipla Escolha**: Busca instantânea combinando múltiplos valores em dimensões flexíveis (`Formato`, `@Autor`, `#Tag`, `Idioma` e `Nível CEFR`).


4. **Compartilhar em Primeiro Lugar & Impacto ONU (ODS 4, 8, 9 e 10)**
* Cada postagem gera um pacote `.html` 3D autônomo que funciona offline em qualquer navegador ou celular, além de áudio `.wav` 24kHz, imagem `.png` e exportação do **Relatório de Impacto de Criador** (contagem de seguidores e downloads), contribuindo diretamente para os Objetivos de Desenvolvimento Sustentável **ODS 4 (Educação)**, **ODS 8 (Trabalho)**, **ODS 9 (Inovação)** e **ODS 10 (Redução das Desigualdades)**.



---

## 🗂️ 2. As 9 Páginas do Repositório (5 Guias Principais + 4 Páginas Institucionais/Guia/Perfil)

### A. As 5 Guias Principais da Plataforma

| Arquivo | Guia na Plataforma | Função Principal |
| --- | --- | --- |
| `index.html` | **1. Público** | Feed público cronológico com alternância entre `🌍 Todos os Posts Públicos` e `⭐ De Autores & #Tags que Sigo`, filtros avançados e clique em `#tag` para seguir. |
| `pessoal.html` | **2. Pessoal** | Exibe `👤 Meus Posts Publicados` do autor logado, gerenciamento de exclusão (com alerta de lixeira de 30 dias) e o botão de exportação do **Relatório de Criador**. |
| `criar.html` | **3. Criar Novo** | Estúdio com os 4 formatos interativos: **Audiocast**, **Flashcard 3D**, **Livreto Ilustrado (Slide Book)** e **Vocabulário IA & Ditado**. |
| `salvos.html` | **4. Salvos** | Biblioteca pessoal pesquisável com todos os posts guardados pelo usuário (`🔖 Salvar`). |
| `perfil.html` | **5. Perfil/Tags** | Configurações de `@usuario`, idiomas de estudo, painel de seguidores/downloads e gestão de `#tags` e `@autores` seguidos. |

### B. As 4 Páginas Institucionais, Impacto ONU e Utilitárias

| Arquivo | Página | Conteúdo da Versão v2.0 |
| --- | --- | --- |
| `sobre.html` | **Sobre a IUWE** | História dos 20 anos de aprendizado autodidata, missão *"Construa Online, Pratique Offline"* e apresentação dos formatos interativos. |
| `metas-onu.html` | **Metas da ONU (ODS)** | Alinhamento prático com a Agenda 2030 nas metas **ODS 4**, **ODS 8**, **ODS 9** e **ODS 10**. |
| `guia.html` | **Guia de Uso & Segurança** | Manual das guias, instruções de uso do Dual Audio e diretrizes de segurança da conta. |
| `contatos.html` | **Redirecionamento / Suporte** | Página interna de suporte e transição estrutural da comunidade. |

---

## 📁 3. Estrutura Completa de Arquivos do Pacote

```text
├── index.html                    # Guia 1: Feed Público (Todos + Seguindo + Login Google)
├── pessoal.html                  # Guia 2: Feed Pessoal (Meus Posts + Lixeira 30 Dias + Relatório)
├── criar.html                    # Guia 3: Estúdio de Criação (4 Ferramentas + Dual Audio)
├── salvos.html                   # Guia 4: Biblioteca Pessoal de Posts Salvos
├── perfil.html                   # Guia 5: Perfil, Métricas de Criador & Gestão de #Tags
├── sobre.html                    # Institucional: História, Missão Offline e Ferramentas
├── metas-onu.html                # Impacto Social: Agenda 2030 da ONU (ODS 4, 8, 9 e 10)
├── guia.html                     # Manual: Autenticação, Dual Audio & Termos
├── contatos.html                 # Utilitário de Suporte e Redirecionamento
├── database.rules.json           # Regras de Segurança e Validação do Firebase RTDB (Auth Required)
├── backend-appscript/
│   └── Code.gs                   # Código do Porteiro Doorkeeper (Google Apps Script)
├── .github/
│   └── copilot-instructions.md   # Diretrizes automáticas para o GitHub Copilot
├── .vscode/
│   └── settings.json             # Travas de segurança do workspace para o VS Code
├── iuwe_blueprint_v2.html          # Guia Mestre Interativo da Arquitetura IUWE v2.0
├── LICENSE                       # Licença Proprietária (Todos os Direitos Reservados)
└── README.md                     # Documentação Oficial do Repositório

```

---

## 🔒 4. Licença e Direitos Autorais (`LICENSE`)


```text
Copyright (c) 2026 IUWE Platform. Todos os direitos reservados.

Nenhuma parte deste código-fonte, arquitetura visual ou scripts de automação pode 
ser copiada, modificada, redistribuída ou utilizada comercialmente sem autorização 
prévia e expressa por escrito do autor.

```
