type ChatIntent = {
    keywords: string[];
    response: string;
};

export const chatResponses: ChatIntent[] = [
    {
        keywords: ["hello", "hi", "hey", "greetings", "wassup", "sup", "morning", "evening", "who", "are", "you"],
        response: "Hey there! 👋 I'm Chitresh's AI agent. I can tell you about his projects, skills, tech stack, or how to contact him.",
    },
    {
        keywords: ["project", "projects", "work", "built", "build", "portfolio", "made", "created", "showcase", "experience"],
        response: "Chitresh has built some complex systems!\n• **DevPulse** — An AI-powered developer dashboard utilizing React, Django, and GitHub/Gemini APIs.\n• **Freelance Platform** — A marketplace with Stripe escrow, built on Django and PostgreSQL.\n\nWant the technical details on any of these?",
    },
    {
        keywords: ["skill", "skills", "tech", "technology", "stack", "language", "code", "coding", "framework", "database", "use", "know", "good at"],
        response: "Chitresh is a Full-Stack & AI developer.\n🐍 **Languages**: Python, C/C++, JS/TS, SQL\n⚛️ **Frameworks**: React, Next.js, Django, Tailwind\n🤖 **AI**: Gemini API, Scikit-learn, Colab\n🗄️ **Tools**: PostgreSQL, Git, Linux",
    },
    {
        keywords: ["education", "college", "university", "study", "degree", "grad", "graduating", "student", "btech", "school"],
        response: "🎓 Chitresh is currently pursuing a **B.Tech in Computer Science** at Acropolis Institute of Technology and Research (CGPA: 8.15), graduating in 2027.",
    },
    {
        keywords: ["hackathon", "achievement", "award", "competition", "win", "won", "prize", "milestone", "accomplish"],
        response: "🏆 Chitresh loves hackathons and competitive coding!\n• Advanced to Round 2 in Kriyeta 4.0\n• Built AI prediction models at AI Fusion Hackathon\n• Successfully completed the 100 Days of CodeXpress 2.0 challenge.",
    },
    {
        keywords: ["certificate", "certification", "nptel", "course", "certified", "learn"],
        response: "📜 His notable certifications include:\n• **NPTEL DBMS** (Ranked Top 2% among 7000+ candidates)\n• **NPTEL Python for Data Science**\n• Various local institution programming milestones.",
    },
    {
        keywords: ["contact", "how can i contact you", "connect", "email", "phone", "reach", "hire", "job", "freelance", "opportunity", "work", "touch", "call"],
        response: "Looking to work together? Let's talk.\n📧 chitresh.gurjar8779@gmail.com\n📱 +91 7828227301\n🔗 Find him on GitHub or LinkedIn (links in the footer).",
    },
    {
        keywords: ["devpulse", "command center", "developer dashboard", "dashboard"],
        response: "**DevPulse** is an AI-powered hub reducing context switching for developers. It uses a decoupled React + Django architecture and leverages the Gemini API as an AI Code Auditor to review commits.",
    },
    {
        keywords: ["freelance platform", "escrow", "marketplace", "stripe", "payment"],
        response: "The **Freelance Platform** is a secure marketplace he built testing his backend chops. It uses Django REST Framework, PostgreSQL, and integrates Stripe APIs specifically to handle escrow payments between clients and freelancers.",
    },
    {
        keywords: ["ai", "machine learning", "ml", "artificial intelligence", "models", "gemini", "prompt"],
        response: "Chitresh specializes in bridging AI with practical apps. He works with the Gemini API for LLM integrations and uses Python, Scikit-learn, and Pandas for data-driven modeling.",
    },
    {
        keywords: ["resume", "cv", "download", "paperwork", "document"],
        response: "You can request Chitresh's full resume by sending him an email at chitresh.gurjar8779@gmail.com!",
    },
    {
        keywords: ["joke", "funny", "laugh", "humor"],
        response: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    }
];

export function getResponse(input: string): string {
    const normalizedInput = input.toLowerCase().replace(/[^\w\s]/gi, ''); // Remove punctuation
    const words = normalizedInput.split(/\s+/).filter(w => w.length > 0);

    if (words.length === 0) return "I deal in words! Try asking a question.";

    let bestMatch = null;
    let highestScore = 0;

    for (const intent of chatResponses) {
        let score = 0;
        // Check for direct word matches (more accurate for small inputs)
        for (const word of words) {
            if (intent.keywords.includes(word)) {
                score += 2; // Exact word match gets higher weight
            } else {
                // Check if the input word is a substring of the keyword or vice versa 
                // (handles plurals/conjugations like "projects" vs "project")
                for (const kw of intent.keywords) {
                    if (word.length > 3 && (kw.includes(word) || word.includes(kw))) {
                        score += 1;
                    }
                }
            }
        }

        // Check for exact phrase matches within the input (e.g. "tech stack")
        for (const kw of intent.keywords) {
            if (kw.includes(' ') && normalizedInput.includes(kw)) {
                score += 3; // Phrase matches are highly valuable
            }
        }

        if (score > highestScore) {
            highestScore = score;
            bestMatch = intent;
        }
    }

    if (bestMatch && highestScore > 0) {
        return bestMatch.response;
    }

    // Fallback response if no keywords matched
    const fallbacks = [
        "That's an interesting question! I don't have the exact answer pre-programmed, but Chitresh can definitely help you with that. Feel free to shoot him an email!",
        "Hmm, my circuits are drawing a blank on that one. Try asking about his **tech stack**, **projects**, or how to **hire** him! 🤔",
        "I'm just a simple AI with limited context. I know a lot about Chitresh's code, but not everything else! Ask me about his latest builds.",
        "I couldn't quite parse that. Could you try rephrasing? (Hint: try 'what can you build' or 'how can I contact you')"
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}
