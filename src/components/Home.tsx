import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"
import { useNavigate } from "react-router"

export default function Home() {
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!name.trim()) return
    navigate(`/${name.trim()}`)
  }

  return (
    <div className="w-full min-h-screen romantic-gradient flex justify-center pt-12 sm:pt-0 sm:items-center px-4 relative overflow-hidden floating-hearts">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left decorative heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        />
        {/* Bottom right decorative heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl"
        />
      </div>

      {/* Floating animated heart */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ 
          y: [-8, 8, -8], 
          opacity: 1,
          rotate: [-5, 5, -5]
        }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.5 },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-8 right-8 sm:top-12 sm:right-12"
      >
        <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary fill-primary/30 drop-shadow-lg" />
      </motion.div>

      {/* Secondary floating heart */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ 
          y: [6, -6, 6], 
          opacity: 0.6,
          rotate: [3, -3, 3]
        }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8, delay: 0.3 },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-24 left-6 sm:bottom-20 sm:left-16"
      >
        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary/60 fill-primary/20" />
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-card card-romantic-shadow rounded-2xl p-6 sm:p-10 space-y-6 sm:space-y-8 border border-border/50 relative backdrop-blur-sm"
      >
        {/* Sparkle decoration */}
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -top-3 -right-3"
        >
          <div className="bg-card rounded-full p-2 shadow-lg border border-border/30">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-2 sm:space-y-3 text-center"
        >
          <h1 className="text-xl sm:text-3xl font-serif font-semibold tracking-tight text-foreground">
            So… who's the{" "}
            <span className="text-gradient-rose">lucky person</span>?
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground font-light">
            Type their name carefully. This is serious business.
          </p>
        </motion.div>

        {/* Input + Button */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4 sm:space-y-5"
        >
          <div className="relative">
            <Input
              type="text"
              value={name}
              placeholder="Enter the name..."
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="text-center h-12 sm:h-14 px-4 sm:px-6 text-base sm:text-lg rounded-xl border-2 border-border/60 bg-background/80 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder:text-muted-foreground/60"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: name ? 1 : 0 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"
            />
          </div>

          <Button
            disabled={!name.trim()}
            onClick={handleSubmit}
            className="w-full h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-medium rounded-xl bg-primary hover:bg-rose-deep active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-40 disabled:shadow-none"
          >
            <motion.span
              initial={false}
              animate={{ scale: name ? [1, 1.02, 1] : 1 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              Continue
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.span>
          </Button>
        </motion.div>

        {/* Preparing message */}
        {name && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-center"
          >
            <p className="text-sm sm:text-base text-muted-foreground inline-flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
              Preparing something special for{" "}
              <span className="font-medium text-primary">{name}</span>…
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                ✨
              </motion.span>
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
