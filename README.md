## Rendering MathML in a react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). and bundled with other libraries, including [mathjax3-react](https://github.com/asnunes/mathjax3-react) .

## Rendering MathML

Using the package [mathjax3-react](https://github.com/asnunes/mathjax3-react) you can render and process MathML content, raw ASCIIMath or TeX.

_Visit the package Github page above for more details._

---

### Getting started

`npm install` to install the dependencies.

When the installation has finished, run `npm start` to start the app.

#### How it works (_in this specific example_)

- In the `<App/>` component, MathJax is imported

```

import MathJax from 'mathjax3-react'

```

- Iniside the App component, append `<MathJax.Provider></MathJax.Provider>` tags. which takes some configuration as props. without passing any. it falls back to defaults. you can visit [the GitHub page](https://github.com/asnunes/mathjax3-react) to learn more.

- Within `<MathJax.Provider>`, append a `<MathJax.Html />` tag

- Fetch/hardcode an HTML + MathML string to be rendered

```
const html = `<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn>...`
```

- In `<MathJax.Html />`. Pass an `html` prop containing the HTML + MathML string to be render

```
<MathJax.Html html={html} />
```

- `<App/>` component should look like this:

```
import  MathJax  from  'mathjax3-react';

const html = `<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn>...`;

const  App = () => {
	return (
		<div  className='App'>
			<MathJax.Provider>
				<MathJax.Html  html={html}  />
			</MathJax.Provider>
		</div>
	);
};

export  default  App;
```

##### _Important note_

> When processing the MathML tag `<mspace linebreak="newline" />` > **into -->** `<mjx-mspace></mjx-mspace> ` for creating a linebreak in react, it doesn't render properly. It doesn't add a linebreak, so instead we need to fix it using CSS:
>
> ```
> mjx-mspace {
> display: block  !important;
> }
> ```

---

#### Final result:

![final result](https://i.ibb.co/K08nLNG/localhost-3000.png)
