
import React from 'react';
import { motion } from 'framer-motion';

interface AiImageProps {
  prompt?: string;
  src?: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
  alt?: string;
}

const getImageFromPrompt = (prompt: string): string => {
  const p = prompt.toLowerCase();
  
  // Home Page - Hero Abstract
  if (p.includes('neon indigo and rose lines')) return 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop';
  
  // Service: Loan Settlement (Indigo theme)
  if (p.includes('finance negotiation')) return 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop';
  
  // Service: IPR (Violet theme)
  if (p.includes('violet shield')) return 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop';
  
  // Service: Property (Emerald theme)
  if (p.includes('emerald glass')) return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop';
  
  // Service: Documents (Cyan theme)
  if (p.includes('digital signature')) return 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop';
  
  // Service: Insurance (Rose theme)
  if (p.includes('rose colored safety')) return 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop';
  
  // Service: Credit Rebuilding (Amber theme)
  if (p.includes('golden upward')) return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop';
  
  // IPR Page
  if (p.includes('technical design')) return 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop';

  // Voice Agents Page
  if (p.includes('ai voice')) return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop';

  // Fallback Abstract Tech
  return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop';
};

const AiImage: React.FC<AiImageProps> = ({ prompt, src, className = "", aspectRatio = "1:1", alt = "Edge Visual" }) => {
  const imageUrl = src || (prompt ? getImageFromPrompt(prompt) : 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop');

  // Map string aspect ratio to CSS style
  const getAspectRatioStyle = () => {
    const [w, h] = aspectRatio.split(':').map(Number);
    return { aspectRatio: `${w}/${h}` };
  };

  return (
    <div 
      className={`relative overflow-hidden bg-slate-100 ${className}`}
      style={getAspectRatioStyle()}
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Subtle overlay to ensure text legibility if overlaid or just to normalize colors */}
      <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay" />
    </div>
  );
};

export default AiImage;
