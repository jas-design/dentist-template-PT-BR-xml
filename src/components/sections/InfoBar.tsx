import React from 'react';
import { Phone, Clock, Calendar } from 'lucide-react';
import { openCalendly } from '../../utils/config';
import { useConfig } from '../../context/ConfigContext';

const InfoBar = () => {
  const { config, loading } = useConfig();

  if (loading || !config) return null;

  const { contactInfo, sections } = config;
  const infoBar = sections.infoBar;

  return (
    <div className="bg-dark-navy py-6 relative z-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-primary">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-white text-base font-bold">{infoBar.contactText || 'Need Dental Services?'}</p>
              <p className="text-white/60 text-sm">{infoBar.callLabel || 'Call on :'} {contactInfo.phoneMain}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-primary">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-white text-base font-bold">{infoBar.hoursLabel || 'Opening Hours'}</p>
              <p className="text-white/60 text-sm">{infoBar.hoursValue || contactInfo.workingHours}</p>
            </div>
          </div>

          <button 
            onClick={openCalendly}
            className="px-8 py-3 bg-primary text-white rounded-full font-bold text-sm tracking-tight hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-primary/20 cursor-pointer"
          >
            {infoBar.buttonText || 'Make An Appointment'} <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"><Calendar size={14} /></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;

