import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "📍53 BD Moulay Ismail Roches Noires",
      color: "levain-botanical"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+212 6 23 72 21 98",
      color: "levain-clay"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "7h00 - 22h00 tous les jours",
      color: "levain-gold"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@levain.ma",
      color: "levain-botanical"
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-br from-levain-cream to-levain-flour relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-flour-texture opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-levain-charcoal mb-6">
          Réservez votre moment  <span className="text-levain-clay">Gourmand</span>
          </h2>
          <p className="font-body text-xl text-levain-charcoal/70 max-w-2xl mx-auto">
          Vivez une expérience culinaire unique au cœur de votre nouvelle maison de pâtisserie artisanale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className={`
                    p-3 rounded-xl
                    ${info.color === 'levain-botanical' ? 'bg-levain-botanical/10' : ''}
                    ${info.color === 'levain-clay' ? 'bg-levain-clay/10' : ''}
                    ${info.color === 'levain-gold' ? 'bg-levain-gold/10' : ''}
                  `}>
                    <info.icon className={`
                      w-6 h-6
                      ${info.color === 'levain-botanical' ? 'text-levain-botanical' : ''}
                      ${info.color === 'levain-clay' ? 'text-levain-clay' : ''}
                      ${info.color === 'levain-gold' ? 'text-levain-gold' : ''}
                    `} />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-levain-charcoal">
                      {info.title}
                    </h3>
                    <p className="font-body text-levain-charcoal/70">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div 
              className="h-64 bg-gradient-to-br from-levain-botanical/20 to-levain-clay/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps?q=53+Bd+Moulay+Isma%C3%AFl&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Notre adresse sur la carte"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body font-semibold text-levain-charcoal">
                    Nom complet
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-levain-cream focus:border-levain-botanical rounded-xl transition-all duration-300 font-body"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-body font-semibold text-levain-charcoal">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-levain-cream focus:border-levain-botanical rounded-xl transition-all duration-300 font-body"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body font-semibold text-levain-charcoal">
                    Téléphone
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-2 border-levain-cream focus:border-levain-botanical rounded-xl transition-all duration-300 font-body"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-body font-semibold text-levain-charcoal">
                    Nombre de personnes
                  </label>
                  <motion.select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-levain-cream focus:border-levain-botanical rounded-xl transition-all duration-300 font-body"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Choisir...</option>
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5+">5+ personnes</option>
                  </motion.select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-body font-semibold text-levain-charcoal">
                  Date et heure souhaitées
                </label>
                <motion.input
                  type="datetime-local"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('date')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 border-2 border-levain-cream focus:border-levain-botanical rounded-xl transition-all duration-300 font-body"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="space-y-2">
                <label className="font-body font-semibold text-levain-charcoal">
                  Message (optionnel)
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-levain-cream focus:border-levain-botanical rounded-xl transition-all duration-300 font-body resize-none"
                  placeholder="Demandes spéciales, allergies, occasion..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-levain-botanical to-levain-clay text-white font-body font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Confirmer la réservation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
