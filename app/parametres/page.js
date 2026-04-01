'use client';

import { useState } from 'react';
import Sidebar from '../components/sidebar';
import MobileMenu from '../components/mobilemenu';
import Header from '../components/header';
import {
  User, CreditCard, Palette, Accessibility, Bell, Shield,
  ChevronRight, Camera, Eye, EyeOff, Moon, Sun, Monitor,
  Smartphone, Mail, MessageCircle, Heart, Users, Lock,
  Trash2, LogOut, Check
} from 'lucide-react';

const SECTIONS = [
  { key: 'profil',          label: 'Profil',          icon: User },
  { key: 'compte',          label: 'Compte',          icon: CreditCard },
  { key: 'apparence',       label: 'Apparence',       icon: Palette },
  { key: 'accessibilite',   label: 'Accessibilité',   icon: Accessibility },
  { key: 'notifications',   label: 'Notifications',   icon: Bell },
  { key: 'confidentialite', label: 'Confidentialité', icon: Shield },
];

/* ── Composants de sections ────────────────────────────────── */

function SectionProfil() {
  return (
    <div className="param-section">
      <h2 className="param-section-title">Profil</h2>
      <p className="param-section-desc">Ces informations sont visibles par les autres membres.</p>

      <div className="param-avatar-row">
        <div className="param-avatar-wrap">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="Avatar" className="param-avatar" />
          <button className="param-avatar-btn"><Camera size={16} /></button>
        </div>
        <div>
          <p className="param-avatar-label">Photo de profil</p>
          <p className="param-avatar-hint">JPG, PNG · max 5 Mo</p>
        </div>
      </div>

      <div className="param-fields">
        <div className="param-field-row">
          <div className="param-field">
            <label>Prénom</label>
            <input type="text" defaultValue="Alexandre" placeholder="Prénom" />
          </div>
          <div className="param-field">
            <label>Nom</label>
            <input type="text" defaultValue="Martin" placeholder="Nom" />
          </div>
        </div>
        <div className="param-field">
          <label>Nom d'utilisateur</label>
          <input type="text" defaultValue="@alexandre.martin" placeholder="@nom_utilisateur" />
        </div>
        <div className="param-field">
          <label>Bio</label>
          <textarea rows={3} defaultValue="Passionné de cyclisme et de trail 🚴 · Coach sportif certifié · #SansLimites" placeholder="Parle de toi..." />
        </div>
        <div className="param-field">
          <label>Localisation</label>
          <input type="text" defaultValue="Lyon, France" placeholder="Ville, Pays" />
        </div>
        <div className="param-field">
          <label>Sport principal</label>
          <input type="text" defaultValue="Cyclisme & Trail" placeholder="Ton sport" />
        </div>
      </div>

      <div className="param-actions">
        <button className="param-btn-save">Enregistrer les modifications</button>
      </div>
    </div>
  );
}

function SectionCompte() {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div className="param-section">
      <h2 className="param-section-title">Compte</h2>
      <p className="param-section-desc">Gère ton adresse e-mail, ton mot de passe et la sécurité de ton compte.</p>

      <div className="param-group">
        <h3 className="param-group-title">Adresse e-mail</h3>
        <div className="param-field">
          <label>E-mail actuel</label>
          <input type="email" defaultValue="alexandre.martin@email.com" />
        </div>
        <button className="param-btn-secondary">Changer l'adresse e-mail</button>
      </div>

      <div className="param-group">
        <h3 className="param-group-title">Mot de passe</h3>
        <div className="param-field">
          <label>Mot de passe actuel</label>
          <div className="param-input-icon">
            <input type={showPwd ? 'text' : 'password'} placeholder="••••••••" />
            <button type="button" onClick={() => setShowPwd(!showPwd)}>
              {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <div className="param-field">
          <label>Nouveau mot de passe</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <div className="param-field">
          <label>Confirmer le nouveau mot de passe</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <button className="param-btn-save">Mettre à jour le mot de passe</button>
      </div>

      <div className="param-group param-danger-group">
        <h3 className="param-group-title danger">Zone de danger</h3>
        <div className="param-danger-actions">
          <button className="param-btn-danger-outline"><LogOut size={16} /> Se déconnecter</button>
          <button className="param-btn-danger"><Trash2 size={16} /> Supprimer mon compte</button>
        </div>
      </div>
    </div>
  );
}

