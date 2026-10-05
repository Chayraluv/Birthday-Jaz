import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, BookOpen, Cake, Check, ChevronDown, Heart, Moon, Sparkles, Star, Sun, X } from "lucide-react";
import "./styles.css";

const wishes = [
  { icon: "🌸", title: "Happiness", text: "May you enjoy your life, make beautiful memories, and always have little reasons to smile." },
  { icon: "🌿", title: "Good Health", text: "May Allah protect your health, give you strength, and make every season of life easier for you." },
  { icon: "💰", title: "Rezeki", text: "May Allah bless you with abundant, halal and barakah-filled rezeki, in ways you expect and ways you don't." },
  { icon: "📚", title: "Learning & Success", text: "May everything you learn become beneficial and open doors to a future that is even better than you imagined." },
  { icon: "💍", title: "Future Husband™", text: "May Allah give you someone who actually matches you — kind, responsible, emotionally available, supportive, and someone who helps you become closer to Allah.", funny: "Please choose wisely. The recruitment process is important. 😭" },
  { icon: "🕌", title: "Deen", text: "May Allah continue guiding you and make you a good servant of Him. Solat on time, okay? 😭 And don't forget your Quran — even a little every day. 🤍" }
];

const letter = `Happy Birthday, Nurin!! 🎂💗

Another year older, another year of surviving life HAHAHA. 😂

I pray that this new chapter of your life will be filled with more happiness, good health, rezeki yang luas, and lots of beautiful moments. May Allah make everything you're working towards easier for you, and may He bless you with success in your studies, your future career, and basically everything you put your heart into. ✨

And semoga one day you get the best husband who actually matches you — someone who understands you, supports you, makes you laugh, takes care of you, and most importantly, helps you become closer to Allah. 🤲🏻

HAHAHA yes, the husband application is open, but please choose wisely. 😭

Most importantly, I hope you continue becoming a better servant of Allah, little by little. Jangan lupa solat on time okay 😭 and try to read the Quran every day, even if it's just a little. We don't need to become perfect overnight — just keep coming back to Allah. 🤍

I also pray that you'll always be surrounded by good people, good opportunities, and good things that bring you closer to the life you want.

And of course... good luck with everything!! May Allah protect you from unnecessary drama, questionable decisions, bad people, and men who say "I can fix him" but actually need fixing themselves. 😭🙏🏻

Thank you for being part of my life and for all the memories we've had.

I don't know what the future holds for us, or where life will take each of us after this, but I genuinely hope that if our paths are meant to cross again, Allah will make it happen at the right time. 🥹🤍

Until then, please take care of yourself, eat properly, sleep enough, don't stress too much, and remember that you're doing better than you think.

May Allah bless your age, your time, your health, your rezeki, your studies, your future, and your heart.

Happy Birthday again, Nurin! 🎂💐

May this year be kinder to you, happier for you, and full of things that make you say:
"Alhamdulillah, I'm glad I made it this far." 🤍`;

