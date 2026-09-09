# 📘 Module 01 — AI Architecture, Model Selection & Advanced Terminology

![Status](https://img.shields.io/badge/status-complete-brightgreen)
![Module](https://img.shields.io/badge/module-01-blue)
![Focus](https://img.shields.io/badge/focus-AI%20Architecture%20%7C%20Model%20Selection%20%7C%20Prompt%20Engineering-orange)
![Stack](https://img.shields.io/badge/stack-React%20%7C%20Node.js%2FExpress%20%7C%20MySQL-informational)
![License](https://img.shields.io/badge/license-personal--learning-lightgrey)

> Part of the [AI Full-Stack Web Developer Course](../README.md) learning journey — documenting concepts as they are actually learned and applied, not as speculative theory.

---

## 📑 Table of Contents

- [1. Overview](#1-overview)
- [2. The Anatomy of an AI Application](#2-the-anatomy-of-an-ai-application)
  - [2.1 The "Brain" — LLM API / Inference Layer](#21-the-brain--llm-api--inference-layer)
  - [2.2 The Backend — Orchestrator](#22-the-backend--orchestrator)
  - [2.3 The Frontend — The Interface](#23-the-frontend--the-interface)
  - [2.4 The Database — Data & Memory Layer](#24-the-database--data--memory-layer)
  - [2.5 System Diagram](#25-system-diagram)
- [3. Essential Terminology for AI Architects](#3-essential-terminology-for-ai-architects)
  - [3.1 Context Windows & Tokens](#31-context-windows--tokens)
  - [3.2 Parameters / Weights](#32-parameters--weights)
  - [3.3 Inference vs. Training](#33-inference-vs-training)
  - [3.4 Latency vs. Throughput](#34-latency-vs-throughput)
- [4. Controlling the Model — The Knobs](#4-controlling-the-model--the-knobs)
  - [4.1 Temperature, Top-k & Top-p](#41-temperature-top-k--top-p)
  - [4.2 Recommended Settings by Task](#42-recommended-settings-by-task)
- [5. Model Selection Strategy](#5-model-selection-strategy)
- [6. Prompt Engineering Strategies](#6-prompt-engineering-strategies)
  - [6.1 System Prompts vs. User Prompts](#61-system-prompts-vs-user-prompts)
  - [6.2 Key Prompting Techniques](#62-key-prompting-techniques)
- [7. Core Takeaways](#7-core-takeaways)
- [8. Cheatsheet](#8-cheatsheet)

---

## 1. Overview

This module builds the mental model for how an AI-powered web application actually works end-to-end — from the moment a user types a message to the moment a response streams back to their screen. It covers the four architectural layers of an AI app, the vocabulary needed to reason about model behavior and cost, the sampling parameters that control output style, a framework for choosing the right model for a given job, and the core techniques used to write effective prompts.

The central teaching device used throughout is a **high-end restaurant analogy**, mapping each architectural layer to a role in a restaurant.

---

## 2. The Anatomy of an AI Application

> 🍽️ **The Restaurant Analogy:** Every AI application, no matter how complex, breaks down into the same four roles you'd find in a high-end restaurant — a chef, a waiter, a dining room, and an order logbook.

### 2.1 The "Brain" — LLM API / Inference Layer

| Restaurant Role | System Component |
|---|---|
| **The genius chef** | The foundation model (e.g., GPT, Gemini, Claude) |
| **The kitchen** | The model provider's inference infrastructure |
| **The order ticket** | The prompt sent via the API |

- External services like the OpenAI API or Anthropic API act as translators between application code and the underlying neural network.
- The model is knowledgeable across countless "recipes" — solutions, explanations, code patterns — but is **locked in the kitchen**: it never sees the user directly and only "cooks" based on what's written on the ticket (the prompt).
- Models sit behind an API with no inherent knowledge of your users — they respond only to the prompts and data explicitly sent to them.

### 2.2 The Backend — Orchestrator

| Restaurant Role | System Component |
|---|---|
| **The waiter** | Node.js / Express (or FastAPI) backend |
| **Taking the order correctly** | Authentication & permission checks |
| **Relaying a precise ticket to the kitchen** | Prompt engineering & context construction |

The orchestrator is the application's logic layer. It manages:

- **Prompt Engineering** — formatting raw user input into a structured prompt for the LLM.
- **Authentication & Guardrails** — verifying users and filtering malicious input before it reaches the model.
- **Asynchronous Tasks** — managing long-running generations so requests don't time out.

> **Example:** A user says *"I want that spicy thing I had last time."* The backend translates that into a precise instruction — the AI equivalent of *"Dish #42, extra chili, for table 5"* — by combining the message with past history, system instructions, and any retrieved documents into one clean prompt.

### 2.3 The Frontend — The Interface

| Restaurant Role | System Component |
|---|---|
| **The menu & dining room** | React (Vite) UI |
| **Wine poured slowly, not dumped** | Token-by-token response streaming |

- The frontend does **not** run the model — it presents the interface where users type messages, see responses, and interact with controls.
- Modern AI apps commonly stream responses in real time via **Server-Sent Events (SSE)**, producing a token-by-token "typing" effect that makes the AI feel more alive and responsive.

### 2.4 The Database — Data & Memory Layer

| Restaurant Role | System Component |
|---|---|
| **The order history logbook** | MySQL / relational DB |
| **Numerical recipe index for rare ingredients** | Vector DB (Pinecone, ChromaDB) |
| **The head waiter briefing the chef** | Injecting chat history into the prompt |

- The model has **amnesia** — it doesn't remember past interactions unless they're explicitly resent.
- The backend stores chat messages and user data, then reads the relevant history back before each API call so the model *appears* to remember prior turns.
- **Vector Databases** (Pinecone, ChromaDB): store data as numerical vectors for **Retrieval-Augmented Generation (RAG)**, letting the AI access external, real-time knowledge.
- **Relational Databases** (MySQL, PostgreSQL): store user profiles, session metadata, and chat history.

### 2.5 System Diagram

```
┌──────────────────┐        ┌───────────────────────┐        ┌──────────────────┐
│     FRONTEND      │        │        BACKEND         │        │    LLM API        │
│  React (Vite)      │─────▶ │  Node.js / Express      │─────▶  │  (GPT / Gemini /   │
│  "Menu & Dining"    │◀──── │  "The Waiter"           │◀──────  │   Claude)          │
│  SSE streaming UI  │        │  Auth · Guardrails ·    │        │  "The Chef"        │
└──────────────────┘        │  Prompt Construction    │        └──────────────────┘
                             └───────────┬─────────────┘
                                         │
                                         ▼
                             ┌───────────────────────┐
                             │      DATABASE LAYER     │
                             │  MySQL (chat history,   │
                             │  user profiles) +        │
                             │  Vector DB (RAG context) │
                             │  "The Order Logbook"     │
                             └───────────────────────┘
```

---

## 3. Essential Terminology for AI Architects

### 3.1 Context Windows & Tokens

- **Context Window:** the number of tokens a model can process in a single prompt. A larger window lets the model access more information, producing more coherent and comprehensive responses.
- **Token:** the smallest unit of text a model processes — roughly three-quarters of an English word.
- Gemini models are purpose-built with especially long context windows to handle large volumes of information.

**Why it matters:** tokens drive billing costs and define the ceiling of a model's "memory." Every product decision involving text length or conversation history ultimately comes back to tokens.

**Scale reference — what 1M tokens can hold (any one of):**

| Input Type | Approx. Volume |
|---|---|
| Lines of code (80 chars/line) | ~50,000 lines |
| Text messages | 5 years' worth |
| Novels | 8 average-length novels |
| Podcast transcripts | 200+ average episodes |
| Video (no audio) | ~1 hour |
| Video (with audio) | ~45 minutes |
| Audio only | ~9.5 hours |

### 3.2 Parameters / Weights

**Parameters (Weights)** are the internal numbers a model learns during training. A "70 billion parameter" model is described roughly by its size and capacity — more parameters generally mean more capability, but slower and more expensive inference.

**Why it matters:** it's a quick heuristic for comparing models — a 7B model can run on a laptop; a 400B+ model needs serious infrastructure.

### 3.3 Inference vs. Training

| Concept | Definition | Frequency |
|---|---|---|
| **Training** | The one-time, expensive process of building the model | Happens once |
| **Inference** | Running the trained model to produce an output | Happens on every user request |

**Why it matters:** inference is where product costs actually live. Model and infrastructure choice directly determines feature speed and cost for every single user.

### 3.4 Latency vs. Throughput

| Metric | Definition | Optimize For When… |
|---|---|---|
| **Latency** | Time a single request takes (user-facing) | Building a chatbot — users hate waiting |
| **Throughput** | Requests handled per second (system-level) | Running a batch processor — e.g., 10,000 docs overnight |

These two often trade off against each other — the right optimization target depends entirely on the use case.

---

## 4. Controlling the Model — The Knobs

Sampling techniques govern how a model chooses its next token: the model assigns probabilities to candidate tokens, and the sampling method determines which one gets picked.

### 4.1 Temperature, Top-k & Top-p

| Knob | What It Does | Low / Small Setting | High / Large Setting |
|---|---|---|---|
| **Temperature** | Reshapes the probability distribution over next tokens (range ~0–2) | Safer, more predictable text | More creative, varied text |
| **Top-k** | Restricts choices to the *k* most probable tokens | Narrow, focused, "on-script" answers (e.g., k=5) | Wider variety, more surprising output (e.g., k=50) |
| **Top-p (Nucleus Sampling)** | Dynamically selects the smallest set of tokens whose combined probability ≥ *p* | Narrow when the answer is obvious (p=0.9 → almost always "Paris") | Broader when multiple good options exist (p=0.95 → may include "Lyon," "Marseille") |

> **Note:** Top-p and Top-k are generally used as *alternatives* rather than together — Top-p is considered the more dynamic, adaptive choice.

### 4.2 Recommended Settings by Task

| Task Type | Temperature | Top-p | Goal |
|---|---|---|---|
| **Coding / Factual Q&A** | Low (~0.2) | Moderate (~0.8) | Precision, on-topic accuracy |
| **Creative Writing / Brainstorming** | High (~0.8) | High (~0.95) | Imaginative, unique ideas |
| **General Chat / Conversation** | Balanced (~0.5) | Moderate (~0.9) | Predictability + personality |

---

## 5. Model Selection Strategy

> 🚗 **Analogy:** Choosing a model is like choosing an engine for your car — balancing power, cost, and fuel usage for the specific job.

Five factors determine the right model for an application:

1. **Parameter Size**
   - **7B–8B (Small):** fast, inexpensive — good for simple chatbots, categorization, summarization.
   - **70B+ (Large):** slower, pricier — better for complex reasoning, coding, hard logic.
   - **400B+ (Huge):** best performance at the highest cost — reserve for tasks that truly need it.

2. **Context Window Size**
   - **~8K tokens:** fine for normal chat and short documents.
   - **100K+ tokens:** handles long PDFs, research papers, or multi-document input — key for RAG.
   - **1M+ tokens (e.g., Gemini configurations):** analyzes extremely large codebases or transcripts.
   - Rule of thumb: pick a context window that matches your maximum expected prompt size.

3. **Modality**
   - **Text-only** (e.g., Llama 3): sufficient for pure text chat.
   - **Multimodal / vision-enabled** (e.g., GPT-5.4, Gemini 3.1, Claude 4.5 with vision): required for analyzing screenshots, photos, or PDFs containing images.

4. **Capability Specialization**
   - Some models are stronger at coding (e.g., Claude 3.5 Sonnet, GPT-4o); others excel at creative writing or dialogue.
   - "Lite"/fast variants (e.g., Gemini Flash, GPT-4o-mini) trade a small amount of quality for speed and low cost — ideal for high-traffic features.

5. **Pricing & Provider Model**

   | Option | Description | Pros | Cons |
   |---|---|---|---|
   | **A — Proprietary** (GPT-4o, Gemini Pro, Claude 3.5 Sonnet) | Hosted by cloud providers, accessed via API key | Easy integration, highly capable, scales automatically | Ongoing per-token cost, less control |
   | **B — Open-Source** (Llama 3, Mistral, Gemma) | Self-hosted on your own hardware/cloud | Full control & privacy | Requires managing GPUs/servers — added complexity |

   **Cost strategy:** use cheaper models (GPT-4o-mini, Gemini Flash) for ~80–90% of everyday tasks, and reserve expensive flagship models (GPT-5.5, Claude Opus) for rare, high-value queries needing maximum quality.

   > **Course recommendation:** Use **Option A (Gemini or OpenAI)** to focus on building features rather than maintaining infrastructure.

---

## 6. Prompt Engineering Strategies

Prompt engineering is the practice of designing and structuring inputs to guide generative AI systems toward accurate, relevant, and contextually appropriate outputs.

### 6.1 System Prompts vs. User Prompts

| Prompt Type | Role | Example |
|---|---|---|
| **System Prompt** | Sets overall behavior, persona, and rules | *"You are a helpful Python tutor who explains concepts using simple analogies and provides code examples."* |
| **User Prompt** | The specific, per-turn request | *"Explain what a decorator is."* |

> **Pro tip:** Use system prompts to enforce consistent behavior across conversations — e.g., a customer support bot's tone guidelines, restricted topics, and error-handling rules.

### 6.2 Key Prompting Techniques

Demonstrated below using a single running example task: *"Explain the concept of climate change, its causes, and its effects in a way that is accessible to a general audience."*

| Prompt Structure | Description |
|---|---|
| **Direct Instructions** | Clear, specific commands ("write a poem about nature") — ideal when the expected output is unambiguous. |
| **Open-Ended Instructions** | Broader prompts ("tell me about the universe") that give the model freedom — useful for brainstorming or exploration. |
| **Task-Specific Instructions** | Precise, goal-oriented prompts (e.g., translation, summarization) — often combined with few-shot or zero-shot techniques. |

**Zero-shot prompting** — the model performs the task with no examples, relying entirely on pretrained knowledge.
```
Explain the concept of climate change, its causes, and its effects in simple terms.
```

**Few-shot prompting** — a handful of examples are provided to demonstrate the expected tone and format.
```
Explain topics in simple terms.

Example 1:
Topic: Photosynthesis
Explanation: Photosynthesis is how plants use sunlight, water, and air to make their own food.

Example 2:
Topic: Gravity
Explanation: Gravity is the force that pulls things toward each other, like keeping us on the ground.

Now explain:
Topic: Climate Change
Explanation:
```

**Chain of Thought (CoT) prompting** — the model is guided to reason step by step, breaking the task into smaller logical parts.
```
Explain climate change step by step.
Step 1: Define what climate change is.
Step 2: Explain the main causes of climate change.
Step 3: Describe the effects of climate change on the planet.
Step 4: Give a simple conclusion.

Now follow these steps to explain climate change in simple terms.
```

---

## 7. Core Takeaways

> 💡 **Core Takeaway #1 — Architecture:** Every AI app is four layers working together — a stateless "brain" (LLM), a stateful "waiter" (backend/orchestrator), a presentation layer (frontend), and a memory system (database) that reconstructs context on every single request.

> 💡 **Core Takeaway #2 — Terminology:** Tokens are the universal unit of both cost and memory. Context window size, parameter count, and latency/throughput trade-offs should all be evaluated in terms of the specific product use case — not in the abstract.

> 💡 **Core Takeaway #3 — Sampling:** Temperature, Top-k, and Top-p all shape *how adventurous* the model's next-token choice is. Lower settings for precision (coding, facts); higher settings for creativity (brainstorming, fiction).

> 💡 **Core Takeaway #4 — Model Selection:** Choosing a model is a five-factor trade-off — size, context window, modality, specialization, and price — not a single "best" model for every job. Cheap/fast models should handle the bulk of traffic; flagship models are reserved for high-value queries.

> 💡 **Core Takeaway #5 — Prompting:** System prompts set the rules of the game; user prompts play it. Zero-shot, few-shot, and Chain of Thought are progressively more guided techniques for steering a model toward reliable, high-quality output.

---

## 8. Cheatsheet

```text
ARCHITECTURE
  LLM API        → The Chef      (has amnesia, no direct user contact)
  Backend         → The Waiter    (auth, guardrails, prompt construction)
  Frontend        → The Menu      (UI + SSE streaming)
  Database        → The Logbook   (MySQL = relational, Vector DB = RAG)

TERMINOLOGY
  Token           → smallest text unit (~¾ of a word)  → drives cost + memory
  Context Window  → max tokens per prompt               → bigger = more context
  Parameters      → model size/capacity (7B–400B+)       → bigger = smarter, slower, pricier
  Training        → happens once
  Inference       → happens every request                → where cost lives
  Latency         → single request speed (user-facing)
  Throughput      → requests/sec (system-facing)

SAMPLING KNOBS
  Temperature ↓   → predictable   | Temperature ↑ → creative
  Top-k small     → focused       | Top-k large    → surprising
  Top-p low       → narrow pool   | Top-p high     → diverse pool

  Coding/Facts:      Temp 0.2 | Top-p 0.8
  Creative Writing:  Temp 0.8 | Top-p 0.95
  General Chat:      Temp 0.5 | Top-p 0.9

MODEL SELECTION (5 FACTORS)
  1. Parameter size     4. Capability specialization
  2. Context window      5. Pricing / hosting model
  3. Modality

PROMPT TECHNIQUES
  Zero-shot   → no examples, relies on pretraining
  Few-shot    → a few examples guide tone/format
  Chain of Thought → step-by-step reasoning
```

---

<div align="center">

**⬅ Previous Module** | [🏠 Course Home](../README.md) | **Next Module ➡**

</div>
