// Stocks de cada servicio
const serviceStocks = {
    'Prime Video': 130,
    'Twitch': 60,
    'Ubisoft': 742,
    'Filmora': 1567,
    'Duolingo': 1,
    'Geoguessr': 220,
    'DAZN': 182,
    'Disney Plus': 2,
    'Crunchyroll': 326,
    'Hulu': 0,
    'Paramount': 0,
    'Deezer': 93,
    'Xbox': 3,
    'AMC Plus': 20,
    'Molotov.tv': 16,
    'CapCut': 89,
    'NordVPN': 0,
    'Llaollao': 0,
    'NBA': 0,
    'Server Boost': 0,
    'Netflix': 0,
    'HBO Max': 0,
    'Minecraft': 0,
    'Roblox': 0,
    'Spotify': 0,
    'Movistar+': 2
};

// Precios de cada servicio (en euros)
const servicePrices = {
    'Netflix': 6.50,
    'Disney Plus': 4.00,
    'Prime Video': 3.23,
    'HBO Max': 2.50,
    'Crunchyroll': 1.50,
    'DAZN': 3.00,
    'Hulu': 1.50,
    'Paramount': 1.50,
    'AMC Plus': 3.24,
    'Molotov.tv': 1.00,
    'Spotify': 5.00,
    'Deezer': 1.50,
    'Xbox': 3.00,
    'Ubisoft': 3.46,
    'Minecraft': 8.23,
    'Roblox': 5.28,
    'Geoguessr': 2.50,
    'Twitch': 0.46,
    'Filmora': 3.00,
    'CapCut': 3.00,
    'NordVPN': 4.35,
    'Duolingo': 1.50,
    'Server Boost': 2.00,
    'NBA': 3.49,
    'Llaollao': 1.00,
    'Movistar+': 7.00
};

// Lista de servicios con información completa (organizados por categorías)
const services = [
    // Streaming de Video
    { name: 'Netflix', image: 'Netflix.png' },
    { name: 'Disney Plus', image: 'Disney plus.jpeg' },
    { name: 'Prime Video (cookies)', image: 'Primevideo.png', originalName: 'Prime Video' },
    { name: 'HBO Max', image: 'HBO.jpeg' },
    { name: 'Crunchyroll', image: 'crunchyroll.png' },
    { name: 'DAZN', image: 'dazn.png' },
    { name: 'Hulu', image: 'hulu.png' },
    { name: 'Paramount', image: 'Paramount.jpeg' },
    { name: 'AMC Plus', image: 'amcplus.png' },
    { name: 'Molotov.tv', image: 'molotov.tv.png' },
    { name: 'Movistar+', image: 'movistar.png' },
    // Streaming de Música
    { name: 'Spotify', image: 'Spotify.png' },
    { name: 'Deezer', image: 'deezer.jpeg' },
    // Juegos
    { name: 'Xbox', image: 'Xbox.png' },
    { name: 'Ubisoft', image: 'ubisoft.png' },
    { name: 'Minecraft', image: 'Minecraft.png' },
    { name: 'Roblox', image: 'Roblox.png' },
    { name: 'Geoguessr', image: 'geoguessr.jpeg' },
    { name: 'Twitch (cookies)', image: 'twitch.png', originalName: 'Twitch' },
    // Herramientas y Software
    { name: 'Filmora', image: 'filmora.png' },
    { name: 'CapCut', image: 'capcut.jpeg' },
    { name: 'NordVPN', image: 'nordvpn.png' },
    { name: 'Duolingo', image: 'duolingo.png' },
    // Otros
    { name: 'Server Boost', image: 'server boost.jpeg' },
    { name: 'NBA', image: 'nba.jpeg' },
    { name: 'Llaollao', image: 'llaollao.png' }
];

