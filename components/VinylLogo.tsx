import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VinylLogo: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const interruptedRef = useRef(false);
  const resumeRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState(false);

  const play = () => {
    setError(false);
    void audioRef.current?.play().catch(() => setError(true));
  };

  useEffect(() => {
    const audio = audioRef.current!;
    audio.volume = 0.4;
    const enable = () => {
      audio.muted = false;
      setIsMuted(false);
      if (interruptedRef.current) resumeRef.current = true;
      else play();
    };
    const pause = () => {
      if (!interruptedRef.current) resumeRef.current = !audio.paused;
      interruptedRef.current = true;
      audio.pause();
    };
    const resume = () => {
      if (!interruptedRef.current) return;
      interruptedRef.current = false;
      const shouldResume = resumeRef.current;
      resumeRef.current = false;
      if (shouldResume) play();
    };
    window.addEventListener('enable-background-music', enable);
    window.addEventListener('pause-background-music', pause);
    window.addEventListener('resume-background-music', resume);
    return () => {
      window.removeEventListener('enable-background-music', enable);
      window.removeEventListener('pause-background-music', pause);
      window.removeEventListener('resume-background-music', resume);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current!;
    if (interruptedRef.current) return;
    if (audio.paused) play();
    else audio.pause();
  };

  return (
    <div className="flex items-center gap-3">
      <audio ref={audioRef} src="/music/background.mp3" preload="metadata" loop
        onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}
        onError={() => { setError(true); setIsPlaying(false); }} />
      <button type="button" onClick={toggle}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={error ? 'Unable to play music — click to retry' : isPlaying ? 'Pause music' : 'Play music'}
        className="relative w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-lg border border-gray-800">
        <motion.span className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ rotate: { duration: isPlaying ? 4 : 0, repeat: isPlaying ? Infinity : 0, ease: 'linear' } }}>
        <span className="absolute inset-1 rounded-full border border-gray-700/50" />
        <span className="absolute inset-2 rounded-full border border-gray-700/50" />
        <span className="absolute inset-3 rounded-full border border-gray-700/50" />
        <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center z-10">
          <span className="w-1.5 h-1.5 bg-black rounded-full" />
        </span>
        </motion.span>
      </button>
      <button type="button" onClick={() => {
        const audio = audioRef.current!;
        audio.muted = !audio.muted;
        setIsMuted(audio.muted);
      }} aria-label={isMuted ? 'Unmute music' : 'Mute music'} title={isMuted ? 'Unmute music' : 'Mute music'}
        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-gray-100 transition-colors bg-white/50">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          {isMuted ? <path d="m17 9 5 6m0-6-5 6" /> : <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />}
        </svg>
      </button>
      {error && <span role="status" className="text-[10px] text-gray-600">Tap the record to retry</span>}
    </div>
  );
};

export default VinylLogo;
