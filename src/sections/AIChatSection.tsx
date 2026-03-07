"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Terminal } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import RevealText from "@/components/RevealText";
import { getResponse } from "@/lib/chatResponses";
import { personalInfo } from "@/lib/data";

interface Message {
    role: "user" | "bot";
    content: string;
}

const SUGGESTED_QUESTIONS = [
    "What's your tech stack?",
    "Tell me about your projects",
    "How can I contact you?",
];

export default function AIChatSection() {
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: `System initialized. I'm ${personalInfo.name.split(' ')[0]}'s portfolio assistant. Ask me anything about his work or skills.` }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSend = async (text: string) => {
        if (!text.trim()) return;

        setMessages(prev => [...prev, { role: "user", content: text }]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const response = getResponse(text);
            setMessages(prev => [...prev, { role: "bot", content: response }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <section id="chat" className="section-dark py-[80px] md:py-[120px] px-8 md:px-12 border-t border-[#2a2a2a] overflow-hidden relative z-10">
            <div className="max-w-[1200px] mx-auto">
                <SectionWrapper>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="heading-section text-3xl md:text-5xl lg:text-6xl tracking-widest leading-[0.85] flex flex-col">
                            <RevealText text="PORTFOLIO AI" />
                            {/* <RevealText text="AI /" delay={0.4} /> */}
                        </div>
                    </div>
                </SectionWrapper>

                <div className="grid md:grid-cols-12 gap-8">
                    <SectionWrapper delay={0.1} className="md:col-span-5 hidden md:flex md:flex-col md:justify-center">
                        <h3 className="heading-display text-4xl mt-12 mb-6 text-[#efece6]">
                            Ask me <br />anything.
                        </h3>
                        <p className="font-mono text-xs uppercase tracking-widest text-[#555] mb-5">Suggested prompts</p>
                        <div className="space-y-3">
                            {SUGGESTED_QUESTIONS.map(q => (
                                <button
                                    key={q}
                                    onClick={() => handleSend(q)}
                                    className="group block w-full text-left font-mono text-sm px-6 py-5 border border-[#2a2a2a] rounded-xl text-[#7a7a7a] hover:text-[#efece6] hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.03)] transition-all duration-200"
                                >
                                    <span className="opacity-50 mr-2 group-hover:opacity-100 transition-opacity duration-200">→</span>
                                    {q}
                                </button>
                            ))}
                        </div>
                    </SectionWrapper>

                    <div className="md:col-span-7">
                        <SectionWrapper delay={0.2}>
                            <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl overflow-hidden flex flex-col h-[400px] shadow-2xl">
                                {/* Sleek macOS style Header */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a2a] bg-[#0a0a0a]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#7a7a7a]">zsh — portfolio-ai</span>
                                    <Terminal size={14} className="text-[#4a4a4a]" />
                                </div>

                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
                                    {messages.map((msg, i) => (
                                        <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                            <div className={`max-w-[85%] font-mono text-sm leading-relaxed ${msg.role === "user"
                                                ? "bg-[#efece6] text-[#1a1a1a] px-5 py-3 rounded-2xl rounded-tr-sm"
                                                : "bg-[#222222] text-[#efece6] px-5 py-3 rounded-2xl rounded-tl-sm border border-[#2a2a2a]"
                                                }`}>
                                                {msg.content}
                                            </div>
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="bg-[#222222] text-[#7a7a7a] font-mono text-sm px-5 py-3 rounded-2xl border border-[#2a2a2a] animate-pulse">
                                                typing...
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Minimalist Input */}
                                <form
                                    onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                                    className="p-3 border-t border-[#2a2a2a] bg-[#0a0a0a]"
                                >
                                    <div className="flex relative items-center">
                                        <span className="absolute text-[#7a7a7a] font-mono text-sm" style={{ left: '16px' }}>{'>'}</span>
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder="Enter command..."
                                            style={{ paddingLeft: '36px' }}
                                            className="w-full bg-transparent pr-12 py-2 font-mono text-sm text-[#efece6] focus:outline-none placeholder-[#4a4a4a]"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!input.trim() || isTyping}
                                            className="absolute right-2 p-1.5 text-[#7a7a7a] hover:text-[#efece6] disabled:opacity-50 transition-colors"
                                        >
                                            <Send size={14} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </SectionWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
}
