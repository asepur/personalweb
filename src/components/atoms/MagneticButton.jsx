import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import PropTypes from "prop-types";
import "./MagneticButton.css";

const MagneticButton = ({
  className = "",
  particleCount = 12,
  attractRadius = 50,
  icon: Icon = Send,
  text = "Contáctame",
  ...props
}) => {
  const [particles, setParticles] = useState([]);
  const buttonRef = React.useRef(null);

  useEffect(() => {
    // Crear partículas iniciales y guardar su posición inicial
    const newParticles = Array.from({ length: particleCount }, () => {
      const initialX = Math.random() * 200 - 100;
      const initialY = Math.random() * 200 - 100;
      return {
        x: initialX,
        y: initialY,
        initialX,
        initialY
      };
    });
    setParticles(newParticles);
  }, [particleCount]);

  const handleMouseMove = useCallback(
    (e) => {
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const newParticles = particles.map((p) => {
        if (distance < attractRadius) {
          // Atraer al puntero suavemente
          return {
            ...p,
            x: p.x + (dx - p.x) * 0.1,
            y: p.y + (dy - p.y) * 0.1
          };
        } else {
          // Mantener su posición actual
          return p;
        }
      });

      setParticles(newParticles);
    },
    [particles, attractRadius]
  );

  const handleMouseLeave = () => {
    // Al salir, devolver partículas a su posición inicial
    const newParticles = particles.map((p) => ({
      ...p,
      x: p.initialX,
      y: p.initialY
    }));
    setParticles(newParticles);
  };

  return (
    <div
      className="magnetic-button-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Partículas detrás del botón */}
      <div className="particles-container">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{ x: p.x, y: p.y }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        ))}
      </div>

      {/* Botón encima */}
      <a ref={buttonRef} href="mailto:asepur94@gmail.com" className={`magnetic-button ${className}`} {...props}>
        {Icon && <Icon size={18} style={{ marginRight: "0.5rem" }} />}
        {text}
      </a>
    </div>
  );
};

MagneticButton.propTypes = {
  className: PropTypes.string,
  particleCount: PropTypes.number,
  attractRadius: PropTypes.number,
  icon: PropTypes.elementType,
  text: PropTypes.string
};

export default MagneticButton;