function SectionApparence() {
  const [theme, setTheme] = useState('system');
  const [fontSize, setFontSize] = useState('medium');

  const themes = [
    { key: 'light',  label: 'Clair',    icon: Sun },
    { key: 'dark',   label: 'Sombre',   icon: Moon },
    { key: 'system', label: 'Système',  icon: Monitor },
  ];

  const fontSizes = [
    { key: 'small',  label: 'Petite' },
    { key: 'medium', label: 'Normale' },
    { key: 'large',  label: 'Grande' },
  ];

  return (
    <div className="param-section">
      <h2 className="param-section-title">Apparence</h2>
      <p className="param-section-desc">Personnalise l'affichage de l'application à ton goût.</p>

      <div className="param-group">
        <h3 className="param-group-title">Thème</h3>
        <div className="param-theme-grid">
          {themes.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTheme(key)}
              className={`param-theme-btn${theme === key ? ' active' : ''}`}
            >
              <Icon size={24} />
              <span>{label}</span>
              {theme === key && <Check size={14} className="param-theme-check" />}
            </button>
          ))}
        </div>
      </div>

      <div className="param-group">
        <h3 className="param-group-title">Taille du texte</h3>
        <div className="param-fontsize-row">
          {fontSizes.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFontSize(key)}
              className={`param-fontsize-btn${fontSize === key ? ' active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="param-preview-text" style={{ fontSize: fontSize === 'small' ? '13px' : fontSize === 'large' ? '17px' : '15px' }}>
          Aperçu — Repousse tes limites chaque jour 💪
        </p>
      </div>

      <div className="param-group">
        <h3 className="param-group-title">Langue</h3>
        <div className="param-field">
          <select defaultValue="fr">
            <option value="fr">🇫🇷 Français</option>
            <option value="en">🇬🇧 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="de">🇩🇪 Deutsch</option>
          </select>
        </div>
      </div>

      <div className="param-actions">
        <button className="param-btn-save">Enregistrer</button>
      </div>
    </div>
  );
}

function SectionAccessibilite() {
  const [opts, setOpts] = useState({
    reduceMotion: false,
    highContrast: false,
    largeTargets: false,
    screenReader: false,
    captions: false,
  });

  const toggle = (key) => setOpts((prev) => ({ ...prev, [key]: !prev[key] }));

  const options = [
    { key: 'reduceMotion',  label: 'Réduire les animations',              desc: 'Limite les transitions et effets visuels.' },
    { key: 'highContrast',  label: 'Contraste élevé',                     desc: 'Augmente le contraste pour une meilleure lisibilité.' },
    { key: 'largeTargets',  label: 'Zones de clic agrandies',             desc: 'Élargit les boutons et liens pour faciliter le clic.' },
    { key: 'screenReader',  label: 'Optimisation lecteur d\'écran',        desc: 'Améliore la compatibilité avec les lecteurs d\'écran.' },
    { key: 'captions',      label: 'Sous-titres sur les vidéos',           desc: 'Affiche les sous-titres automatiquement.' },
  ];

  return (
    <div className="param-section">
      <h2 className="param-section-title">Accessibilité</h2>
      <p className="param-section-desc">Sans Limites est conçu pour être accessible à tous. Adapte l'expérience à tes besoins.</p>

      <div className="param-group">
        {options.map(({ key, label, desc }) => (
          <div key={key} className="param-toggle-row">
            <div>
              <p className="param-toggle-label">{label}</p>
              <p className="param-toggle-desc">{desc}</p>
            </div>
            <button
              onClick={() => toggle(key)}
              className={`param-toggle${opts[key] ? ' on' : ''}`}
              aria-pressed={opts[key]}
            >
              <span className="param-toggle-knob" />
            </button>
          </div>
        ))}
      </div>

      <div className="param-actions">
        <button className="param-btn-save">Enregistrer</button>
      </div>
    </div>
  );
}

function SectionNotifications() {
  const [notifs, setNotifs] = useState({
    likesEmail: true,  likesPush: true,
    commentsEmail: true, commentsPush: true,
    followsEmail: false, followsPush: true,
    messagesEmail: true, messagesPush: true,
    eventsEmail: false, eventsPush: false,
  });

  const toggle = (key) => setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));

  const rows = [
    { label: 'Likes sur mes publications',  icon: Heart,          emailKey: 'likesEmail',    pushKey: 'likesPush' },
    { label: 'Commentaires',                icon: MessageCircle,  emailKey: 'commentsEmail', pushKey: 'commentsPush' },
    { label: 'Nouveaux abonnés',            icon: Users,          emailKey: 'followsEmail',  pushKey: 'followsPush' },
    { label: 'Messages privés',             icon: Mail,           emailKey: 'messagesEmail', pushKey: 'messagesPush' },
    { label: 'Événements à venir',          icon: Bell,           emailKey: 'eventsEmail',   pushKey: 'eventsPush' },
  ];

  return (
    <div className="param-section">
      <h2 className="param-section-title">Notifications</h2>
      <p className="param-section-desc">Choisis comment et quand tu souhaites être notifié.</p>

      <div className="param-group">
        <div className="param-notif-header">
          <span />
          <span className="param-notif-col-label"><Mail size={14} /> E-mail</span>
          <span className="param-notif-col-label"><Smartphone size={14} /> Push</span>
        </div>
        {rows.map(({ label, icon: Icon, emailKey, pushKey }) => (
          <div key={label} className="param-notif-row">
            <span className="param-notif-label"><Icon size={16} /> {label}</span>
            <button onClick={() => toggle(emailKey)} className={`param-toggle small${notifs[emailKey] ? ' on' : ''}`} aria-pressed={notifs[emailKey]}>
              <span className="param-toggle-knob" />
            </button>
            <button onClick={() => toggle(pushKey)} className={`param-toggle small${notifs[pushKey] ? ' on' : ''}`} aria-pressed={notifs[pushKey]}>
              <span className="param-toggle-knob" />
            </button>
          </div>
        ))}
      </div>

      <div className="param-actions">
        <button className="param-btn-save">Enregistrer</button>
      </div>
    </div>
  );
}

function SectionConfidentialite() {
  const [priv, setPriv] = useState({
    profilePublic: true,
    activitiesPublic: false,
    showLocation: true,
    allowMessages: true,
    showOnline: true,
  });

  const toggle = (key) => setPriv((prev) => ({ ...prev, [key]: !prev[key] }));

  const options = [
    { key: 'profilePublic',    label: 'Profil public',              desc: 'Tout le monde peut voir ton profil.' },
    { key: 'activitiesPublic', label: 'Activités visibles par tous', desc: 'Tes performances sont accessibles sans abonnement.' },
    { key: 'showLocation',     label: 'Afficher ma localisation',   desc: 'Ta ville est visible sur ton profil.' },
    { key: 'allowMessages',    label: 'Autoriser les messages',      desc: 'Les membres peuvent t\'envoyer des messages privés.' },
    { key: 'showOnline',       label: 'Afficher ma présence',        desc: 'Les autres voient quand tu es en ligne.' },
  ];

  return (
    <div className="param-section">
      <h2 className="param-section-title">Confidentialité</h2>
      <p className="param-section-desc">Contrôle qui peut voir tes informations et interagir avec toi.</p>

      <div className="param-group">
        {options.map(({ key, label, desc }) => (
          <div key={key} className="param-toggle-row">
            <div>
              <p className="param-toggle-label">{label}</p>
              <p className="param-toggle-desc">{desc}</p>
            </div>
            <button
              onClick={() => toggle(key)}
              className={`param-toggle${priv[key] ? ' on' : ''}`}
              aria-pressed={priv[key]}
            >
              <span className="param-toggle-knob" />
            </button>
          </div>
        ))}
      </div>

      <div className="param-actions">
        <button className="param-btn-save">Enregistrer</button>
      </div>
    </div>
  );
}

/* ── Page principale ───────────────────────────────────────── */

const SECTION_COMPONENTS = {
  profil:          SectionProfil,
  compte:          SectionCompte,
  apparence:       SectionApparence,
  accessibilite:   SectionAccessibilite,
  notifications:   SectionNotifications,
  confidentialite: SectionConfidentialite,
};

export default function ParametresPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('profil');

  const ActiveComponent = SECTION_COMPONENTS[activeSection];

  return (
    <div className="flex h-screen bg-[#f3f6fb] overflow-hidden">
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />

      <div className="lg:ml-64 flex-1 flex flex-col w-full" onClick={() => setShowMenu(false)}>
        <Header setShowMobileMenu={setShowMobileMenu} />

        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="param-page-title">Paramètres</h1>

            <div className="param-layout">

              {/* ── NAV LATÉRALE ── */}
              <nav className="param-nav">
                {SECTIONS.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`param-nav-btn${activeSection === key ? ' active' : ''}`}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                    <ChevronRight size={16} className="param-nav-arrow" />
                  </button>
                ))}
              </nav>

              {/* ── CONTENU ── */}
              <div className="param-content">
                <ActiveComponent />
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
