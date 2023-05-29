<h1>Rating component</h1>

<h2>Description</h2>
<p>It is a star rating component, that allows users to rate products, services, or experiences with precision by selecting half-star increments, enabling them to provide more nuanced feedback. The visually intuitive interface enhances the user experience, fostering more accurate representations of ratings and facilitating informed decision-making.</p>
<p>It is build with <a href="https://lit.dev/">Lit</a>. Lit is a simple library for building fast, lightweight web components. At Lit's core is a boilerplate-killing component base class that provides reactive state, scoped styles, and a declarative template system that's tiny, fast and expressive.</p>

<p>
<img src="./src/assets/screen.jpg" alt=""/>
</p>

<h2>Installation</h2>

With npm 
<code>npm i</code>

Start dev server
<code>npm run dev</code>

Build for production
<code>npm run build</code>

Locally preview production build
<code>npm run preview</code>

<h2>Usage</h2>
Default active medium size view 
<code>&lt;lit-rating&gt;&lt;/lit-rating&gt;</code>

<h3>Properties</h3>
<h4>Size</h4>
prop: <code>size</code> <br>
value: <code>'l' | 'm' | 's'</code><br>
default: <code>'m'</code><br><br>
<code>&lt;lit-rating <b>size=&quot;l&quot;</b>&gt;&lt;/lit-rating&gt;</code>

<h4>State</h4>      
prop: <code>state</code> <br>
value: <code>'active' | 'inactive' | 'disabled'</code><br>
default: <code>'active'</code> <br><br>
  
<code>&lt;lit-rating <b>state=&quot;inactive&quot;</b>&gt;&lt;/lit-rating&gt;</code>
    
<h4>Value</h4>
prop: <code>value </code><br>
value: <code>1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 </code><br>
default: <code>3 </code><br><br>
  
<code>&lt;lit-rating <b>value=&quot;3&quot;</b>&gt;&lt;/lit-rating&gt;</code>

<h3>Event Handler</h3>
<h4>onChange</h4>
prop: <code>onchange </code><br>
value type: <code>Function</code><br>
default: <code>(event: Event) =&gt; console.log(event) </code><br><br>
  
<code>&lt;lit-rating <b>onchange=&quot;Function&quot;</b>&gt;&lt;/lit-rating&gt;</code>

<h2>License</h2>

[MIT](https://choosealicense.com/licenses/mit/)
