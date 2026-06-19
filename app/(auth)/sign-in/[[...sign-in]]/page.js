import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl">
        
        {/* Left Side: Form Container */}
        <div className="flex flex-col justify-between p-8 sm:p-12 z-10">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 mb-8">
            <div className="h-9 w-9 bg-gradient-to-tr from-indigo-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg className="w-5 h-5 text-slate-950 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent tracking-wide">
              IntervAI
            </span>
          </div>

          {/* EASY CLERK REPLACEMENT:
            When you switch to Clerk, you can completely comment out or remove this dynamic block 
            and just render Clerk's components:
            
            isLogin ? <SignIn signUpUrl="/signup" /> : <SignUp signInUrl="/login" />
          */}
          <SignIn />

        </div>

        {/* Right Side: Feature Showcase Display */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-l border-slate-800/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

          {/* AI Feedback UI Concept Card */}
          <div className="relative my-auto space-y-6">
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl shadow-xl backdrop-blur-sm max-w-sm mx-auto transform hover:rotate-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">AI Live Evaluation</span>
              </div>
              
              <p className="text-sm text-slate-200 font-medium italic mb-4">
                "Your explanation of closures was accurate, but try incorporating real-world performance trade-offs to stand out."
              </p>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Technical Clarity</span>
                    <span className="text-emerald-400 font-medium">88%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[88%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Communication</span>
                    <span className="text-indigo-400 font-medium">75%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full w-[75%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center px-4">
              <h3 className="text-lg font-semibold text-white tracking-wide">
                Simulate stress-free. Perform flawlessly.
              </h3>
              <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto">
                Tailored behavioral and framework-specific mock tracks generated on-the-fly for your exact tech stack.
              </p>
            </div>
          </div>

          <div className="text-center text-xs text-slate-600 relative z-10">
            Secure, encrypted authentication portal.
          </div>
        </div>

      </div>
    </div>
  );
  
}