function FloatingDecor() {
  return (
    <div className="decor" aria-hidden="true">
      {["✦","♡","✧","·","✦","♡","✧","·"].map((x,i) => (
        <motion.span
          key={i}
          className={`float f${i}`}
          animate={{ y: [0, -14, 0], rotate: [0, 8, -5, 0], opacity: [.35,.8,.35] }}
          transition={{ duration: 4+i*.35, repeat: Infinity, ease: "easeInOut", delay: i*.3 }}
        >{x}</motion.span>
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [surprise, setSurprise] = useState(false);

  const openGift = () => {
    setOpened(true);
    setTimeout(() => document.getElementById("birthday")?.scrollIntoView({ behavior: "smooth" }), 250);
  };

  const finalSurprise = () => {
    setSurprise(true);
    confetti({ particleCount: 150, spread: 85, origin: { y: 0.62 } });
    setTimeout(() => confetti({ particleCount: 90, spread: 120, origin: { y: 0.4 } }), 350);
  };

  return (
    <main>
      <FloatingDecor />

      <AnimatePresence>
        {!opened && (
          <motion.section className="cover" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: .7 }}>
            <div className="moon-orb"><span>♡</span></div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .25 }}>
              <p className="mini">A little something for you...</p>
              <h1>Hey Nurin... <span>👀</span></h1>
              <p className="cover-sub">Someone has something to tell you.</p>
              <button className="primary" onClick={openGift}>✨ Open Your Birthday Surprise ✨</button>
              <p className="tiny">best opened with a little bit of curiosity ♡</p>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      {opened && (
        <>
          <section className="hero" id="birthday">
            <div className="hero-glow" />
            <div className="hero-inner">
              <motion.div initial={{ scale: .7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="cake">🎂</motion.div>
              <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>04 · 10 · 2026</motion.p>
              <motion.h1 initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .1 }}>Happy Birthday,<br/><em>Nurin!</em></motion.h1>
              <motion.p className="hero-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>Another year older, another year of surviving life HAHAHA. 😂</motion.p>
              <a className="scroll-hint" href="#letter"><ArrowDown size={18}/> scroll for your little surprise</a>
            </div>
          </section>

          <section className="paper-section" id="letter">
            <div className="paper">
              <SectionTitle eyebrow="A little birthday letter 💌" title="For you, Nurin">
                A few words from someone who is very, very concerned about you. 😭
              </SectionTitle>
              <div className="letter">
                {letter.split("\n\n").map((p,i) => <p key={i}>{p}</p>)}
              </div>
              <div className="signature">with love, prayers & unnecessary concern ♡</div>
            </div>
          </section>

          <section className="wishes-section">
            <SectionTitle eyebrow="Things I wish for you" title="May life be gentle with you. 🌷">
              Six tiny wishes, because apparently one birthday wish wasn't enough.
            </SectionTitle>
            <div className="wish-grid">
              {wishes.map((w,i) => (
                <motion.article className="wish-card" key={w.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i*.06 }}>
                  <div className="wish-icon">{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                  {w.funny && <span className="funny">{w.funny}</span>}
                </motion.article>
              ))}
            </div>
          </section>

          <section className="reminder-section">
            <div className="reminder-card">
              <div className="alert-icon">🚨</div>
              <SectionTitle eyebrow="A very important birthday reminder" title="Nurin, please pray on time. 😭">
                Yes. This website has officially become a concerned-friend intervention.
              </SectionTitle>
              <p className="reminder-text">And please read your Quran every day, okay? Even a little. Consistency &gt; trying to be perfect for three days and then disappearing for three weeks. 😭</p>
              <button className="soft-button" onClick={() => setReminder(true)}>Okay okay, I get it 😭</button>
              <AnimatePresence>
                {reminder && <motion.div className="response" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><Check size={18}/> Good girl. Now go pray. 🕌🤍</motion.div>}
              </AnimatePresence>
            </div>
          </section>

          <section className="night-section">
            <div className="stars"><Star/><Star/><Sparkles/><Star/></div>
            <Moon className="big-moon" />
            <div className="night-content">
              <span className="eyebrow">If our paths cross again 🌙</span>
              <h2>Until we meet again...</h2>
              <p>I don't know where life will take us from here.</p>
              <p>Maybe we'll meet again.</p>
              <p>Maybe we'll end up living completely different lives.</p>
              <p>But if Allah has written our paths to cross again, I hope we'll meet at the right time, in the right place, as better versions of ourselves.</p>
              <p>Until then, take care of yourself.</p>
              <blockquote>"I hope we'll look back one day and say,<br/><strong>Wow, we really made it through all that.</strong>" 🤍</blockquote>
            </div>
          </section>

          <section className="final-section">
            <div className="final-card">
              <div className="mini-cake">🎁</div>
              <span className="eyebrow">one last thing...</span>
              <h2>Ready for your final surprise?</h2>
              <button className="primary" onClick={finalSurprise}>🎁 One Last Surprise</button>
              <AnimatePresence>
                {surprise && (
                  <motion.div className="reveal" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="reveal-heart">💗</div>
                    <h3>Happy Birthday, Nurin! 🥳</h3>
                    <p>May Allah bless you always, wherever life takes you.</p>
                    <small>Made with love, prayers, and slightly unnecessary concern about your solat. 😭🤍</small>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          <footer>
            <Heart size={14} fill="currentColor"/> for Nurin, with lots of doa <Heart size={14} fill="currentColor"/>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>back to top ↑</button>
          </footer>
        </>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
