# Nin Dental Clinic — Website

Sitio web oficial de **Nin Dental Clinic**, clínica odontológica ubicada en Gascue, Santo Domingo, República Dominicana.

Construido con React 18 + Vite, desplegado en Netlify.

---

## Stack

| Tecnología | Uso |
|---|---|
| React 18 | UI |
| Vite | Bundler / dev server |
| Vanilla CSS (custom properties) | Estilos |
| EmailJS | Notificación de citas por email |
| SheetDB | CRM — guarda citas en Google Sheets |
| React Icons | Iconografía |
| Google Fonts | Cormorant Garamond + Outfit |

---

## Comandos

```bash
npm install       # Instalar dependencias
npm run dev       # Servidor de desarrollo (http://localhost:5173)
npm run build     # Build de producción (genera /dist)
npm run preview   # Preview del build localmente
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables (necesarias para el formulario de citas):

```env
VITE_EMAIL_SERVICE_ID=
VITE_EMAIL_TEMPLATE_ID=
VITE_EMAIL_PUBLIC_KEY=
```

Estas credenciales corresponden a la cuenta de **EmailJS**. El endpoint de SheetDB está hardcodeado en `src/App.jsx`.

---

## Estructura del proyecto

```
drnin/
├── public/
│   └── assets/
│       ├── consultorio.png       # Imagen de fondo del hero
│       ├── equipo/               # Fotos del equipo médico
│       └── *.svg / *.png        # Íconos de servicios
├── src/
│   ├── assets/                   # Logos e imágenes importadas en JS
│   ├── components/
│   │   ├── Navbar.jsx            # Navegación fija con scroll effect
│   │   ├── Features.jsx          # Tarjeta de característica
│   │   ├── Services.jsx          # Tarjeta de servicio
│   │   ├── Equipo.jsx            # Tarjeta de doctor
│   │   ├── Input.jsx             # Input reutilizable con validación regex
│   │   ├── Socials.jsx           # Botón de red social
│   │   ├── Whatsapp.jsx          # Botón flotante de WhatsApp
│   │   └── Footer.jsx            # Pie de página
│   ├── featuresData.jsx          # Contenido: características de la clínica
│   ├── servicesData.jsx          # Contenido: 6 servicios dentales
│   ├── doctorsData.jsx           # Contenido: equipo médico
│   ├── App.jsx                   # Componente raíz — estado + lógica del form
│   ├── App.css                   # Todos los estilos (design system)
│   ├── index.css                 # Reset global
│   └── main.jsx                  # Punto de entrada React
├── index.html                    # HTML base (Google Fonts, meta tags)
├── vite.config.js
└── .env                          # Variables de entorno (no commitear)
```

---

## Flujo del formulario de citas

1. **Validación client-side** — nombre (solo letras/acentos), teléfono (`XXX-XXX-XXXX`), email, checkbox de consentimiento WhatsApp.
2. **EmailJS** — envía notificación al correo de la clínica.
3. **SheetDB** — registra la cita en Google Sheets (CRM).
4. **Modal de éxito** — confirmación visual al usuario.

---

## Servicios ofrecidos

- Diseño de sonrisa
- Implantes
- Carillas
- Blanqueamiento
- Ortodoncia
- Coronas y puentes

---

## Equipo médico

- Dr. Francisco Nin
- Dr. Yessica Palmy

---

## Despliegue

El sitio está conectado a **Netlify** con deploy continuo desde la rama `main`. Las variables de entorno se configuran en el panel de Netlify → Site settings → Environment variables.

---

## Contacto

- **Email:** clinicadentaldr.nin@gmail.com
- **Instagram:** [@nindentalclinic](https://www.instagram.com/nindentalclinic/)
- **WhatsApp:** +1 (809) 283-2825
- **Ubicaciones:**
  - Av. Pasteur No. 55, Suite 102, Gascue, Santo Domingo
  - Av. Simón Bolívar No. 105, Suite 102, Gascue, Santo Domingo
