# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Allurereport-practice1.spec.ts >> reporter practice 2
- Location: tests\Allurereport-practice1.spec.ts:8:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Google1"
Received: "Google"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    12 × unexpected value "Google"

```

```yaml
- dialog "Antes de ir a la Búsqueda de Google":
  - img "Google"
  - 'button "Idioma: ‪Español (España)‬"': es
  - link "Iniciar sesión"
  - heading "Antes de ir a Google" [level=1]
  - text: Usamos
  - link "cookies":
    - /url: https://policies.google.com/technologies/cookies?utm_source=ucbs&hl=es
  - text: "y datos para:"
  - list:
    - listitem: Proporcionar y mantener nuestros servicios
    - listitem: Hacer un seguimiento de las interrupciones y prevenir el spam, el fraude y los abusos
    - listitem: Medir la interacción de la audiencia y estadísticas de los sitios para entender cómo se utilizan nuestros servicios y mejorar su calidad
  - text: "Si eliges Aceptar todo, también usaremos cookies y datos para:"
  - list:
    - listitem: Desarrollar y mejorar nuevos servicios
    - listitem: Proporcionar anuncios y medir su eficacia
    - listitem: Mostrar contenido personalizado en función de tus ajustes
    - listitem: Mostrar anuncios personalizados en función de tus ajustes
  - text: Si eliges Rechazar todo, no usaremos cookies para estos fines adicionales. El contenido no personalizado está influido por factores como lo que estés viendo en ese momento, la actividad de tu sesión de búsqueda activa y tu ubicación. Los anuncios no personalizados están influidos por lo que estés viendo en ese momento y tu ubicación general. El contenido y los anuncios personalizados también pueden incluir resultados y recomendaciones más relevantes, así como anuncios basados en la actividad que se haya realizado previamente con este navegador, como búsquedas en Google anteriores. En caso necesario, también usamos cookies y datos para adaptar la experiencia de modo que sea apropiada para determinada edad. Selecciona Más opciones para ver información adicional, como detalles sobre la gestión de la configuración de privacidad. También puedes visitar g.co/privacytools en cualquier momento.
  - button "Rechazar todo"
  - button "Aceptar todo"
  - link "Más opciones de ajustes de personalización y cookies": Más opciones
  - link "Privacidad":
    - /url: https://policies.google.com/privacy?hl=es&fg=1&utm_source=ucbs
  - link "Términos":
    - /url: https://policies.google.com/terms?hl=es&fg=1&utm_source=ucbs
```

# Test source

```ts
  1  | import {test, expect} from "@playwright/test"
  2  | 
  3  | test("reporter practice 1", async({page})=>{
  4  |     await page.goto("http://www.google.com")
  5  |     await expect(page).toHaveTitle("Google")
  6  | })
  7  | 
  8  | test("reporter practice 2", async({page})=>{
  9  |     await page.goto("http://www.google.com")
> 10 |     await expect(page).toHaveTitle("Google1")
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  11 | })
  12 | 
  13 | test("reporter practice 3", async({page})=>{
  14 |     await page.goto("http://www.google.com")
  15 |     await expect(page).toHaveTitle("Google")
  16 | })
```