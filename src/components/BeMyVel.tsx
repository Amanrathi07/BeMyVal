import { useState } from "react"
import { useParams } from "react-router"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles } from "lucide-react"

export default function BeMyVel() {
  const { name } = useParams()
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [accepted, setAccepted] = useState(false)
  const [scale, setScale] = useState(1)

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 120 - 60)
    const randomY = Math.floor(Math.random() * 60 - 30)
    setNoPosition({ x: randomX, y: randomY })
    setScale((prev) => Math.max(prev - 0.1, 0.1))
  }

  if (!name) return null

  return (
    <div className="min-h-screen w-full romantic-gradient flex items-center justify-center px-4 relative overflow-hidden floating-hearts">
      
      {/* Decorative background elements */}
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

      {/* Floating animated heart - top left */}
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
        className="absolute top-8 left-8 sm:top-12 sm:left-12"
      >
        <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary fill-primary/30 drop-shadow-lg" />
      </motion.div>

      {/* Floating heart - bottom right */}
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
        className="absolute bottom-24 right-6 sm:bottom-20 sm:right-16"
      >
        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary/60 fill-primary/20" />
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-lg bg-card card-romantic-shadow rounded-2xl p-6 sm:p-10 space-y-6 sm:space-y-8 border border-border/50 text-center relative backdrop-blur-sm"
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

        {!accepted ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="text-xl sm:text-3xl font-serif font-semibold tracking-tight text-foreground">
                <span className="text-gradient-rose">{name}</span>, will you be my Valentine?
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground font-light">
                This is a very important life decision.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center gap-6 pt-4 relative items-center min-h-20"
            >
              <Button
                onClick={() => setAccepted(true)}
                className="h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-medium rounded-xl bg-primary hover:bg-rose-deep active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex items-center gap-2"
                >
                  Yes
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </motion.span>
              </Button>

              <motion.div
                animate={{ 
                  x: noPosition.x, 
                  y: noPosition.y,
                  scale: scale
                }}
                transition={{ type: "spring", stiffness: 220 }}
              >
                <Button
                  variant="outline"
                  onClick={moveNoButton}
                  onMouseEnter={moveNoButton}
                  className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-medium rounded-xl border-2 border-border/60 hover:border-primary/40 transition-all duration-300"
                >
                  No
                </Button>
              </motion.div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="space-y-4 sm:space-y-6 py-4"
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-primary fill-primary mx-auto drop-shadow-lg animate-heart-beat" />
            </motion.div>
            
            <h2 className="text-2xl sm:text-4xl font-serif font-semibold text-gradient-rose">
              LET'S GOOOO 💘
            </h2>
            
            <p className="text-sm sm:text-base text-muted-foreground font-light">
              This was obviously the correct choice.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-2 pt-2"
            >
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ 
                    y: [-2, 2, -2],
                    rotate: [-5, 5, -5]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.1 
                  }}
                  className="text-lg sm:text-xl"
                >
                  💕
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
