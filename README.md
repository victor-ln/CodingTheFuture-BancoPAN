# Coding The Future

## HTML

HTML (HyperText Markup Language) is a foundational markup language used for structuring and presenting content on the World Wide Web. It provides a standardized way to create documents consisting of text, images, links, and other multimedia elements. HTML is an essential component in web development and acts as the backbone for constructing web pages.

### History

In 1991, Tim Berners-Lee created this markup language to improve communication between himself and his CERN co-workers.
Since then, there have been up to 5 versions, and HTML has become the basis of the internet.

### Semantics

#### `<section>`

The `<section>` element defines a generic section in a document, such as list of articles, or any other thematic grouping of content. It helps to organize the content within the page.

#### `<header>`

The `<header>` element represents introductory content, usually a group of introductory or navigational aids. It often contains headings, logos, and other elements related to the document's header.

#### `<article>`

The `<article>` element is used to represent a relevant self-contained piece of content that could be distributed and reused independently, such as a news article or blog post. It encapsulates content that makes sense on its own.

#### `<aside>`

The `<aside>` element is used for content that is tangentially related to the content around it. It's typically used for sidebars or content that is not the primary focus but provides additional information.

#### `<footer>`

The `<footer>` element represents the footer of a section or a page. It usually contains metadata, copyright information, links to related documents, or contact information.

#### `<h1>` to `<h6>`

These elements (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`) represent headings of different levels. `<h1>` is the highest level, typically used for main headings, while `<h6>` is the lowest level. Headings provide structure and hierarchy to the document.

By incorporating these semantic elements into your HTML5 document, you enhance its structure and make it more accessible and meaningful for both developers and automated systems.

#### `<p>`

The `<p>` element is used to define paragraphs in HTML. It represents a block of text, images, video, etc.

#### `<a>`, `href`, and `target` Attributes

The `<a>` (anchor) element, used for links, has two important attributes:

- `href`: Specifies the URL the link points to (absolute or relative).
- `target`: Controls how the linked resource is displayed.

#### `<img>` Element

The `<img>` element in HTML is used to embed images in a web page. Below are details about the `src` and `alt` attributes:

1. **`src` (Source):**
   - Specifies the path to the image file (relative or absolute).
   - Example usage: `<img src="path/to/image.jpg" alt="Image description">`

2. **`alt` (Alternative Text):**
   - Provides alternative text for the image, useful for accessibility.
   - Example usage: `<img src="path/to/image.jpg" alt="A beautiful sunset over the city">`

### Lists

HTML provides tags to create both unordered lists (`<ul>`) and ordered lists (`<ol>`). The list items themselves are represented by the `<li>` (list item) tag.

#### Unordered List (`<ul>`)

An unordered list is used to represent a list of items where the order doesn't matter. Each item is marked with the `<li>` tag.

#### Ordered List (`<ol>`)

An ordered list is used when the order of items is important. The items are automatically numbered.

#### List Item (`<li>`)

The `<li>` tag is used to define each item in a list, whether it's in an unordered or ordered list.

## CSS

CSS (Cascading Style Sheets) is a powerful language used to define the presentation and layout of HTML documents. In CSS, rules consist of selectors (HTML elements, classes, and IDs) and declarations (style properties such as font, color, etc). The browser represents each HTML element as a rectangular box, and this is referred to as the box model. With CSS, we can manipulate the appearance of this box.

### Box Model

The box model is composed of four areas:

- **Margin:**
  - Represents the spacing outside the element.
  - Adjusts the distance between elements.

- **Border:**
  - Surrounds the padding and content.
  - Customizable width and color.

- **Padding:**
  - Represents the spacing between the border and the content.
  - Creates space within the element.

- **Content:**
  - Represents the actual content of the block element.

CSS provides the flexibility to create visually appealing and responsive designs for a wide range of devices and screen sizes.
