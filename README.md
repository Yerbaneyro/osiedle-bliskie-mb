# Osiedle Bliskie - Task

https://osiedlebliskiembmaster.gatsbyjs.io/

## Tools: 

Gatsby
TypeScript
Styled Components

Swiper
Mapbox  
Gatsby-plugin-smoothscroll
React-Burger-Menu

## Bugi i odczucia:

No cóż, na pewno można by to zrobić lepiej,może lepiej otypowac, pewnie struktura plików też mogłaby być inna, no i na pewno mógłbym zmniejszyć ilośc MediaQueries i generalnie kodu do stylowania. Usprawiedliwię się tym, że dopiero zaczynałem zabawę z Sytled Components i musiałem trochę złapać obycia. Z zastosowaniem SASS trochę inaczej podszedłbym do budowania responsywności. Na początku skupiłem się jednak na trochę "sztywnym" postawieniu tego co było na Figmie dla Desktopu. Dla Mobile nic nie było wiec improwizowałem.

Już po wrzuceniu na Gatsby Cloud pojawił się błąd z wyświetlaniem Mapboxa na serwerze. Lokalnie wszystko działało, ale na serwerze wyglądało na jakiś problem z połączeniem z API. Dokopałem się na StackOverflow i wygląda na to że problem jest po stronie Mapbox. Tak czy siak udało mi się zaimplementować rozwiązanie.

Trochę gimnastykowałem się z sliderem tzn. wymiary obrazków z CMS nie pasowały mi do rozmiarów DIV szablonu. Zastosowałem "Cover" trochę próbowałem pobawić się z układem obrazków w slajderze. Ale generalnie w realnym projekcie po prostu zastosowałbym inne obrazki. 

Generalnie spoko zadanie w miarę sprawnie poszło. Teraz bym innaczej do niego podszedł ale myślę, że się udało i generalnie zawsze nowe doświadczenie. Dzięki!


<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal TypeScript starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal-ts)
