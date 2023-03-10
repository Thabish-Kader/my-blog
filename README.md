# My-Blog

## Next-js-13, Sanity, ISR

<img align="left" alt="NextJS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
<img align="left" alt="TypeScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
<img align="left" alt="TypeScript" width="30px" style="padding-right:10px;" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" />

<img align="left" alt="Tailwind" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />

<img align="left" alt="sanity" width="30px" style="padding-right:10px;" src="https://pics.freeicons.io/uploads/icons/png/17521277461551942823-512.png" />

<br/>
<br/>

This web application uses sanity as the cms. It allows the admin to preview the data before publishing it which is a new feature in sanity v3. This application uses ISR so that the data is served from the cache and is revalidated after 60s. Typescript it used for typesafety and tailwind is used for styling.

[Live Demo](https://my-blog-beyck3otj-thabish-kader.vercel.app/)

### Challenges

-   While implementing ISR for post page i was haveng trouble whith fetching the slugs from post as so `return slugs.map((slug) => ({
	slug: slug.current,
})); `
    which was wrong it was supposed be `return posts.map((post) => ({
	slug: post.slug.current,
})); `

This confusion was caused because i was fetching the data like so `const slugs: Slug[] = await client.fetch(query);`

But i was makeing a request to Post table so the schema was not matching. After some trial and error i finally managed to find the issue and was able to fetch data with `const posts: Post[] = await client.fetch(query);`

### Resources

-   [Sanity Docs for Preview](https://github.com/sanity-io/next-sanity#next-sanitypreview-live-real-time-preview)

-   [image-url in sanity](https://www.sanity.io/docs/image-url)

-   [Iframe Pane](https://www.sanity.io/plugins/iframe-pane)

-   [Slugs and query](https://www.sanity.io/docs/slug-type)

-   [Portable Text](https://www.npmjs.com/package/@portabletext/react)

### ScreenShots
<img width="1680" alt="Screen Shot 2022-12-24 at 10 11 26 AM" src="https://user-images.githubusercontent.com/76642519/209423996-36850f1f-a7f4-4106-8339-484259471441.png">

<img width="1680" alt="Screen Shot 2022-12-24 at 10 11 44 AM" src="https://user-images.githubusercontent.com/76642519/209423964-faba5122-8f2e-4fc7-8ed4-c94ee15451e7.png">

<img width="1680" alt="Screen Shot 2022-12-24 at 10 12 06 AM" src="https://user-images.githubusercontent.com/76642519/209423973-3ae381f4-8228-45cc-8867-af4a48ac53cb.png">

<img width="1680" alt="Screen Shot 2022-12-24 at 10 14 02 AM" src="https://user-images.githubusercontent.com/76642519/209424038-567fd63c-5eab-4d95-a6f0-30352df672af.png">





