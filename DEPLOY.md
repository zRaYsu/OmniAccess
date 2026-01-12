# Guía de Despliegue - OmniAccess

Esta guía te ayudará a publicar tu sitio web OmniAccess en diferentes plataformas.

## Opciones de Despliegue

### 1. Vercel (Recomendado - Más Fácil)

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta
2. Haz clic en "New Project"
3. Conecta tu repositorio de GitHub (o sube los archivos)
4. Vercel detectará automáticamente que es un sitio estático
5. Haz clic en "Deploy"
6. ¡Listo! Tu sitio estará en línea en segundos

**Ventajas:**
- Despliegue automático en cada push
- HTTPS gratuito
- CDN global
- Dominio personalizado gratuito

### 2. Netlify

1. Ve a [netlify.com](https://netlify.com) y crea una cuenta
2. Arrastra y suelta la carpeta del proyecto en Netlify
3. O conecta tu repositorio de GitHub
4. Netlify detectará automáticamente la configuración
5. Haz clic en "Deploy site"
6. ¡Listo!

**Ventajas:**
- Despliegue continuo
- HTTPS gratuito
- Formularios y funciones serverless

### 3. GitHub Pages

1. Sube tu código a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` o `master`
4. Selecciona la carpeta raíz `/`
5. Guarda los cambios
6. Tu sitio estará disponible en `https://tuusuario.github.io/nombre-repo`

**Nota:** El archivo `.github/workflows/deploy.yml` está configurado para despliegue automático.

### 4. Otros Servicios

También puedes usar:
- **Firebase Hosting**: [firebase.google.com](https://firebase.google.com)
- **Surge.sh**: `npm install -g surge && surge`
- **Cloudflare Pages**: [pages.cloudflare.com](https://pages.cloudflare.com)

## Archivos Necesarios

Asegúrate de tener estos archivos en tu proyecto:
- `index.html`
- `styles.css`
- `script.js`
- `image/` (carpeta con todas las imágenes)
- `README.MD`

## Configuración Post-Despliegue

Después de desplegar, verifica:
1. ✅ Todas las imágenes se cargan correctamente
2. ✅ Los enlaces de PayPal funcionan
3. ✅ El sitio es responsive en móviles
4. ✅ El dominio personalizado está configurado (opcional)

## Soporte

Si tienes problemas con el despliegue, revisa:
- Los logs de la plataforma de despliegue
- La consola del navegador para errores
- Que todos los archivos estén en la raíz del proyecto

