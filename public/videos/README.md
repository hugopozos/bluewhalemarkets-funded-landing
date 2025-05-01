# Optimización de Videos

Para optimizar el rendimiento del sitio, es importante comprimir adecuadamente los videos:

## Archivos necesarios

1. `ocean01.mp4` - Formato MP4 (H.264) para compatibilidad general
2. `ocean01.webm` - Formato WebM (VP9) para mejor compresión

## Recomendaciones de compresión

### Para formato MP4:

- Resolución: 1280x720px (720p)
- Tasa de bits: 1500-2000 kbps
- Códec: H.264
- Duración: 10-15 segundos (para bucle)
- Tamaño ideal: <1MB

### Para formato WebM:

- Resolución: 1280x720px (720p)
- Tasa de bits: 800-1200 kbps
- Códec: VP9
- Duración: misma que el MP4
- Tamaño ideal: <700KB

## Herramientas recomendadas

1. **HandBrake** - Para compresión inicial de MP4

   - https://handbrake.fr/

2. **FFmpeg** - Para conversión a WebM y ajustes avanzados

   ```bash
   # Comando para convertir a WebM con FFmpeg
   ffmpeg -i ocean01.mp4 -c:v libvpx-vp9 -b:v 1M -crf 30 -cpu-used 5 -deadline good ocean01.webm
   ```

3. **Servicios en línea**:
   - Cloudinary
   - ShortPixel

## Mejores prácticas

- Usar una imagen de póster como respaldo
- No cargar automáticamente videos en conexiones móviles
- Aplicar un efecto de desenfoque o filtro para mejorar legibilidad del texto
