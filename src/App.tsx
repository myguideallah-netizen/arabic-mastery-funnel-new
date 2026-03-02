/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Star, 
  Gift, 
  ShoppingCart, 
  CreditCard, 
  PlayCircle, 
  MessageCircle,
  ArrowRight,
  Heart,
  Moon
} from 'lucide-react';

const CTA_LINK = "https://governmentshiksha.com/product/arabic-learning-course/";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      {/* 1. Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-emerald-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 text-center text-sm md:text-base font-medium flex items-center justify-center gap-2">
          <Moon className="w-4 h-4 text-gold-400" />
          <span>Assalamo Alaikum! Welcome to Team Government Shiksha.</span>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/islamic/1920/1080?blur=10')] opacity-5 bg-cover bg-center mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-medium text-sm mb-8 border border-emerald-200">
              <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
              <span>Trusted by 10,000+ Students</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-slate-900 leading-tight mb-6">
              Assalamo Alaikum! <span className="text-emerald-700">🌙</span><br />
              Kya Aap Bhi Quran Ki Zubaan (Arabic) Ko Asani Se Samajhna Chahte Hain?
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Alhamdulillah, bina kisi technical knowledge ke, apne mobile se ghar baithe Arabic seekhein.
            </p>
            
            <motion.a
              href={CTA_LINK}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-lg md:text-xl font-bold px-8 py-5 rounded-full shadow-[0_0_40px_rgba(217,119,6,0.4)] hover:shadow-[0_0_60px_rgba(217,119,6,0.6)] transition-all duration-300"
            >
              Alhamdulillah, Aaj Hi Shuru Karein
              <ArrowRight className="w-6 h-6" />
            </motion.a>
            <p className="mt-4 text-sm text-slate-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Safe & Secure Checkout
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. The Problem & Agitation Section */}
      <section className="py-24 bg-slate-900 text-white px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-center mb-16">
              Lekin Problem Kya Hai?<br />
              <span className="text-emerald-400 text-2xl md:text-4xl">(Kyun Log Seekh Nahi Paate?)</span>
            </h2>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                "Bade institutes ki fees bahut zyada hoti hai.",
                "Online payment karne mein darr lagta hai.",
                "Tech knowledge na hone se ghabrahat hoti hai."
              ].map((problem, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
                >
                  <XCircle className="w-8 h-8 text-red-400 shrink-0 mt-1" />
                  <p className="text-lg md:text-xl text-slate-200">{problem}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. The Solution & Story Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mb-8">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-8 leading-tight">
              Mashallah, Team Government Shiksha Laya Hai Ek Behtareen Hal!
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Hamein pata hai ki aapko kya chahiye. Isiliye humne ek aisa platform banaya hai jo bilkul <strong className="text-emerald-700">'zero technical knowledge'</strong> walo ke liye hai. InshaAllah, aap sirf kuch clicks mein padhai shuru kar denge.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4. What You Will Learn */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-center text-slate-900 mb-16">
              Is Course Mein Aap Kya Seekhenge?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: BookOpen, title: "Quranic Vocabulary", desc: "Quran ke aam alfaz aur unke mayne asani se samjhein." },
                { icon: MessageCircle, title: "Basic Conversation", desc: "Rozmarra ki zindagi mein boli jane wali Arabic." },
                { icon: Star, title: "Grammar Made Easy", desc: "Bina bhari rules ke, asaan tareeqe se grammar." },
                { icon: PlayCircle, title: "Video Lessons", desc: "High-quality videos jo aap kabhi bhi dekh sakte hain." },
                { icon: ShieldCheck, title: "Lifetime Access", desc: "Ek baar khareedein, zindagi bhar padhein." },
                { icon: Heart, title: "Spiritual Connection", desc: "Namaz aur duaon ka matlab samajh kar padhein." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. The Shocking Price Reveal */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-8">
              Toh Is Premium Course Ki Keemat Kya Hai?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Market mein iski keemat asani se <span className="line-through text-slate-400">₹5000+</span> hai. Par hamara maqsad taleem ko aam karna hai. Isiliye hamare Arabic Course ki regular fee sirf...
            </p>
            <div className="inline-block bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8 md:p-12 mb-8">
              <div className="text-6xl md:text-8xl font-black text-emerald-700 mb-4 tracking-tighter">
                ₹999
              </div>
              <div className="text-emerald-800 font-medium text-lg">One-time payment. Lifetime access.</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. THE IRRESISTIBLE MEGA BUMP OFFER */}
      <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,120,87,0.2)_0%,transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <div className="relative rounded-[2.5rem] p-1 bg-gradient-to-br from-gold-400 via-emerald-500 to-gold-600 shadow-[0_0_50px_rgba(4,120,87,0.3)]">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg flex items-center gap-2 whitespace-nowrap">
                <Gift className="w-4 h-4" /> Limited Time Offer
              </div>
              
              <div className="bg-slate-900 rounded-[2.4rem] p-8 md:p-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-8 leading-tight">
                  🎁 MASHALLAH! EK AISA OFFER JO AAPNE KABHI NAHI DEKHA HOGA!
                </h2>
                
                <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                  Hamara Arabic Course ₹999 ka hai. Lekin rukiye! Agar aap aaj Arabic ke sath <strong className="text-white">Urdu, Sanskrit, ya English</strong> speaking course bhi apni cart mein add karte hain...
                </p>
                
                <div className="py-8 my-8 border-y border-slate-700/50">
                  <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 leading-tight">
                    ...Toh InshaAllah, baaki teeno courses aapko padenge SIRF ₹99 (har ek)! 🎉
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 text-left border border-slate-700">
                  <h4 className="text-gold-400 font-bold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Dhyan dein:
                  </h4>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    In sabhi (Urdu, Sanskrit, English) courses ki asali keemat individually ₹999 hai. Agar aap alag se lenge toh ₹999 har ek ka lagega. Par Arabic ke sath bundle banane par sirf ₹99 har ek! <strong className="text-emerald-400">Alhamdulillah, ye ek life-changing deal hai.</strong>
                  </p>
                </div>
                
                <div className="mt-12">
                  <motion.a
                    href={CTA_LINK}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xl md:text-2xl font-bold px-10 py-6 rounded-full shadow-[0_0_40px_rgba(217,119,6,0.5)] hover:shadow-[0_0_60px_rgba(217,119,6,0.7)] transition-all duration-300 w-full md:w-auto"
                  >
                    Claim This Offer Now
                    <ArrowRight className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Step-by-Step Buying Guide */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-center text-slate-900 mb-16">
              Course Kaise Khareedein?<br />
              <span className="text-emerald-600 text-2xl md:text-4xl">(Bas 3 Aasan Kadam)</span>
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-200 before:to-transparent">
              {[
                { icon: ShoppingCart, title: "Step 1: Add to Cart", desc: "Website par Arabic course aur ₹99 wale offers ko chun kar 'Add to Cart' dabayein." },
                { icon: CheckCircle2, title: "Step 2: Basic Details", desc: "'Checkout' par click karke apni basic details bharein." },
                { icon: CreditCard, title: "Step 3: Secure Payment", desc: "Safe aur secure tareeqe se payment puri karein. (100% Safe Checkout)" }
              ].map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-emerald-100 text-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Post-Purchase Magic */}
      <section className="py-24 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-600 text-white mb-8 shadow-xl shadow-emerald-600/20">
              <PlayCircle className="w-10 h-10 ml-1" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-8">
              Payment Ke Baad Kya Hoga?
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-emerald-100">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                <strong className="text-emerald-700">SubhanAllah, koi tension nahi!</strong> Payment hote hi aap automatically 'My Account' par redirect ho jayenge. Wahan 'My Courses' mein jakar 'Start Learning' dabayein. Koi password yaad rakhne ki zaroorat nahi!
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. Iron-Clad Trust & Support */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500 rounded-full blur-[100px] opacity-20"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366] text-white mb-8 shadow-lg shadow-[#25D366]/30">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                  100% Support Guarantee
                </h2>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                  Agar payment mein ya course chalane mein 1% bhi dikkat aaye, toh Team Government Shiksha aapke sath khadi hai. Bas hamare WhatsApp number <strong className="text-white">916396162918</strong> par message karein, hum poori madad karenge, InshaAllah.
                </p>
                <a 
                  href="https://wa.me/916396162918" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> Message on WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 10. Final Call to Action & Footer */}
      <section className="pt-24 pb-12 px-4 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080?blur=10')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-10 leading-tight">
              Waqt Zaya Na Karein, Apni Nayi Tarkeeb Ka Aaghaz Karein!
            </h2>
            
            <motion.a
              href={CTA_LINK}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xl md:text-3xl font-bold px-10 py-6 md:py-8 rounded-full shadow-[0_0_60px_rgba(217,119,6,0.5)] hover:shadow-[0_0_80px_rgba(217,119,6,0.7)] transition-all duration-300 w-full md:w-auto mb-16"
            >
              Enroll in Arabic & Claim ₹99 Offers Now
              <ArrowRight className="w-8 h-8" />
            </motion.a>
            
            <div className="border-t border-slate-800 pt-12">
              <p className="text-slate-500 text-sm">
                © 2026 Government Shiksha. All rights reserved. JazakAllah Khair.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
