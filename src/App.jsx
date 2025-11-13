import React, { useState } from 'react'
import projects from './data/projects'

const tabs = ['Projects', 'About', 'Contact']

export default function App() {
    const [tab, setTab] = useState('Projects')
    return (
        <div className="mx-auto max-w-5xl px-6 py-10">
            <header className="mb-8">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow">
                    <h1 className="text-3xl font-bold tracking-tight">Hari Vatte</h1>
                    <p className="mt-2 text-slate-300">
                        Sr. Full-Stack .NET Developer � C# � .NET 8 � React � Azure � SQL
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        {tabs.map(t => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={"rounded-xl px-4 py-2 text-sm font-medium " + (tab === t ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-200 hover:bg-slate-700")}
                            >
                                {t}
                            </button>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="ml-auto rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </header>

            {tab === 'Projects' && (
                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map(p => (
                        <article key={p.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow">
                            <h3 className="text-lg font-semibold">{p.title}</h3>
                            <p className="mt-1 text-sm text-slate-300">{p.summary}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.stack.map(s => (
                                    <span key={s} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-200">{s}</span>
                                ))}
                            </div>
                            <div className="mt-4 flex gap-2">
                                {p.live && (
                                    <a className="rounded-xl bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-500" href={p.live} target="_blank" rel="noreferrer">Live</a>
                                )}
                                <a className="rounded-xl bg-slate-800 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-700" href={p.repo} target="_blank" rel="noreferrer">Code</a>
                            </div>
                        </article>
                    ))}
                </section>
            )}

            {tab === 'About' && (
                <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow">
                    <h3 className="text-xl font-semibold">About</h3>
                    <p className="mt-2 text-slate-300">
                        Full-stack engineer focused on .NET microservices, clean APIs, and modern frontends.
                        I enjoy building performant, cloud-ready systems and mentoring teams.
                    </p>
                </section>
            )}

            {tab === 'Contact' && (
                <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow">
                    <h3 className="text-xl font-semibold">Contact</h3>
                    <p className="mt-2 text-slate-300">Email: harishchinna04@gmail.com � Phone: 574-217-6093</p>
                    <p className="mt-1 text-slate-400 text-sm">Serverless demo: <code>/.netlify/functions/hello</code> after deploy.</p>
                </section>
            )}

            <footer className="mt-10 text-center text-sm text-slate-400">� {new Date().getFullYear()} Hari Vatte</footer>
        </div>
    )
}
