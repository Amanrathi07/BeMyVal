import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Sparkles, Copy, Check } from "lucide-react"

export default function Home() {
  const [name, setName] = useState("")
  const [show, setShow] = useState<boolean>(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = () => {
    if (!name.trim()) return
    setTimeout(() => {
      setShow(true)
    }, 800)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `https://bemyval-ohov.onrender.com//${name}`
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full min-h-screen romantic-gradient flex justify-center pt-12 sm:pt-0 sm:items-center px-4 relative overflow-hidden floating-hearts">
      
      {/* Background glow elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl"
        />
      </div>

      {/* Floating hearts */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 right-10"
      >
        <Heart className="w-10 h-10 text-primary fill-primary/30 drop-shadow-lg" />
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6], rotate: [3, -3, 3] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 left-10"
      >
        <Heart className="w-6 h-6 text-primary/60 fill-primary/20" />
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-card card-romantic-shadow rounded-2xl p-8 space-y-8 border border-border/50 relative backdrop-blur-sm"
      >
        {/* Sparkle */}
        <div className="absolute -top-3 -right-3 bg-card rounded-full p-2 shadow-lg border border-border/30">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>

        {/* Heading */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-serif font-semibold tracking-tight">
            So… who's the{" "}
            <span className="text-gradient-rose">lucky person</span>?
          </h1>
          <p className="text-muted-foreground">
            Type their name carefully. This is serious business.
          </p>
        </div>

        {/* Input + Button */}
        <div className="space-y-5">
          <div className="relative">
            <Input
              type="text"
              value={name}
              placeholder="Enter the name..."
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="text-center h-14 text-lg rounded-xl border-2 border-border/60 bg-background/80 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          <Button
            disabled={!name.trim()}
            onClick={handleSubmit}
            className="w-full h-14 text-lg font-medium rounded-xl bg-primary hover:bg-rose-deep active:scale-[0.98] transition-all shadow-lg hover:shadow-xl disabled:opacity-40"
          >
            Continue <Heart className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Animated Link Section */}
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="pt-4"
            >
              <div className="bg-background/70 backdrop-blur-md border border-border/40 rounded-2xl p-5 space-y-4 shadow-inner relative overflow-hidden">
                
                <p className="text-center text-sm text-muted-foreground">
                  Your special link is ready ✨
                </p>

                <div className="text-center wrap-break-words px-4 py-3 rounded-xl bg-card/70 border border-border/40 font-medium text-primary">
                  https://bemyval-ohov.onrender.com//{name}
                </div>

                <Button
                  onClick={handleCopy}
                  className="w-full h-11 rounded-xl bg-primary hover:bg-rose-deep shadow-lg transition-all active:scale-[0.98]"
                >
                  {copied ? (
                    <>
                      Copied <Check className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    <>
                      Copy Link <Copy className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