// Información detallada de cada servicio
const serviceDetails = {
    'Prime Video': {
        description: 'Cuenta de Prime Video con acceso a peliculas, series con todas las funcionalidades premium.',
        features: ['4K Ultra HD', 'Descargas offline', 'Sin anuncios', 'Acceso a Prime Gaming', 'Acceso completo a biblioteca'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Twitch': {
        description: 'Cuenta de Twitch con beneficios premium activos. Pago único, no es suscripción oficial. Incluye suscripciones activas y beneficios exclusivos.',
        features: ['Sin anuncios', 'Emotes personalizados', 'Badge de suscriptor', 'Chat colorido', 'Suscripciones activas'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Ubisoft': {
        description: 'Cuenta de Ubisoft Connect con juegos y contenido premium. Pago único, no es cuenta oficial. Incluye biblioteca de juegos.',
        features: ['Biblioteca de juegos', 'Contenido DLC', 'Beneficios exclusivos', 'Soporte prioritario', 'Acceso completo'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Filmora': {
        description: 'Cuenta de Filmora con licencia premium activa. Pago único, no es licencia oficial. Incluye todas las herramientas desbloqueadas.',
        features: ['Todas las funciones', 'Sin marca de agua', 'Efectos premium', 'Actualizaciones', 'Soporte técnico'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Duolingo': {
        description: 'Cuenta de Duolingo Plus con acceso completo. Pago único, no es suscripción oficial. Incluye todas las funcionalidades premium.',
        features: ['Sin anuncios', 'Lecciones ilimitadas', 'Todos los idiomas', 'Modo offline', 'Progreso ilimitado'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Geoguessr': {
        description: 'Cuenta de GeoGuessr Premium con acceso completo. Pago único, no es suscripción oficial. Incluye todas las funcionalidades.',
        features: ['Mapas ilimitados', 'Sin límites de tiempo', 'Estadísticas avanzadas', 'Desafíos exclusivos', 'Modo competitivo'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'DAZN': {
        description: 'Cuenta de DAZN con acceso premium activo. Pago único, no es suscripción oficial. Incluye eventos deportivos y contenido en 4K.',
        features: ['Eventos en vivo', 'Calidad 4K', 'Múltiples dispositivos', 'Contenido exclusivo', 'Sin anuncios'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Disney Plus': {
        description: 'Cuenta de Disney+ con acceso completo. Pago único, no es suscripción oficial. Incluye todo el contenido premium.',
        features: ['4K Ultra HD', 'Descargas ilimitadas', 'Hasta 7 perfiles', 'Contenido exclusivo', 'Sin anuncios'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Crunchyroll': {
        description: 'Cuenta de Crunchyroll Premium con acceso completo. Pago único, no es suscripción oficial. Incluye anime en HD y manga.',
        features: ['Anime en HD', 'Sin anuncios', 'Estrenos exclusivos', 'Múltiples dispositivos', 'Manga digital'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Hulu': {
        description: 'Cuenta de Hulu con acceso premium. Pago único, no es suscripción oficial. Incluye series exclusivas y contenido original.',
        features: ['HD y 4K', 'Sin anuncios', 'Contenido original', 'Estrenos exclusivos', 'Múltiples perfiles'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Paramount': {
        description: 'Cuenta de Paramount+ con acceso premium. Pago único, no es suscripción oficial. Incluye todo el contenido exclusivo.',
        features: ['4K Ultra HD', 'Sin anuncios', 'Contenido exclusivo', 'Estrenos simultáneos', 'Múltiples dispositivos'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Deezer': {
        description: 'Cuenta de Deezer Premium con acceso completo. Pago único, no es suscripción oficial. Incluye música ilimitada y alta calidad.',
        features: ['Audio HD', 'Descargas ilimitadas', 'Sin anuncios', 'Millones de canciones', 'Recomendaciones personalizadas'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Xbox': {
        description: 'Cuenta de Xbox Game Pass Ultimate con acceso completo. Pago único, no es suscripción oficial. Incluye cientos de juegos.',
        features: ['Cientos de juegos', 'Xbox Live Gold', 'Juegos de día uno', 'EA Play incluido', 'Cloud gaming'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'AMC Plus': {
        description: 'Cuenta de AMC+ con acceso premium. Pago único, no es suscripción oficial. Incluye series exclusivas y contenido original.',
        features: ['Contenido exclusivo', 'Estrenos anticipados', 'HD y 4K', 'Sin anuncios', 'Múltiples dispositivos'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Molotov.tv': {
        description: 'Cuenta de Molotov.tv Premium con acceso completo. Pago único, no es suscripción oficial. Incluye canales premium y grabación.',
        features: ['Canales premium', 'Grabación en la nube', 'Sin anuncios', 'Guía de programación', 'Múltiples dispositivos'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'CapCut': {
        description: 'Cuenta de CapCut con licencia premium activa. Pago único, no es licencia oficial. Incluye todas las herramientas desbloqueadas.',
        features: ['Todas las funciones', 'Efectos premium', 'Sin marca de agua', 'Exportación en alta calidad', 'Actualizaciones'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'NordVPN': {
        description: 'Cuenta de NordVPN Premium con acceso completo. Pago único, no es suscripción oficial. Incluye protección avanzada y servidores globales.',
        features: ['Servidores globales', 'Velocidad ilimitada', 'Protección avanzada', 'Kill Switch', 'Sin logs'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Llaollao': {
        description: 'Cuenta de Llaollao Premium con beneficios activos. Pago único, no es cuenta oficial. Incluye descuentos y beneficios exclusivos.',
        features: ['Descuentos exclusivos', 'Puntos bonus', 'Ofertas especiales', 'Pedidos prioritarios', 'Soporte VIP'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'NBA': {
        description: 'Cuenta de NBA League Pass Premium con acceso completo. Pago único, no es suscripción oficial. Incluye partidos en vivo y repeticiones.',
        features: ['Partidos en vivo', 'Repeticiones ilimitadas', 'Múltiples dispositivos', 'Contenido exclusivo', 'Estadísticas avanzadas'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Server Boost': {
        description: 'Server Boost de Discord activo. Pago único. Incluye beneficios premium para tu servidor y mejor calidad de audio.',
        features: ['Mejor calidad de audio', 'Emojis personalizados', 'Banner personalizado', 'Nivel 2 o 3', 'Activación inmediata'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Netflix': {
        description: 'Cuenta de Netflix Premium con acceso completo. Pago único, no es suscripción oficial. Incluye 4K Ultra HD y múltiples pantallas.',
        features: ['4K Ultra HD', '4 pantallas simultáneas', 'Descargas ilimitadas', 'Contenido exclusivo', 'Sin anuncios'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'HBO Max': {
        description: 'Cuenta de HBO Max Premium con acceso completo. Pago único, no es suscripción oficial. Incluye todo el contenido exclusivo en 4K.',
        features: ['4K Ultra HD', 'Contenido exclusivo', 'Estrenos simultáneos', 'Hasta 5 perfiles', 'Descargas offline'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Minecraft': {
        description: 'Cuenta de Minecraft Premium con acceso completo. Pago único, no es cuenta oficial. Incluye el juego completo y acceso a servidores.',
        features: ['Juego completo', 'Acceso a servidores', 'Skins personalizados', 'Actualizaciones', 'Soporte completo'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Roblox': {
        description: 'Cuenta de Roblox Premium con beneficios activos. Pago único, no es cuenta oficial. Incluye Robux y beneficios exclusivos.',
        features: ['Robux incluido', 'Beneficios exclusivos', 'Sin anuncios', 'Acceso prioritario', 'Soporte VIP'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Spotify': {
        description: 'Cuenta de Spotify Premium con acceso completo. Pago único, no es suscripción oficial. Incluye música ilimitada y alta calidad.',
        features: ['Música ilimitada', 'Sin anuncios', 'Audio de alta calidad', 'Descargas offline', 'Reproducción aleatoria'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    },
    'Movistar+': {
        description: 'Cuenta de Movistar+ Premium con acceso completo. Pago único, no es suscripción oficial. Incluye todo el contenido premium y eventos en vivo.',
        features: ['Contenido exclusivo', 'Eventos en vivo', '4K Ultra HD', 'Múltiples dispositivos', 'Sin anuncios'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    }
};

// Función para obtener la ruta de la imagen del servicio
function getServiceImagePath(serviceName) {
    const service = services.find(s => s.name === serviceName || s.originalName === serviceName);
    if (service) {
        return `image/${service.image}`;
    }
    return 'image/logo.png'; // Fallback al logo
}



// Función para crear las cards de servicios
function createServiceCards() {
    const servicesGrid = document.getElementById('services-grid');
    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.dataset.serviceName = service.name;
        
        const imagePath = getServiceImagePath(service.name);
        
        const iconDiv = document.createElement('div');
        iconDiv.className = 'service-icon';
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = service.name;
        img.className = 'service-logo';
        img.onerror = function() {
            this.style.display = 'none';
            iconDiv.textContent = service.name.substring(0, 2).toUpperCase();
            iconDiv.style.fontSize = '32px';
            iconDiv.style.fontWeight = '700';
            iconDiv.style.color = 'var(--text-light)';
            iconDiv.style.background = 'linear-gradient(135deg, var(--primary-blue), var(--accent-blue))';
        };
        
        iconDiv.appendChild(img);
        
        // Usar el nombre original si existe (para buscar precios/stocks), sino usar el nombre mostrado
        const serviceKey = service.originalName || service.name;
        const displayName = service.name;
        const stock = serviceStocks[serviceKey] || 0;
        const price = servicePrices[serviceKey] || 0.00;
        const isLastUnit = stock === 1;
        const stockClass = isLastUnit ? 'stock-value last-unit' : (stock > 0 ? 'stock-value in-stock' : 'stock-value');
        const stockText = isLastUnit ? 'Última unidad' : stock;
        const formattedPrice = price.toFixed(2);
        const isOutOfStock = stock === 0;
        const buttonClass = isOutOfStock ? 'service-buy-button disabled' : 'service-buy-button';
        const buttonText = isOutOfStock ? 'SIN STOCK' : 'COMPRAR YA';
        const buttonOnClick = isOutOfStock ? '' : `onclick="event.stopPropagation(); window.openPayPalPayment('${serviceKey}', '${formattedPrice}');"`;
        
        card.innerHTML = `
            <h3 class="service-name">${displayName}</h3>
            <div class="service-info">
                <div class="price">
                    <span class="price-currency">€</span>
                    <span class="price-value">${formattedPrice}</span>
                </div>
                <div class="stock">
                    <span class="stock-label">Stock:</span>
                    <span class="${stockClass}">${stockText}</span>
                </div>
            </div>
            <button class="${buttonClass}" ${buttonOnClick} ${isOutOfStock ? 'disabled' : ''}>${buttonText}</button>
        `;
        
        card.insertBefore(iconDiv, card.firstChild);
        
        // Agregar event listener para abrir el modal al hacer clic en la card
        card.addEventListener('click', () => {
            openProductModal(serviceKey, displayName);
        });
        
        servicesGrid.appendChild(card);
    });
}

// Función para abrir el modal de producto
function openProductModal(serviceName, displayName = null) {
    const modal = document.getElementById('product-modal');
    const modalContent = document.getElementById('modal-content');
    const details = serviceDetails[serviceName] || {
        description: 'Cuenta premium con acceso completo. Pago único, no es cuenta oficial.',
        features: ['Acceso completo', 'Soporte premium', 'Actualizaciones', 'Sin límites'],
        guarantee: '2 meses de garantía + Soporte 24/7'
    };
    
    const imagePath = getServiceImagePath(serviceName);
    const price = servicePrices[serviceName] || 0.00;
    const stock = serviceStocks[serviceName] || 0;
    const formattedPrice = price.toFixed(2);
    const isLastUnit = stock === 1;
    const stockClass = isLastUnit ? 'last-unit' : (stock > 0 ? 'in-stock' : '');
    const stockText = isLastUnit ? 'Última unidad' : stock;
    const titleToShow = displayName || serviceName;
    const isOutOfStock = stock === 0;
    const modalButtonClass = isOutOfStock ? 'modal-buy-button disabled' : 'modal-buy-button';
    const modalButtonText = isOutOfStock ? 'SIN STOCK' : 'Comprar ahora';
    const modalButtonOnClick = isOutOfStock ? '' : `onclick="window.openPayPalPayment('${serviceName}', '${formattedPrice}'); event.stopPropagation();"`;
    
    modalContent.innerHTML = `
        <div class="modal-product-image">
            <img src="${imagePath}" alt="${titleToShow}" class="product-detail-image">
        </div>
        <div class="modal-product-info">
            <h2 class="modal-product-title">${titleToShow}</h2>
            
            <div class="modal-pricing-simple">
                <div class="modal-price-section">
                    <span class="modal-price-label">Precio:</span>
                    <span class="modal-price">
                        <span class="price-currency">€</span>
                        <span class="price-value">${formattedPrice}</span>
                    </span>
                </div>
                <div class="modal-stock-section">
                    <span class="modal-stock-label">Stock disponible:</span>
                    <span class="modal-stock-value ${stockClass}">${stockText}</span>
                </div>
            </div>
            
            <button class="${modalButtonClass}" ${modalButtonOnClick} ${isOutOfStock ? 'disabled' : ''}>${modalButtonText}</button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners para el modal (se inicializan después de que el DOM esté listo)
function initModalListeners() {
    const modal = document.getElementById('product-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProductModal);
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
    }
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeProductModal();
        }
    });
}

// Animación de entrada
function initIntroAnimation() {
    const textIntro = document.getElementById('text-intro');
    const liquidEffect = document.getElementById('liquid-effect');
    const introAnimation = document.getElementById('intro-animation');
    const mainContent = document.getElementById('main-content');
    const letters = textIntro.querySelectorAll('.letter');
    
    let bounceCount = 0;
    const totalBounces = 4;
    
    // Función para hacer rebotar las letras
    function bounceLetters() {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('bounce');
                setTimeout(() => {
                    letter.classList.remove('bounce');
                }, 600);
            }, index * 50);
        });
    }
    
    // Primera secuencia: rebotar 4 veces
    function startBounceSequence() {
        bounceLetters();
        bounceCount++;
        
        if (bounceCount < totalBounces) {
            setTimeout(startBounceSequence, 800);
        } else {
            // Después de 4 rebotes, efecto de exprimir/golpe
            setTimeout(() => {
                textIntro.classList.add('squeeze');
                
                // Activar efecto de líquido después del exprimir
                setTimeout(() => {
                    liquidEffect.classList.add('active');
                    
                    // Ocultar animación y mostrar contenido después del líquido
                    setTimeout(() => {
                        introAnimation.classList.add('hidden');
                        mainContent.classList.remove('hidden');
                        createServiceCards();
                    }, 2000);
                }, 400);
            }, 800);
        }
    }
    
    // Iniciar animación después de un pequeño delay
    setTimeout(() => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = '1';
            }, index * 80);
        });
        
        // Comenzar secuencia de rebotes
        setTimeout(startBounceSequence, 500);
    }, 300);
}

// Función para abrir el pago de PayPal
window.openPayPalPayment = function(serviceName, price) {
    const paypalEmail = 'zraysuelmejor@gmail.com';
    const currency = 'EUR';
    const itemName = encodeURIComponent('OmniAccess - ' + serviceName);
    
    // URL de PayPal para pago directo (PayPal.me o botón de pago simple)
    // Usaremos el formato de botón de pago estándar de PayPal para mayor compatibilidad
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${encodeURIComponent(paypalEmail)}&item_name=${itemName}&amount=${price}&currency_code=${currency}&no_shipping=1&return=https://omniaccess.netlify.app/success&cancel_return=https://omniaccess.netlify.app/cancel`;
    
    window.open(paypalUrl, '_blank');
};

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    initModalListeners();
    initIntroAnimation();
});
