# Imágenes del Sitio

## Imagen de portada del océano

Para que el sitio funcione correctamente, necesitas crear una imagen llamada `ocean-poster.jpg` en esta carpeta. Esta imagen debe ser:

1. Una captura representativa del video del océano
2. Optimizada para web (tamaño recomendado: 1920x1080px, peso máximo: 200KB)
3. De buena calidad para servir como respaldo mientras carga el video o en dispositivos móviles

## Recomendaciones para optimizar videos

Para el video `ocean01.mp4` ubicado en `/public/videos/`:

1. Comprimir el video usando una herramienta como HandBrake:

   - Resolución máxima: 1280x720 (720p)
   - Tasa de bits: 1500-2000 kbps
   - Códec: H.264
   - Formato: MP4
   - Duración: preferiblemente menos de 15 segundos para bucle

2. Considerar convertir el video a formato WebM (más ligero) y ofrecer ambas versiones:
   ```html
   <video>
     <source src="/videos/ocean01.webm" type="video/webm" />
     <source src="/videos/ocean01.mp4" type="video/mp4" />
   </video>
   ```
